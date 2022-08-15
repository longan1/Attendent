const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://agl-tool.xyz/login');

    await driver.findElement(By.xpath('/html/body/div/main/div/div/div/div/div[2]/form/div[1]/div/input')).sendKeys('pham_long_an@allgrow-labo.jp');
    await driver.findElement(By.xpath('/html/body/div/main/div/div/div/div/div[2]/form/div[2]/div/input')).sendKeys('v2hy0iCXWw');
    await driver.findElement(By.xpath('/html/body/div/main/div/div/div/div/div[2]/form/div[3]/div/button')).click();
    await driver.findElement(By.xpath('/html/body/div/main/div/div/div/div/div[2]/ul/li[5]')).click();
    // await driver.sleep(3000);
    await driver.sleep(1000)
    const iframe = driver.findElement(By.xpath('/html/body/div[1]/main/div/div/div[1]/div/div[2]/div/div[2]/form/div/div/div/div/iframe'));
    await driver.switchTo().frame(iframe);
    driver.sleep(1000)
    await driver.findElement(By.xpath('/html/body/div[2]/div[3]/div[1]/div/div/span/div[1]')).click();
    await driver.sleep(1000)
    await driver.switchTo().defaultContent();

    await driver.findElement(By.xpath('/html/body/div[1]/main/div/div/div[1]/div/div[2]/div/div[2]/form/div/button')).click();
  } finally {
    // await driver.quit();
  }
})();