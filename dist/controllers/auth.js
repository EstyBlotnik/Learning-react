"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const user_model_1 = __importDefault(require("../models/user_model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
function sendError(res, error) {
    res.status(400).send({
        'err': error
    });
}
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    if (email == null || password == null) {
        return sendError(res, "Please enter a valid email and password");
    }
    try {
        const user = yield user_model_1.default.findOne({ 'email': email });
        if (user != null) {
            return sendError(res, "user allredy in data base");
        }
    }
    catch (error) {
        console.log(error);
        sendError(res, "faild1");
    }
    try {
        const salt = yield bcrypt_1.default.genSalt(10);
        const encryptedPass = yield bcrypt_1.default.hash(password, salt);
        const newUser = new user_model_1.default({
            'email': email,
            'password': encryptedPass
        });
        const newUser_ = yield newUser.save();
        res.status(200).send(newUser_.email);
    }
    catch (err) {
        console.log(err);
        sendError(res, "faild2");
    }
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);
    if (email == null || password == null) {
        return sendError(res, "Please enter a valid email and password");
    }
    try {
        const user = yield user_model_1.default.findOne({ 'email': email });
        console.log(user);
        if (user == null) {
            return sendError(res, "imcorrect email");
        }
        console.log(password);
        console.log(user.password);
        const mach = bcrypt_1.default.compare(password, user.password);
        if (!mach)
            return sendError(res, "imcorrect password");
        res.status(200).send("login sucsess!!");
    }
    catch (error) {
        console.log(error);
        return sendError(res, "faild login");
    }
});
const logout = (req, res) => {
    res.status(400).send({ 'error': "failed" });
};
module.exports = { register, login, logout };
//# sourceMappingURL=auth.js.map