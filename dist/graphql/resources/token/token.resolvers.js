"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const utils_1 = require("../../../utils/utils");
exports.tokenResolvers = {
    Mutation: {
        createToken: (parent, { email, password }, { db }) => {
            return db.User.findOne({
                where: { email: email },
                attributes: ['id', 'password']
            }).then((user) => {
                let errrorMessage = 'Não Autorizado, E-mail ou Senha Incorreto';
                if (!user) {
                    throw new Error(errrorMessage);
                }
                if (!user.isPassword(user.get('password'), password)) {
                    throw new Error(errrorMessage);
                }
                const payLoad = {
                    sub: user.get('id')
                };
                return {
                    token: jwt.sign(payLoad, utils_1.JWT_SECRET)
                };
            });
        }
    }
};
