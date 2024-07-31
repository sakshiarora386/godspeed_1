import { GSCloudEvent, GSContext, PlainObject, GSStatus, logger } from "@godspeedsystems/core";
export default function (ctx: GSContext, args: PlainObject) {
    const {
        inputs: {
            data: {
               query
            }
        }, 
     
    }= ctx;

    logger.debug("body: %o", query )

    let age= query.age ;
    if (age%2==0) {
        return new GSStatus(true, 200, undefined, 'Age ' + query.age + ' is even', undefined);  
      } 
      else {
        return new GSStatus(true, 200, undefined, 'Age ' + query.age + ' is odd', undefined);  
      } 
}