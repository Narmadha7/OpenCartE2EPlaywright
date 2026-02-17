import { Page, Locator } from "@playwright/test";

export class RegisterPage{

    private readonly page: Page

    private readonly txtFirstname: Locator
    private readonly txtLastname: Locator
    private readonly txtEmail: Locator
    private readonly txtTelephone: Locator
    private readonly txtPassword: Locator
    private readonly txtConfirmPassword: Locator
    private readonly chkdPolicy: Locator
    private readonly btnContinue: Locator
    private readonly msgConfirmation: Locator

    // constructor

    constructor(page:Page){
        this.page = page

        this.txtFirstname = page.locator("#input-firstname")
        this.txtLastname = page.locator("#input-lastname")
        this.txtEmail = page.locator("#input-email")
        this.txtTelephone = page.locator("#input-telephone")
        this.txtPassword = page.locator("#input-password")
        this.txtConfirmPassword = page.locator("#input-confirm")
        this.chkdPolicy = page.locator("input[name='agree']")
        this.btnContinue = page.locator("input[value='Continue']")
        this.msgConfirmation = page.locator("h1:has-text('Your Account Has Been Created!')")
    }

    // action methods

    async isRegisterPageExists(){
        let title = await this.page.title()
        if(title)
        {
            return true
        }
        return false
    }

    async enterFirstname(firstname: string){
        try{
            await this.txtFirstname.fill(firstname)
        }
        catch(error)
        {
            console.log(`Exception Occured: ${error}`)
            throw error
        }
        
    }

    async enterLastname(lastname: string){
        try{
            await this.txtLastname.fill(lastname)
        }
        catch(error)
        {
            console.log(`Exception Occured: ${error}`)
            throw error
        }
        
    }

    async enterEmail(email: string){
        try{
            await this.txtFirstname.fill(email)
        }
        catch(error)
        {
            console.log(`Exception Occured: ${error}`)
            throw error
        }
        
    }

    async enterTelePhone(telephone: string){
        try{
            await this.txtFirstname.fill(telephone)
        }
        catch(error)
        {
            console.log(`Exception Occured: ${error}`)
            throw error
        }
        
    }

    async enterPassword(password: string){
        try{
            await this.txtFirstname.fill(password)
        }
        catch(error)
        {
            console.log(`Exception Occured: ${error}`)
            throw error
        }
        
    }

    async enterConfirmPassword(confirmpassword: string){
        await this.txtFirstname.fill(confirmpassword)   
    }

    async checkPolicy(): Promise<void>
    {
        await this.chkdPolicy.check()
    }

    async clickContinue()
    {
        await this.btnContinue.click()
    }

    async msgConfirm(): Promise<string | null>
    {
        return await this.msgConfirmation.textContent()
    }


    /**
     * Complete Registration Method
     * 
     */

    async completeRegistration(userData : {
        firstname: string,
        lastname: string
        email: string
        telephone: string,
        password: string
        confirmpassword: string
    })
    {
        await this.enterFirstname(userData.firstname)
        await this.enterLastname(userData.lastname)
        await this.enterEmail(userData.email)
        await this.enterTelePhone(userData.telephone)
        await this.enterPassword(userData.password)
        await this.enterConfirmPassword(userData.confirmpassword)
        await this.checkPolicy()
        await this.clickContinue()
        // this.msgConfirm()
    }

}