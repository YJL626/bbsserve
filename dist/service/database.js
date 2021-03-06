"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const db_config_1 = require("../config/db.config");
mongoose_1.default.set('useCreateIndex', true);
mongoose_1.default.connect(db_config_1.userDatabase, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose_1.default.connection;
const userModel = mongoose_1.default.model('users', new mongoose_1.default.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    pwd: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        unique: true,
        required: true,
    },
    nickName: {
        type: String,
        required: true,
    },
}));
exports.userModel = userModel;
db.on('error', () => {
    console.log('db connect error');
});
db.on('open', () => {
    console.log('db open');
});
//# sourceMappingURL=database.js.map