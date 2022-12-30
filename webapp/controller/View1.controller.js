sap.ui.define([
    "sap/ui/core/mvc/Controller",	"sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox) {
        "use strict";

        // var prefixId;
		// var oScanResultText;
		var sResponsivePaddingClasses = "sapUiResponsivePadding--header sapUiResponsivePadding--content sapUiResponsivePadding--footer";

        return Controller.extend("idb.project1.controller.View1", {
            onInit: function () {
            //     prefixId = this.createId();
			// 	if (prefixId){
			// 		prefixId = prefixId.split("--")[0] + "--";
			// 	} else {
			// 		prefixId = "";
			// 	}
			// 	oScanResultText = sap.ui.getCore().byId(prefixId + 'sampleBarcodeScannerResult');
            },
            // onScanSuccess: function(oEvent) {
			// 	if (oEvent.getParameter("cancelled")) {
			// 		MessageToast.show("Scan cancelled", { duration:1000 });
			// 	} else {
			// 		if (oEvent.getParameter("text")) {
			// 			oScanResultText.setText(oEvent.getParameter("text"));
			// 		 }
			// 		 // else {
			// 		// 	oScanResultText.setText();
			// 		// }
			// 	}
			// },

			// onScanError: function(oEvent) {
			// 	MessageToast.show("Scan failed: " + oEvent, { duration:1000 });
			// },

			// onScanLiveupdate: function(oEvent) {
			// 	// User can implement the validation about inputting value
			// },

			// onAfterRendering: function() {
			// 	// Reset the scan result
			// 	var oScanButton = sap.ui.getCore().byId(prefixId + 'sampleBarcodeScannerButton');
			// 	if (oScanButton) {
			// 		$(oScanButton.getDomRef()).on("click", function(){
			// 			oScanResultText.setText('');
			// 		});
			// 	}
			// },
			onShowTextInfo: function () {
				MessageBox.information("Information", {
					title: "Information",
					id: "messageBoxId1",
					details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
					contentWidth: "100px",
					styleClass: sResponsivePaddingClasses
				});
			},
        });
    });
