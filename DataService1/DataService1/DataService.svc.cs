using System;
using System.Collections.Generic;
using System.Data.Services;
using System.Data.Services.Common;
using System.Data.Services.Providers;
using System.Linq;
using System.ServiceModel.Web;
using System.Web;

namespace DataService1
{
#if DEBUG
	[System.ServiceModel.ServiceBehavior(IncludeExceptionDetailInFaults = true)]
#endif
    [JSONPSupportBehavior]
    public class DataService : DataService<DevsampleEntities>, IServiceProvider
    {
        // This method is called only once to initialize service-wide policies.
        public static void InitializeService(DataServiceConfiguration config)
        {
            // TODO: set rules to indicate which entity sets and service operations are visible, updatable, etc.
            // Examples:
            // config.SetEntitySetAccessRule("MyEntityset", EntitySetRights.AllRead);
            // config.SetServiceOperationAccessRule("MyServiceOperation", ServiceOperationRights.All);
            config.SetEntitySetAccessRule("*", EntitySetRights.All);
            config.DataServiceBehavior.MaxProtocolVersion = DataServiceProtocolVersion.V3;
#if DEBUG
			config.UseVerboseErrors = true;
#endif
        }
        public object GetService(Type serviceType)
        {
            if (serviceType == typeof(IDataServiceStreamProvider))
            {
                // Return the stream provider to the data service.
                return new ImageStreamProvider();
            }
            return null;
        }
    }
}
