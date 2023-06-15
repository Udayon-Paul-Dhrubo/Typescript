"use strict";
var ResType;
(function (ResType) {
    ResType[ResType["SUCCESS"] = 0] = "SUCCESS";
    ResType[ResType["FAILURE"] = 1] = "FAILURE";
    ResType[ResType["UNAUTHORIZED"] = 2] = "UNAUTHORIZED";
    ResType[ResType["TIMEOUT"] = 3] = "TIMEOUT";
    ResType[ResType["NOT_FOUND"] = 4] = "NOT_FOUND";
    ResType[ResType["BAD_REQUEST"] = 5] = "BAD_REQUEST";
    ResType[ResType["FORBIDDEN"] = 6] = "FORBIDDEN";
})(ResType || (ResType = {}));
;
const response1 = {
    status: 200,
    type: ResType.SUCCESS,
    data: 'test'
};
console.log(response1);
