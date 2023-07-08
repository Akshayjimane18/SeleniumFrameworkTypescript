Feature: As a user i expect to be able to create a new contacts

    @dev
    Scenario: As a user i expect to be able to create a new contact
    Given I am on the "home" page
    When I click on "create" button
    When I redirected to the "create contact" page
    And the "create contact header" should contain the text "Create Contact"
    Then I fill in the "name" input with "Tarry Barks"
    And I select the "Male" option from the "gender"
    And I fill in the "phone" input with "939-555-0113"
    And I fill in the "street" input with "742 Puma Terrace"
    And I fill in the "city" input with "SpringField"
    When I click on "save" button
    Then I redirected to the "home" page
    Then I fill in the "search" input with "Tarry Barks"
    And the "contact" should be displayed
    And the "full name label" should contain the text "Name:"
    And the "name" should contain the text "Tarry Barks"
    And the "gender label" should contain the text "Gender:"
    And the "gender" should contain the text "Male"
    And the "address label" should contain the text "Address:"
    And the "address" should contain the text "742 Puma Terrace, SpringField"
    And the "edit" should be displayed
    And the "delete" should be displayed
