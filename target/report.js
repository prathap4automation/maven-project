$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/feature1.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 568932,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "validate site launching",
  "description": "",
  "id": "login;validate-site-launching",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title contains \"Free SMS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 19
    }
  ],
  "location": "GlueCode.method2(String)"
});
formatter.result({
  "duration": 9313594914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Free SMS",
      "offset": 16
    }
  ],
  "location": "GlueCode.method3(String)"
});
formatter.write("Title Test passed");
formatter.result({
  "duration": 44655081,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.method4()"
});
formatter.result({
  "duration": 2302206917,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "validate login operation",
  "description": "",
  "id": "login;validate-login-operation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "enter mobile number as \"\u003cx\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "enter password as \"\u003cy\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "validate output for criteria \"\u003cz\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close site",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login;validate-login-operation;",
  "rows": [
    {
      "cells": [
        "x",
        "y",
        "z"
      ],
      "line": 16,
      "id": "login;validate-login-operation;;1"
    },
    {
      "cells": [
        "9885675068",
        "test@12345",
        "all_valid"
      ],
      "line": 17,
      "id": "login;validate-login-operation;;2"
    },
    {
      "cells": [
        "",
        "test@12345",
        "mbno_blank"
      ],
      "line": 18,
      "id": "login;validate-login-operation;;3"
    },
    {
      "cells": [
        "9885675068",
        "",
        "pwd_blank"
      ],
      "line": 19,
      "id": "login;validate-login-operation;;4"
    },
    {
      "cells": [
        "9848012345",
        "test@12345",
        "mbno_invalid"
      ],
      "line": 20,
      "id": "login;validate-login-operation;;5"
    },
    {
      "cells": [
        "9885675068",
        "test54321",
        "pwd_invalid"
      ],
      "line": 21,
      "id": "login;validate-login-operation;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 197676,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "validate login operation",
  "description": "",
  "id": "login;validate-login-operation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "enter mobile number as \"9885675068\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "enter password as \"test@12345\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "validate output for criteria \"all_valid\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 19
    }
  ],
  "location": "GlueCode.method2(String)"
});
formatter.result({
  "duration": 4847301971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9885675068",
      "offset": 24
    }
  ],
  "location": "GlueCode.fillMbno(String)"
});
formatter.result({
  "duration": 229058421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@12345",
      "offset": 19
    }
  ],
  "location": "GlueCode.fillPassword(String)"
});
formatter.result({
  "duration": 231044995,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.clickLogin()"
});
formatter.result({
  "duration": 188044055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all_valid",
      "offset": 30
    }
  ],
  "location": "GlueCode.validateCriteria(String)"
});
formatter.result({
  "duration": 2041856385,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.method4()"
});
formatter.result({
  "duration": 2310948380,
  "status": "passed"
});
formatter.before({
  "duration": 304769,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "validate login operation",
  "description": "",
  "id": "login;validate-login-operation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "enter mobile number as \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "enter password as \"test@12345\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "validate output for criteria \"mbno_blank\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 19
    }
  ],
  "location": "GlueCode.method2(String)"
});
formatter.result({
  "duration": 7302726765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "GlueCode.fillMbno(String)"
});
formatter.result({
  "duration": 170507139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@12345",
      "offset": 19
    }
  ],
  "location": "GlueCode.fillPassword(String)"
});
formatter.result({
  "duration": 298227077,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.clickLogin()"
});
formatter.result({
  "duration": 176258030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mbno_blank",
      "offset": 30
    }
  ],
  "location": "GlueCode.validateCriteria(String)"
});
formatter.write("Test passed for blank mobile number");
formatter.result({
  "duration": 75121238,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.method4()"
});
formatter.result({
  "duration": 219726610,
  "status": "passed"
});
formatter.before({
  "duration": 242298,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "validate login operation",
  "description": "",
  "id": "login;validate-login-operation;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "enter mobile number as \"9885675068\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "enter password as \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "validate output for criteria \"pwd_blank\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 19
    }
  ],
  "location": "GlueCode.method2(String)"
});
formatter.result({
  "duration": 7605038544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9885675068",
      "offset": 24
    }
  ],
  "location": "GlueCode.fillMbno(String)"
});
formatter.result({
  "duration": 226542183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "GlueCode.fillPassword(String)"
});
formatter.result({
  "duration": 166393877,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.clickLogin()"
});
formatter.result({
  "duration": 157696145,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pwd_blank",
      "offset": 30
    }
  ],
  "location": "GlueCode.validateCriteria(String)"
});
formatter.write("Test passed for blank password");
formatter.result({
  "duration": 62076871,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.method4()"
});
formatter.result({
  "duration": 2309804270,
  "status": "passed"
});
formatter.before({
  "duration": 337343,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "validate login operation",
  "description": "",
  "id": "login;validate-login-operation;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "enter mobile number as \"9848012345\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "enter password as \"test@12345\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "validate output for criteria \"mbno_invalid\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 19
    }
  ],
  "location": "GlueCode.method2(String)"
});
formatter.result({
  "duration": 4732264070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9848012345",
      "offset": 24
    }
  ],
  "location": "GlueCode.fillMbno(String)"
});
formatter.result({
  "duration": 193181839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@12345",
      "offset": 19
    }
  ],
  "location": "GlueCode.fillPassword(String)"
});
formatter.result({
  "duration": 203714876,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.clickLogin()"
});
formatter.result({
  "duration": 156683225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mbno_invalid",
      "offset": 30
    }
  ],
  "location": "GlueCode.validateCriteria(String)"
});
formatter.result({
  "duration": 325822251,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.method4()"
});
formatter.result({
  "duration": 162027162,
  "status": "passed"
});
formatter.before({
  "duration": 256130,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "validate login operation",
  "description": "",
  "id": "login;validate-login-operation;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "enter mobile number as \"9885675068\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "enter password as \"test54321\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "validate output for criteria \"pwd_invalid\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 19
    }
  ],
  "location": "GlueCode.method2(String)"
});
formatter.result({
  "duration": 6627101476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9885675068",
      "offset": 24
    }
  ],
  "location": "GlueCode.fillMbno(String)"
});
formatter.result({
  "duration": 218987668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test54321",
      "offset": 19
    }
  ],
  "location": "GlueCode.fillPassword(String)"
});
formatter.result({
  "duration": 187845040,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.clickLogin()"
});
formatter.result({
  "duration": 144001189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pwd_invalid",
      "offset": 30
    }
  ],
  "location": "GlueCode.validateCriteria(String)"
});
formatter.result({
  "duration": 360233891,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.method4()"
});
formatter.result({
  "duration": 2044975913,
  "status": "passed"
});
formatter.uri("src/test/resources/features/feature2.feature");
formatter.feature({
  "line": 1,
  "name": "Logout",
  "description": "",
  "id": "logout",
  "keyword": "Feature"
});
formatter.before({
  "duration": 256577,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "validate logout operation",
  "description": "",
  "id": "logout;validate-logout-operation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "do login with valid data",
  "rows": [
    {
      "cells": [
        "mbno",
        "pwd"
      ],
      "line": 6
    },
    {
      "cells": [
        "9885675068",
        "test@12345"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "do logout",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "home page will be reopened",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 19
    }
  ],
  "location": "GlueCode.method2(String)"
});
formatter.result({
  "duration": 4912694709,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.validLogin(DataTable)"
});
formatter.result({
  "duration": 527188221,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.logout()"
});
formatter.result({
  "duration": 20347642884,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.validateLogout()"
});
formatter.write("Logout test passed");
formatter.result({
  "duration": 39674812,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.method4()"
});
formatter.result({
  "duration": 109952325,
  "status": "passed"
});
});