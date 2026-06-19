
import{Given, When, Then, Before, After, BeforeAll} from '@cucumber/cucumber';
import{chromium, Browser, Page, BrowserContext} from "@playwright/test";

let browser: Browser;
let context: BrowserContext;
let page: Page;

Before(async()=>{ 
    browser= await chromium.launch({
     headless:true,
    })
    context= await browser.newContext();
    page = await context.newPage();
    console.log("Execution started")
  })
      Given("User lunch OrangeHRM Application", async function () {
        // Write code here that turns the phrase above into concrete actions
        await page.goto("http://orangehrm.qedgetech.com/")                 
      });
      When("User enters username {string}", async function (username:string) {
           await page.locator('#txtUsername').fill(username)   
      });
      When('User enters password {string}', async function (password:string) {
           await page.locator('#txtPassword').fill(password)        
      });
      When('User clicks Login button', async function () {
          await page.locator('#btnLogin').click()
        
      });
      Then('User should navigate to Dashboard page', async function () {
          const DashboardText= await page.locator('div h1').textContent()
          console.log(DashboardText)
      });

After (async()=>{
      await browser.close()
    })