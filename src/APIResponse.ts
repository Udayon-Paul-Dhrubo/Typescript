interface APIResponse<T> {
    status  : number;
    type    : string;
    data    : T;
}

const response1 : APIResponse<object> = {
    status  : 200,
    type    : 'good',
    data    : {
        name : 'Test',
        something : 300
    }
}

const response2 : APIResponse<string> = {
    status  : 200,
    type    : 'good',
    data    : 'test'
}