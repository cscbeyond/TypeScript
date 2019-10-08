import { MysqlDb } from './modules/MysqlDb';
class UserClass {
    username: string | undefined;
    password: string | undefined;
}

var UserModel = new MysqlDb<UserClass>();
export {
    UserClass, UserModel
}