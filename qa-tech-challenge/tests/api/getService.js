var BasePage = require('../pages/basePage');

class getService extends BasePage{

    get main() {
        return $('body > pre')
    }

    async loadedapimain() {
        await super.waitForElementToBeVisible(this.main, 'get call failed.');
        await this.pageLoadedScreenshot();
        return true;
    }

    async getctaLabel(jsondata, planamount) {

        for(var i = 0; i < jsondata.length; i++) {
            var obj = jsondata[i];
            if (obj.recurringCharge == planamount) {
                return obj.ctaLabel
            }
            //console.log(obj.id);
        }

    }


}

module.exports = new getService()
