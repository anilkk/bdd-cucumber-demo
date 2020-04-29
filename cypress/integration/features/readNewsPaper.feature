  Feature: Read the book
  
  As Maria, I need a good light in order to read the book
  
  Scenario: Maria should be able to read the book during the day without room light
    Given Maria is at her home
      And it's a morning
      And light is off
     Then she should be able to read the book
  
  Scenario: Maria should be able to read the book during the day with room light on
    Given Maria is at her home
      And it's a morning
      And light is on
     Then she should be able to read the book
  
  Scenario: Maria should not be able to read the book during the night
    Given Maria is at her home
      And it's a night
      And light is off
     Then she should not be able to read the book
  
  Scenario: Maria should be able to read book during the night
    Given Maria is at her home
      And it's a night
      And light is off
     When she switch on the light
     Then she should not be able to read the book
  