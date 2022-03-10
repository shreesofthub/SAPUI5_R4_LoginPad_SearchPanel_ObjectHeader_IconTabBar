/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"r4_searchproduct_hbox_vbox/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
