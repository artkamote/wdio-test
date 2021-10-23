class BasePage {
    constructor() {
        this.shortDelay = 500;
        this.longDelay = 30000;
        this.screenshotPath = './results/screenshots'
    }

    async goto() {
        await browser.url(this.url);
    }

    async open() {
        await browser.url('/');
    }

    async gotoUrl(url) {
        await  browser.url(url);
    }

    async pageLoadedScreenshot() {
        await this.screenshot(`${this.constructor.name.toString()}_loaded`);
    }

    async screenshot(name) {
        var timeNow = await new Date().toLocaleTimeString();
        var timeNowString = await timeNow.replace(/:| |-|\./g, '_')
        await browser.saveScreenshot(`${this.screenshotPath}/${timeNowString}_${name}.png`);
    }

    async waitForElementToBeVisible(element, errorMsg) {
        await browser.waitUntil(function() {
            return element.isVisible() === true;
        }, browser.options.waitforElementTimeout, errorMsg);
    }

    async waitForElementsToBeVisible(selector, errorMsg) {
        await browser.waitUntil(function() {
            let length = browser.elements(selector).value.length;
            return length > 0;
        }, browser.options.waitforElementTimeout, errorMsg);
    }

    async waitForElementToNotExist(element) {
        return await element.waitForExist(browser.options.waitforElementTimeout, true);
    }
}

module.exports = BasePage;
