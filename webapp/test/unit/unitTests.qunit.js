/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"TestApp5/TestApp5/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});