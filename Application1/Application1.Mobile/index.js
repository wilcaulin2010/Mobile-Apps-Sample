
$(function() {
    var navigationType = Application1.config.navigationType,
        startupView = "DemoRons";

    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    if(DevExpress.devices.real().platform === "win8" && DevExpress.devices.real().deviceType === "phone") {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    function onDeviceReady() {
        document.addEventListener("backbutton", onBackKeyDown, false);
        Application1.app.navigatingBack.add(function() {
            if(!Application1.app.canBack() && window.external) {
                window.external.Notify("DevExpress.ExitApp");
            }
        });
    }

    function onBackKeyDown() {
        DevExpress.hardwareBackButton.fire();
    }

    Application1.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Application1,
        navigationType: navigationType,
        navigation: Application1.config.navigation
    });

    $(window).unload(function() {
        Application1.app.saveState();
    });

    Application1.app.router.register(":view/:id", { view: startupView, id: undefined });
    Application1.app.navigate();
});
