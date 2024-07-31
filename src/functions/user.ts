import { GSCloudEvent, GSContext, PlainObject, GSStatus, logger } from "@godspeedsystems/core";

export default function (ctx: GSContext, args: PlainObject) {
    const {
        inputs: {
            data: {
                body
            }
        }, 
     
    }= ctx;
    logger.debug("body: %o", body )

    const obj = {
            username: body.username,
 
    }
    return new GSStatus(true, 200, undefined, obj, undefined); 
} 
    