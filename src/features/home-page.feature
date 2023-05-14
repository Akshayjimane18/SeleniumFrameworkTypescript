Feature: As a user i expect to be able to navigate the home page

    @dev
    Scenario: As a user i want to be able to see the contacts header
        Given I am on the home page
        Then the contacts header should contain the text contacts
        