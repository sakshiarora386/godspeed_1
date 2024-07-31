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
             age: body.age,
             email: body.email,
             gender:body.gender 
    }
    return new GSStatus(true, 200, undefined, obj, undefined); 
} 
    