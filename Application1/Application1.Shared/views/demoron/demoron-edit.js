Application1.DemoRonEdit = function(params) {
    "use strict";

    var id = params.id,
        isNew = (id === undefined),
        demoron = new Application1.DemoRonViewModel();

    function load() {
        Application1.db.DemoRons.byKey(id).done(function(data) {
            demoron.fromJS(data);
        });
    }

    function update() {
        Application1.db.DemoRons.update(id, demoron.toJS()).done(function() {
            Application1.app.navigate({ view: "DemoRonDetails", id: id }, { target: "back" });
        });
    }

    function insert() {
        Application1.db.DemoRons.insert(demoron.toJS()).done(function() {
            Application1.app.navigate("DemoRons", { target: "back" });
        });
    }

    function handleSave() {
        if(isNew)
            insert();            
        else
            update();
    }

    function handleViewShown() {
        if(!isNew)
            load();
    }

    return {
        demoron: demoron,
        handleSave: handleSave,
        viewShown: handleViewShown
    };
};