sap.ui.define(
    ["sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"],
    function (Controller, JSONModel) {
        "use strict"
        return Controller.extend("r4searchproducthboxvbox.controller.login", {
            onInit: function () {
                this.router = this.getOwnerComponent().getRouter();
                var oModel = new JSONModel({
                    "themes": [
                        {
                            "code": "1",
                            "theme": "sap_bluecrystal"
                        }, {
                            "code": "2",
                            "theme": "sap_belize"
                        }, {
                            "code": "3",
                            "theme": "sap_belize_hcb"
                        }, {
                            "code": "4",
                            "theme": "sap_belize_plus"
                        }, {
                            "code": "5",
                            "theme": "sap_fiori_3"
                        }, {
                            "code": "6",
                            "theme": "sap_fiori_3_dark"
                        },
                        {
                            "code": "7",
                            "theme": "sap_hcb"
                        }
                    ]
                });
                this.getView().setModel(oModel);
            },
            onSelect: function (oEvent) {
                var selectedItem = oEvent.getParameter("selectedItem").getText();
                sap.ui.getCore().applyTheme(selectedItem);
            },
            onLogon: function () {
                if (this.byId("idUser").getValue() === "sridhar") {
                    this.router.navTo("search");
                } else {
                    new sap.m.MessageToast.show("Un Authorized Access");
                }
            }
        });
    }
)