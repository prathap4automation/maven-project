$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/feature1.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 456484,
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
  "duration": 7227792047,
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
  "duration": 40404830,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.method4()"
});
formatter.result({
  "duration": 61628420,
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
  "duration": 225787,
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
  "duration": 5472013937,
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
  "duration": 203015202,
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
  "duration": 195767241,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.clickLogin()"
});
formatter.result({
  "duration": 149706566,
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
  "duration": 2156544004,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.method4()"
});
formatter.result({
  "duration": 2315934895,
  "status": "passed"
});
formatter.before({
  "duration": 559115,
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
  "duration": 5582801141,
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
  "duration": 151595417,
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
  "duration": 218481208,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.clickLogin()"
});
formatter.result({
  "duration": 136914313,
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
  "duration": 57213960,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.method4()"
});
formatter.result({
  "duration": 2284194331,
  "status": "passed"
});
formatter.before({
  "duration": 475225,
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
  "duration": 7429415932,
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
  "duration": 233630843,
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
  "duration": 144865071,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.clickLogin()"
});
formatter.result({
  "duration": 133476184,
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
  "duration": 54642390,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.method4()"
});
formatter.result({
  "duration": 50685752,
  "status": "passed"
});
formatter.before({
  "duration": 215078,
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
  "duration": 5280571912,
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
  "duration": 194005115,
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
  "duration": 185230633,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.clickLogin()"
});
formatter.result({
  "duration": 138745156,
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
  "duration": 325136410,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.method4()"
});
formatter.result({
  "duration": 2034562909,
  "status": "passed"
});
formatter.before({
  "duration": 466301,
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
  "duration": 7419819959,
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
  "duration": 192064056,
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
  "duration": 181276673,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.clickLogin()"
});
formatter.result({
  "duration": 146227383,
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
  "duration": 375284912,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.method4()"
});
formatter.result({
  "duration": 2287898855,
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
  "duration": 485935,
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
  "duration": 5873139483,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.validLogin(DataTable)"
});
formatter.result({
  "duration": 454600623,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.logout()"
});
formatter.result({
  "duration": 20525405124,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.validateLogout()"
});
formatter.write("Logout test passed");
formatter.result({
  "duration": 34488836,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode.method4()"
});
formatter.result({
  "duration": 2035529423,
  "status": "passed"
});
});