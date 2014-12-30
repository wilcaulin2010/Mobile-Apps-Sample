
$(function() {
    var navigationType = Application1.config.navigationType,
        startupView = "DemoRons";

    DevExpress.devices.current("desktop");

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
