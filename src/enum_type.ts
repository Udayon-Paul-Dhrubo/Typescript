enum ResType{ SUCCESS, FAILURE, UNAUTHORIZED, TIMEOUT, NOT_FOUND, BAD_REQUEST, FORBIDDEN };


interface APIResponse<T> {
    status  : number;
    type    : ResType;
    data    : T;
}

const response1: APIResponse<string> = {
    status  : 200,
    type    : ResType.SUCCESS,
    data    : 'test'
}

console.log(response1);