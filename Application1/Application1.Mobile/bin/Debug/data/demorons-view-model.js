
(function() {
    Application1.DemoRonViewModel = function(data) {
            this.NameId = ko.observable();
            this.FirstName = ko.observable();
            this.LastName = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(Application1.DemoRonViewModel.prototype, {
        toJS: function() {
            return {
                NameId: this.NameId(),
                FirstName: this.FirstName(),
                LastName: this.LastName(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.NameId(data.NameId);
                this.FirstName(data.FirstName);
                this.LastName(data.LastName);

            }
        }
    });
})();