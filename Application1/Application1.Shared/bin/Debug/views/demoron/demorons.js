Application1.DemoRons = function(params) {
    "use strict";

    var shouldReload = false,
        dataSource;

    function handleDemoRonsModification() {
        shouldReload = true;
    }

    function handleViewShown() {
        if(shouldReload) {
            shouldReload = false;
            dataSource.pageIndex(0);
            dataSource.load();
        }
    }

    function handleViewDisposing() {
        Application1.db.DemoRons.modified.remove(handleDemoRonsModification);
    }

    dataSource = new DevExpress.data.DataSource({
        store: Application1.db.DemoRons,
        map: function(item) {
            return new Application1.DemoRonViewModel(item);
        }
    });

    Application1.db.DemoRons.modified.add(handleDemoRonsModification);

    return {
        dataSource: dataSource,
        viewShown: handleViewShown,
        viewDisposing: handleViewDisposing
    };   
};