sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("r4searchproducthboxvbox.controller.View1", {
            onInit: function () {
                this.byId("idPanel2").setVisible(false);
            },
            onBack: function () {
                this.getOwnerComponent().getBack();
            },
            onSearch: function () {
                this.oPanel2 = this.getView().byId("idPanel1");
                this.oHeader = this.getView().byId("idOH");
                this.oHeader.setNumber(1000);
                this.oHeader.setNumberUnit("INR");
                this.oHeader.setTitle(this.byId("idIp2").getValue());
                this.oHeader.setIntro(this.byId("idIp1").getValue());
                this.oPanel2.setExpandable(true);
                this.oPanel2.setExpanded(true);
                this.getView().byId("idOH").mProperties.visible = true;
            },
            onReset: function () {
                this.getView().byId("idOH").mProperties.visible = false;
                this.oPanel2.setExpanded(false);
                this.byId("idIp2").setValue("");
                this.byId("idIp1").setValue("");
                this.byId("idIp3").setValue("");
            },
            onSwitchChange: function (oEvent) {
                var oSwitchState = oEvent.getParameter("state");
                if (oSwitchState === false) {
                    this.byId("idPanel").setVisible(true);
                    this.byId("idPanel1").setVisible(true);
                    this.byId("idPanel2").setVisible(false);
                } else {
                    this.byId("idPanel").setVisible(false);
                    this.byId("idPanel1").setVisible(false);
                    this.byId("idPanel2").setVisible(true);
                }
            }
        });
    });
