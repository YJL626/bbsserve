"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = void 0;
const errorType_1 = require("../constants/errorType");
const utils_1 = require("../utils/utils");
class Verify {
    reqBodyIntegrity(model) {
        return async function properExist(ctx, next) {
            try {
                const reqBody = ctx.request.body;
                //检测reqBody的结构和model是否一致
                const isIntegrity = Array.isArray(model)
                    ? model.every((property) => Object.prototype.hasOwnProperty.call(reqBody, property))
                    : utils_1.checkObjectForm(model, reqBody);
                if (isIntegrity) {
                    //结构符合预期则next
                    await next();
                }
                else {
                    ctx.app.emit('error', errorType_1.DATA_FORM_ERROR, ctx);
                    ctx.app.emit('error', errorType_1.DATA_FORM_ERROR, ctx);
                }
            }
            catch (err) {
                console.log('internalErr reqBodyIntegrity ', err);
            }
        };
    }
    tokenIntegrity(model) {
        return async function properExist(ctx, next) {
            try {
                const token = ctx.state.user;
                //检测token的结构和model是否一致
                const isIntegrity = Array.isArray(model)
                    ? model.every((property) => {
                        return Object.prototype.hasOwnProperty.call(token, property);
                    })
                    : utils_1.checkObjectForm(model, token);
                if (isIntegrity) {
                    //结构符合预期则next
                    await next();
                }
                else {
                    ctx.app.emit('error', errorType_1.DATA_FORM_ERROR, ctx);
                }
            }
            catch (err) {
                console.log('internalErr tokenIntegrity ', err);
            }
        };
    }
}
const verify = new Verify();
exports.verify = verify;
//# sourceMappingURL=verifyMiddleware.js.map