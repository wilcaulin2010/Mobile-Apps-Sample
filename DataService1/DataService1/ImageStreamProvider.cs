using System;
using System.Collections.Generic;
using System.Data.Services;
using System.Data.Services.Providers;
using System.IO;
using System.Linq;
using System.Web;

namespace DataService1
{
    public interface IImageSource
    {
        byte[] Image { get; }
    }

    public class ImageStreamProvider : IDataServiceStreamProvider
    {
        public void DeleteStream(object entity, DataServiceOperationContext operationContext)
        {
            throw new NotImplementedException();
        }
        public Stream GetReadStream(object entity, string etag, bool? checkETagForEquality, DataServiceOperationContext operationContext)
        {
            if (checkETagForEquality != null)
            {
                throw new DataServiceException(400, "This sample service does not support the ETag header for a media resource.");
            }

            var imageSource = entity as IImageSource;
            if (imageSource == null)
            {
                throw new DataServiceException(500, "Internal Server Error.");
            }
            var image = imageSource.Image;
            return new MemoryStream(image);
        }
        public Uri GetReadStreamUri(object entity, DataServiceOperationContext operationContext)
        {
            return null;
        }

        public string GetStreamContentType(object entity, DataServiceOperationContext operationContext)
        {
            return "image/png";
        }

        public string GetStreamETag(object entity, DataServiceOperationContext operationContext)
        {
            return null;
        }

        public Stream GetWriteStream(object entity, string etag, bool? checkETagForEquality, DataServiceOperationContext operationContext)
        {
            throw new NotImplementedException();
        }

        public string ResolveType(string entitySetName, DataServiceOperationContext operationContext)
        {
            return "DataService." + entitySetName;
        }

        public int StreamBufferSize
        {
            get { return 64000; }
        }
    }
}