import { CustomError } from './custom-error.model';
import { throwError } from 'rxjs';

export abstract class BaseService {
    constructor() {}
    protected handleError(response: any) {
        const customError = new CustomError();
        customError.responseStatus = response.status;

        if (response.status === 500) {
            // error string
            if (response.error && typeof response.error === 'string') {
                customError.message += response.error;
            }
            return throwError(customError);
        }

        if (response.status === 404) {
            customError.message += 'Requested entity not found.';
            return throwError(customError);
        }

        if (response.status === 401 || response.status === 403) {
            customError.message += 'You are not authorized to access requested resource.';
            return throwError(customError);
        }

        if (response.status === 400) {
            // error string
            if (response.error && typeof response.error === 'string') {
                customError.message += response.error;
                return throwError(customError);
            }

            // modelstate errors
            if (response.error && typeof response.error === 'object') {
                if (response.error.errors && typeof response.error.errors === 'object') {
                    for (const key in response.error.errors) {
                        if (response.error.errors[key]) {
                            const errorCode = response.error.errors[key];
                            customError.message = errorCode.reduce(
                                (accumulator: any, currentValue: any) =>
                                    accumulator + currentValue + ' <br />',
                                customError.message
                            );
                        }
                    }
                }

                return throwError(customError);
            }
        }
        return throwError(customError);
    }
}
