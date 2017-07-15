import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class UtilityService {

  toSearchParams(obj): URLSearchParams {
    const params: URLSearchParams = new URLSearchParams();
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
         params.set(key, obj[key]);
      }
    }
    return params;
  }

  toError(code?: number, message?: string): any {
    return {
      error: {
        code: code || 400,
        message: message || "Bad request"
      }
    }
  }

  toSuccess(data: any): any {
    return {
      data: data
    }
  }

}
