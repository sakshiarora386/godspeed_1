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
        street: body.address[0],
        city: body.address[1] 
    }
    return new GSStatus(true, 200, undefined, obj, undefined); 
} 