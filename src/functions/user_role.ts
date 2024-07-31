import { GSContext, PlainObject, logger } from "@godspeedsystems/core";
export default function (ctx: GSContext) {
    const{body, headers, params, query, user}= ctx.inputs.data;

    const name: string = query.name; //name expected in request query
    const role: string = user.role;
    logger.info(' **** Role of requested user is %o', role);
    return {
        data: 'Hi user ! ' + name +'\n Your role is ' + role , 
         code: 200, 
         success: true
    }
}
    