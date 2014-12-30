
// NOTE object below must be a valid JSON
window.Application1 = $.extend(true, window.Application1, {
    "config": {
        "endpoints": {
            "db": {
                "local": "http://localhost:4213/dataservice.svc/",
                "production": "http://localhost:4213/dataservice.svc/"
            }
        },
        "services": {
            "db": {
                "entities": {
					"DemoRons": { 
						"key": "NameId", 
						"keyType": "Int32" 
					}
                }
            }
        }
    }
});
