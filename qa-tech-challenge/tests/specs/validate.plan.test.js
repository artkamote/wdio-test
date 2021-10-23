var simOnlyPage = require('../pages/simonlyPage');
var apiNewServiceType = require('../api/getService');

process.env.API_URL = 'https://api-prod.prod.cms.df.services.vodafone.com.au/plan/postpaid-simo?serviceType=New'

let apiNewPlans
describe('validate plan',  () => {
    before( () => {
        simOnlyPage.simOnlyloaded()
    });

    it('should display sim only page',   () => {
        simOnlyPage.gotoUrl('/plans/sim-only')
    });

    it('should have all the plan correct',  async() => {

        // new window call
        await browser.newWindow(process.env.API_URL, {
            windowName: 'WebdriverIO window',
        })
        await console.log('new window',await browser.getTitle()) // outputs: "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js"
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        const data = await apiNewServiceType.main.getText()
        await console.log("data text", data);
        await browser.closeWindow()

        //switchback to 1st browser
        await browser.switchToWindow(handles[0])
        await console.log('old window', await  browser.getTitle())

        const json = await JSON.parse(data).planListing.plans

        //$40 plan
        const plan1 = await simOnlyPage.AddButton1.getText()
        expect(await apiNewServiceType.getctaLabel(json,"40")).toEqual(plan1)

        //$45 plan
        const plan2 = await simOnlyPage.AddButton2.getText()
        expect(await apiNewServiceType.getctaLabel(json,"45")).toEqual(plan1)

        //$55 plan
        const plan3 = await simOnlyPage.AddButton3.getText()
        expect(await apiNewServiceType.getctaLabel(json,"55")).toEqual(plan1)

    });


    // it('should load Add to cart',  () => {
    //     simOnlyPage.ClickPlan1()
    //     expect(simOnlyPage.loadPlan1()).toEqual('Choose your extras');
    //
    // });

 });
