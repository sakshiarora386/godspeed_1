import { GSCloudEvent, GSContext, PlainObject, GSStatus } from "@godspeedsystems/core";
export default function (ctx: GSContext, args: PlainObject) {
    const {
        inputs: {
            data: {
               body
            }
        }, 
    }= ctx;

    let date = body.date;
        return new GSStatus(true, 200, undefined, 'date ' +body.date, undefined);  
 
}