Feature: Login
@smoketest
Scenario: validate site launching
Given launch site using "chrome"
Then title contains "Free SMS"
And close site

Scenario Outline: validate login operation
Given launch site using "chrome"
When enter mobile number as "<x>"
And enter password as "<y>"
And click login
Then validate output for criteria "<z>"
And close site
Examples:

      | 		x				| 	y				| 		z					|
      | 9885675068  | test12345 | all_valid 		|
      | 						| test12345	| mbno_blank		|
      | 9885675068	| 					| pwd_blank		 	|
      | 9848012345	| test12345	| mbno_invalid 	|
      | 9885675068	| test432		| pwd_invalid		|
