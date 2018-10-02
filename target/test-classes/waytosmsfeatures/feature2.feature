Feature: Logout
@smoketest
Scenario: validate logout operation
Given launch site using "chrome"
When do login with valid data
|	mbno			|	pwd			 |
|9885675068	|	test12345|
And do logout
Then home page will be reopened
And close site