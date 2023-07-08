Feature: As a user i expect to be able to navigate the home page

    @smoke
    Scenario: As a user i want to be able to see the contacts header
        Given I am on the "home" page
        And the "contacts header" should contain the text "Contacts"
        Then the "header logo" should be displayed