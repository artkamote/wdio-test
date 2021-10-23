var BasePage = require('./basePage');

// image dynamic variable
var imageElement = null

class SimOnlyPage extends BasePage {

    constructor() {
        super();
    }
    async openURL(){
        await this.open();
    }

    async simOnlyloaded() {
        await this.waitForElementToBeVisible(this.banner, 'banner not visible.');
        await this.pageLoadedScreenshot();
        return true;
    }

    async loadPlan1() {
        var planbanner = $('#__next > main > section.Sectionstyles__Section-sc-1u6q76v-0.iRyrOq > div > div > h1')
        await this.waitForElementToBeVisible(planbanner, '$40 plan basket not visible.');
        await this.pageLoadedScreenshot();
        return await planbanner.getText()
    }

    async ClickPlan1() {
        await this.AddButton1.click()
    }

    // Page elements
    get banner() {
        return $('#__next > main > section.Sectionstyles__Section-sc-1u6q76v-0.iRyrOq > div > div > h1')
    }

    //$40
    get AddButton1() {
        return $('#accordion-item-63 > button')
    }

    //$45
    get AddButton2() {
        return $('#accordion-item-68 > button')
    }

    //$55
    get AddButton3() {
        return $('#accordion-item-73 > button')
    }

    //$65
    get AddButton4() {
        return $('#accordion-item-78 > button')
    }

    //$85
    get AddButton5() {
        return $('#accordion-item-83 > button')
    }

}

module.exports = new SimOnlyPage();
