$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("create_account_and_login_popups.feature");
formatter.feature({
  "id": "login-from-health-unlocked-pages",
  "description": "As a registered HU user\nI want to be able to login\nSo that I can enter the site",
  "name": "Login From Health Unlocked Pages",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages",
  "description": "",
  "name": "T101 - login from HU pages",
  "keyword": "Scenario Outline",
  "line": 7,
  "type": "scenario_outline",
  "comments": [
    {
      "value": "#@regression",
      "line": 6
    }
  ]
});
formatter.step({
  "name": "I am on the HU \u003cpage\u003e",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "I click Log in on \u003cpage\u003e",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "I should be on the login from \u003cpage\u003e",
  "keyword": "Then ",
  "line": 10
});
formatter.examples({
  "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 12,
  "rows": [
    {
      "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;1",
      "cells": [
        "page"
      ],
      "line": 13
    },
    {
      "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;2",
      "cells": [
        "Homepage"
      ],
      "line": 14
    },
    {
      "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;3",
      "cells": [
        "Community_Homepage"
      ],
      "line": 15
    },
    {
      "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;4",
      "cells": [
        "Posts_Questions"
      ],
      "line": 16
    },
    {
      "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;5",
      "cells": [
        "Polls"
      ],
      "line": 17
    },
    {
      "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;6",
      "cells": [
        "Members"
      ],
      "line": 18
    },
    {
      "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;7",
      "cells": [
        "Individual_Post_Question"
      ],
      "line": 19
    }
  ]
});
formatter.scenario({
  "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;2",
  "description": "",
  "name": "T101 - login from HU pages",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the HU Homepage",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Homepage",
      "offset": 15
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefsTest.I_am_on_the_HU_page(String)"
});
formatter.result({
  "duration": 149825752047,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_45\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\r\n\tat helpers.SeleniumFactory.get(SeleniumFactory.java:94)\r\n\tat helpers.WebPageHelpers.openWebPage(WebPageHelpers.java:27)\r\n\tat PageObjects.Index.openHomepage(Index.java:13)\r\n\tat steps.CreateAccountAndLoginPopupsDefsTest.I_am_on_the_HU_page(CreateAccountAndLoginPopupsDefsTest.java:21)\r\n\tat ✽.Given I am on the HU Homepage(create_account_and_login_popups.feature:8)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:339)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:182)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:579)\r\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:117)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:178)\r\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)\r\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:131)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:863)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:337)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:298)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:145)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:366)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:527)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\r\n\tat helpers.SeleniumFactory.get(SeleniumFactory.java:94)\r\n\tat helpers.WebPageHelpers.openWebPage(WebPageHelpers.java:27)\r\n\tat PageObjects.Index.openHomepage(Index.java:13)\r\n\tat steps.CreateAccountAndLoginPopupsDefsTest.I_am_on_the_HU_page(CreateAccountAndLoginPopupsDefsTest.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:44)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:270)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:49)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:43)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:112)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:105)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:93)\r\n\tat cucumber.api.cli.Main.run(Main.java:20)\r\n\tat cucumber.api.cli.Main.main(Main.java:12)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Thread.java:744)\r\n"
});
formatter.step({
  "name": "I click Log in on Homepage",
  "keyword": "When ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Homepage",
      "offset": 18
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefsTest.I_click_Log_in_on_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be on the login from Homepage",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Homepage",
      "offset": 30
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefsTest.I_should_be_on_the_login_from_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;3",
  "description": "",
  "name": "T101 - login from HU pages",
  "keyword": "Scenario Outline",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the HU Community_Homepage",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Community_Homepage",
      "offset": 15
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefsTest.I_am_on_the_HU_page(String)"
});
formatter.result({
  "duration": 1003300411,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_45\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:291)\r\n\tat PageObjects.Index.openHomepage(Index.java:9)\r\n\tat steps.CreateAccountAndLoginPopupsDefsTest.I_am_on_the_HU_page(CreateAccountAndLoginPopupsDefsTest.java:21)\r\n\tat ✽.Given I am on the HU Community_Homepage(create_account_and_login_popups.feature:8)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:339)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:182)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:579)\r\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:117)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:178)\r\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)\r\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:131)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:863)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:319)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:298)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:145)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:366)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:527)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:291)\r\n\tat PageObjects.Index.openHomepage(Index.java:9)\r\n\tat steps.CreateAccountAndLoginPopupsDefsTest.I_am_on_the_HU_page(CreateAccountAndLoginPopupsDefsTest.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:44)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:270)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:49)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:43)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:112)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:105)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:93)\r\n\tat cucumber.api.cli.Main.run(Main.java:20)\r\n\tat cucumber.api.cli.Main.main(Main.java:12)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Thread.java:744)\r\n"
});
formatter.step({
  "name": "I click Log in on Community_Homepage",
  "keyword": "When ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Community_Homepage",
      "offset": 18
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefsTest.I_click_Log_in_on_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be on the login from Community_Homepage",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Community_Homepage",
      "offset": 30
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefsTest.I_should_be_on_the_login_from_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;4",
  "description": "",
  "name": "T101 - login from HU pages",
  "keyword": "Scenario Outline",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the HU Posts_Questions",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Posts_Questions",
      "offset": 15
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefsTest.I_am_on_the_HU_page(String)"
});
formatter.result({
  "duration": 1004491338,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_45\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:291)\r\n\tat PageObjects.Index.openHomepage(Index.java:9)\r\n\tat steps.CreateAccountAndLoginPopupsDefsTest.I_am_on_the_HU_page(CreateAccountAndLoginPopupsDefsTest.java:21)\r\n\tat ✽.Given I am on the HU Posts_Questions(create_account_and_login_popups.feature:8)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:339)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:182)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:579)\r\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:117)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:178)\r\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)\r\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:131)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:863)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:319)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:298)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:145)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:366)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:527)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:291)\r\n\tat PageObjects.Index.openHomepage(Index.java:9)\r\n\tat steps.CreateAccountAndLoginPopupsDefsTest.I_am_on_the_HU_page(CreateAccountAndLoginPopupsDefsTest.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:44)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:270)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:49)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:43)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:112)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:105)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:93)\r\n\tat cucumber.api.cli.Main.run(Main.java:20)\r\n\tat cucumber.api.cli.Main.main(Main.java:12)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Thread.java:744)\r\n"
});
formatter.step({
  "name": "I click Log in on Posts_Questions",
  "keyword": "When ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Posts_Questions",
      "offset": 18
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefsTest.I_click_Log_in_on_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be on the login from Posts_Questions",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Posts_Questions",
      "offset": 30
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefsTest.I_should_be_on_the_login_from_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;5",
  "description": "",
  "name": "T101 - login from HU pages",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the HU Polls",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Polls",
      "offset": 15
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefsTest.I_am_on_the_HU_page(String)"
});
formatter.result({
  "duration": 1012956510,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_45\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:291)\r\n\tat PageObjects.Index.openHomepage(Index.java:9)\r\n\tat steps.CreateAccountAndLoginPopupsDefsTest.I_am_on_the_HU_page(CreateAccountAndLoginPopupsDefsTest.java:21)\r\n\tat ✽.Given I am on the HU Polls(create_account_and_login_popups.feature:8)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:339)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:182)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:579)\r\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:117)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:178)\r\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)\r\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:131)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:863)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:319)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:298)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:145)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:366)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:527)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:291)\r\n\tat PageObjects.Index.openHomepage(Index.java:9)\r\n\tat steps.CreateAccountAndLoginPopupsDefsTest.I_am_on_the_HU_page(CreateAccountAndLoginPopupsDefsTest.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:44)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:270)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:49)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:43)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:112)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:105)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:93)\r\n\tat cucumber.api.cli.Main.run(Main.java:20)\r\n\tat cucumber.api.cli.Main.main(Main.java:12)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Thread.java:744)\r\n"
});
formatter.step({
  "name": "I click Log in on Polls",
  "keyword": "When ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Polls",
      "offset": 18
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefsTest.I_click_Log_in_on_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be on the login from Polls",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Polls",
      "offset": 30
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefsTest.I_should_be_on_the_login_from_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;6",
  "description": "",
  "name": "T101 - login from HU pages",
  "keyword": "Scenario Outline",
  "line": 18,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the HU Members",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Members",
      "offset": 15
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefsTest.I_am_on_the_HU_page(String)"
});
formatter.result({
  "duration": 1004170810,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_45\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:291)\r\n\tat PageObjects.Index.openHomepage(Index.java:9)\r\n\tat steps.CreateAccountAndLoginPopupsDefsTest.I_am_on_the_HU_page(CreateAccountAndLoginPopupsDefsTest.java:21)\r\n\tat ✽.Given I am on the HU Members(create_account_and_login_popups.feature:8)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:339)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:182)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:579)\r\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:117)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:178)\r\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)\r\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:131)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:863)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:319)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:298)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:145)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:366)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:527)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:291)\r\n\tat PageObjects.Index.openHomepage(Index.java:9)\r\n\tat steps.CreateAccountAndLoginPopupsDefsTest.I_am_on_the_HU_page(CreateAccountAndLoginPopupsDefsTest.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:44)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:270)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:49)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:43)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:112)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:105)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:93)\r\n\tat cucumber.api.cli.Main.run(Main.java:20)\r\n\tat cucumber.api.cli.Main.main(Main.java:12)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Thread.java:744)\r\n"
});
formatter.step({
  "name": "I click Log in on Members",
  "keyword": "When ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Members",
      "offset": 18
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefsTest.I_click_Log_in_on_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be on the login from Members",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Members",
      "offset": 30
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefsTest.I_should_be_on_the_login_from_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "login-from-health-unlocked-pages;t101---login-from-hu-pages;;7",
  "description": "",
  "name": "T101 - login from HU pages",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the HU Individual_Post_Question",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Individual_Post_Question",
      "offset": 15
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefsTest.I_am_on_the_HU_page(String)"
});
formatter.result({
  "duration": 1003434227,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_45\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:291)\r\n\tat PageObjects.Index.openHomepage(Index.java:9)\r\n\tat steps.CreateAccountAndLoginPopupsDefsTest.I_am_on_the_HU_page(CreateAccountAndLoginPopupsDefsTest.java:21)\r\n\tat ✽.Given I am on the HU Individual_Post_Question(create_account_and_login_popups.feature:8)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:339)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:182)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:579)\r\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:117)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:178)\r\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)\r\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:131)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:863)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:319)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:298)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:145)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:366)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:527)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:291)\r\n\tat PageObjects.Index.openHomepage(Index.java:9)\r\n\tat steps.CreateAccountAndLoginPopupsDefsTest.I_am_on_the_HU_page(CreateAccountAndLoginPopupsDefsTest.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:44)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:270)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:49)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:43)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:112)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:105)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:93)\r\n\tat cucumber.api.cli.Main.run(Main.java:20)\r\n\tat cucumber.api.cli.Main.main(Main.java:12)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Thread.java:744)\r\n"
});
formatter.step({
  "name": "I click Log in on Individual_Post_Question",
  "keyword": "When ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Individual_Post_Question",
      "offset": 18
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefsTest.I_click_Log_in_on_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be on the login from Individual_Post_Question",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Individual_Post_Question",
      "offset": 30
    }
  ],
  "location": "CreateAccountAndLoginPopupsDefsTest.I_should_be_on_the_login_from_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "login-from-health-unlocked-pages;t102---login-using-valid-credentials",
  "description": "",
  "name": "T102 - login using valid credentials",
  "keyword": "Scenario",
  "line": 22,
  "type": "scenario",
  "comments": [
    {
      "value": "#@regression",
      "line": 21
    }
  ]
});
formatter.step({
  "name": "I enter my valid login credentials",
  "keyword": "Given ",
  "line": 24
});
formatter.match({
  "location": "CreateAccountAndLoginPopupsDefsTest.I_enter_my_valid_login_credentials()"
});
formatter.result({
  "duration": 1006657270,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_45\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:291)\r\n\tat PageObjects.Index.openHomepage(Index.java:9)\r\n\tat steps.CreateAccountAndLoginPopupsDefsTest.I_enter_my_valid_login_credentials(CreateAccountAndLoginPopupsDefsTest.java:53)\r\n\tat ✽.Given I enter my valid login credentials(create_account_and_login_popups.feature:24)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:339)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:182)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:579)\r\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:117)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:178)\r\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)\r\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:131)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:863)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:319)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:298)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:145)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:366)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:527)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:291)\r\n\tat PageObjects.Index.openHomepage(Index.java:9)\r\n\tat steps.CreateAccountAndLoginPopupsDefsTest.I_enter_my_valid_login_credentials(CreateAccountAndLoginPopupsDefsTest.java:53)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:44)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:270)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:49)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:43)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:112)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:105)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:93)\r\n\tat cucumber.api.cli.Main.run(Main.java:20)\r\n\tat cucumber.api.cli.Main.main(Main.java:12)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Thread.java:744)\r\n"
});
formatter.step({
  "name": "I click Log in",
  "keyword": "When ",
  "line": 25
});
formatter.match({
  "location": "CreateAccountAndLoginPopupsDefsTest.I_click_log_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The modal disappears and I remain on the same page but now logged in",
  "keyword": "Then ",
  "line": 26
});
formatter.match({
  "location": "CreateAccountAndLoginPopupsDefsTest.The_modal_disappears_and_I_remain_on_the_same_page_but_now_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "login-from-health-unlocked-pages;t103---forgotten-password-modal",
  "tags": [
    {
      "name": "@regression",
      "line": 28
    }
  ],
  "description": "",
  "name": "T103 - Forgotten Password Modal",
  "keyword": "Scenario",
  "line": 29,
  "type": "scenario"
});
formatter.step({
  "name": "I’m on the Log in modal",
  "keyword": "Given ",
  "line": 30
});
formatter.match({
  "location": "CreateAccountAndLoginPopupsDefsTest.I_m_on_the_Log_in_modal()"
});
formatter.result({
  "duration": 994386815,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027ToshibaBlack2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_45\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:291)\r\n\tat PageObjects.Index.openHomepage(Index.java:9)\r\n\tat steps.CreateAccountAndLoginPopupsDefsTest.I_m_on_the_Log_in_modal(CreateAccountAndLoginPopupsDefsTest.java:74)\r\n\tat ✽.Given I’m on the Log in modal(create_account_and_login_popups.feature:30)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:339)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:182)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:579)\r\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:117)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:178)\r\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)\r\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:131)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:863)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:319)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:298)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:145)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:366)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:527)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:291)\r\n\tat PageObjects.Index.openHomepage(Index.java:9)\r\n\tat steps.CreateAccountAndLoginPopupsDefsTest.I_m_on_the_Log_in_modal(CreateAccountAndLoginPopupsDefsTest.java:74)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:44)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:270)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:49)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:43)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:112)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:105)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:93)\r\n\tat cucumber.api.cli.Main.run(Main.java:20)\r\n\tat cucumber.api.cli.Main.main(Main.java:12)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\r\n\tat java.lang.Thread.run(Thread.java:744)\r\n"
});
formatter.step({
  "name": "I click forgotten your password?",
  "keyword": "When ",
  "line": 31
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The modal turns into a forgot password page",
  "keyword": "Then ",
  "line": 32
});
formatter.match({
  "location": "CreateAccountAndLoginPopupsDefsTest.The_modal_turns_into_a_forgot_password_page()"
});
formatter.result({
  "status": "skipped"
});
});