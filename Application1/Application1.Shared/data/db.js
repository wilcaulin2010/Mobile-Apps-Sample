/// <reference path="../js/jquery-1.10.2.min.js" />
/// <reference path="../js/knockout-3.0.0.js" />
/// <reference path="../js/dx.all.js" />

(function() {
    var endpointSelector = new DevExpress.EndpointSelector(Application1.config.endpoints);

    var serviceConfig = $.extend(true, {}, Application1.config.services, {
        db: {
            url: endpointSelector.urlFor("db"),

            // To enable JSONP support, uncomment the following line
            //jsonp: !window.WinJS,

            // To allow cookies and HTTP authentication with CORS, uncomment the following line
            // withCredentials: true,

            errorHandler: handleServiceError
        }
    });

    function handleServiceError(error) {
        if(window.WinJS) {
            try {
                new Windows.UI.Popups.MessageDialog(error.message).showAsync();
            } catch(e) {
                // Another dialog is shown
            }
        } else {
            alert(error.message);
        }
    }

    // Enable partial CORS support for IE < 10    
    $.support.cors = true;
    
    Application1.db = new DevExpress.data.ODataContext(serviceConfig.db);

}());
