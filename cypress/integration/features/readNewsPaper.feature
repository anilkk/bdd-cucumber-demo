  Feature: Read the news papaer
  
  As John, I need a good light in order to read the news paper
  
  Scenario: Read news paper during the day without room light
    Given John is at his home
      And it's a morning
      And light is off
     Then he should be able to read the the news paper
  
  Scenario: Read news paper during the day with room light on
    Given John is at his home
      And it's a morning
      And light is on
     Then he should be able to read the the news paper
  
  Scenario: Not able to read news paper during the night
    Given John is at his home
      And it's a night
      And light is off
     Then he should not be able to read the the news paper
  
  Scenario: Able to read news paper during the night
    Given John is at his home
      And it's a night
      And light is off
     When he switch on the light
     Then he should be able to read the the news paper
  