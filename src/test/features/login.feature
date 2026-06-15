
Feature: OrangeHRM Login Functionality
Background:
    Given User lunch OrangeHRM Application

    @validLogin
        Scenario Outline: Login with valid credentials
            When User enters username "<username>"
            And User enters password "<password>"
            And User clicks Login button
            Then User should navigate to Dashboard page
            Examples:
            |username|password|
            |Admin|Qedge123!@#|
            |Admin|Qedge123!@#|
            |Admin|Qedge123!@#|