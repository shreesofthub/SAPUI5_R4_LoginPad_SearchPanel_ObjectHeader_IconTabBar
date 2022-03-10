sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("r4searchproducthboxvbox.controller.View1", {
            onInit: function () {
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
                        // },
                        // {
                        //     "code": "8",
                        //     "theme": "sap_Quartz_Light"
                        // }
                    ]
                });
                this.getView().setModel(oModel);
            },
            onSelect: function (oEvent) {
                var selectedItem = oEvent.getParameter("selectedItem").getText();
                sap.ui.getCore().applyTheme(selectedItem);
            }
        });
    });
