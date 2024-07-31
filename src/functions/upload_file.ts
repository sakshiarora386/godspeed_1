import {GSContext } from "@godspeedsystems/core";

export default function (ctx: GSContext) {
    // You will get files in the ctx.inputs, along with params, body, query, user, headers
    const { files: { panCardFile } } = ctx.inputs.data;
    //do something like upload to S3
    return {
      data: 'Uploaded',
      success: true,
      code: 201,
      //headers: {}
    }
  }
