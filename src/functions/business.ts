import { GSCloudEvent, GSContext, GSStatus, PlainObject } from "@godspeedsystems/core";
import Pino from 'pino';

export default function (ctx: GSContext, args: PlainObject) {
    const {
        inputs: {
            data: {
                params, body, query, user, headers
            }
        }, 
        childLogger, 
        logger,
        outputs, 
        functions, 
        datasources,
        mappings
    }: {
        inputs: GSCloudEvent, 
        childLogger: Pino.Logger, // Define CustomLogger if necessary
        logger: Pino.Logger,
        outputs: PlainObject, // Adjust the type accordingly
        functions: PlainObject, // Adjust the type accordingly
        datasources: PlainObject, // Adjust the type accordingly
        mappings: PlainObject
    } = ctx;

    // Will print with workflow_name and task_id attributes
    childLogger.info('Server is running healthy');
    // Will print without workflow_name and task_id attributes
    logger.info('Arguments passed %o', args);
    logger.info('Inputs object \n user %o query %o body %o headers %o params %o', user, query, body, headers, params);
    logger.info('Outputs object has outputs from previous tasks with given ids %o', Object.keys(outputs));
    logger.info('Datasources object has following datasource clients %o', Object.keys(datasources));
    logger.info('Total functions found in the project %s', Object.keys(functions).length);
    
    logger.debug('body: %o', body );
    
    const obj = {
        name: body.name,
        address: body.address,
        is_group: body.is_group,
        parent_business:body.parent_business,
        tsp: body.tsp,
        business_pan: body.business_pan,
        business_gst: body.business_gst

}
return new GSStatus(true, 200, undefined, obj, undefined);  
}
