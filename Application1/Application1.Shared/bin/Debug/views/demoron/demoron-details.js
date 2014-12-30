Application1.DemoRonDetails = function(params) {
    "use strict";

    var id = params.id,
        demoron = new Application1.DemoRonViewModel();

    function handleDelete() {
        DevExpress.ui.dialog.confirm("Are you sure you want to delete this item?", "Delete item").then(function(result) {
            if(result)
                handleConfirmDelete();
        });
    }

    function handleConfirmDelete() {        
        Application1.db.DemoRons.remove(id).done(function() {
            Application1.app.navigate("DemoRons", { target: "back" });
        });
    }

    function handleViewShown() {
        Application1.db.DemoRons.byKey(id).done(function(data) {
            demoron.fromJS(data);
        });
    }

    return {
        id: id,
        demoron: demoron,
        handleDelete: handleDelete,        
        viewShown: handleViewShown
    };
};