import * as jwt from 'jsonwebtoken';
import { DbConnection } from "../../../interfaces/DcConnectionInterface";
import { UserInstance } from "../../../models/UserModel";
import { JWT_SECRET } from '../../../utils/utils';

export const tokenResolvers = {
    Mutation: {
        createToken: (parent, {email, password}, {db}: {db: DbConnection}) => {
            return db.User.findOne({
                where: {email: email},
                attributes: ['id', 'password']
            }).then((user: UserInstance) => {

                let errrorMessage: string = 'Não Autorizado, E-mail ou Senha Incorreto';

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
                    token: jwt.sign(payLoad, JWT_SECRET)
                }
            })          
        }
    }
};
