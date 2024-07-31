import { PlainObject } from "@godspeedsystems/core";
import { EventSource } from "@godspeedsystems/plugins-express-as-http";

class MyEventSource extends EventSource {
  async initClient(): Promise<PlainObject> {
    const client = await super.initClient();
    client.use(enrich_user);
    return client;
  }
};

export default MyEventSource;

async function enrich_user(req: any, res: any, next: any) {
    var user_obj; 
    console.log(" ******  User request authorization token is", req.headers.authorization) ;
    if(req.headers.authorization== "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJteWNvbXBhbnkiLCJpc3MiOiJteWNvbXBhbnkifQ.X8HRtM-eUBkhryBY9-W7TbccGJLmttdW2g9XFmRfW5E"){
        user_obj = {
        role: 'admin'
       };
    }
    else{
       user_obj = {
            role: 'user'
        };
    }
    req.user = user_obj;    
    console.log('** Request is', req )     
    console.log('** User role is', req.user )
    next();
}

// if(text.slice(0,2)=="ab")