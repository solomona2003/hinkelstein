import { User } from './user.model';
import { AuthData } from './auth-data.model';

export class AuthService {
    private user: User;

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userid: Math.round(Math.random() * 10000).toString(),
            // role: Math.round(Math.random() * 10000).toString(),
            // avatar: Math.round(Math.random() * 10000).toString()
        };
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userid: Math.round(Math.random() * 10000).toString(),
            // role: Math.round(Math.random() * 10000).toString(),
            // avatar: Math.round(Math.random() * 10000).toString()
        };
    }

    logout () {
        this.user = null;
    }

    getUser () {
        return { ...this.user }; // so that other classes can not change the main user but a copy
    }

    isAuth () {
        return this.user != null; // if user is not null (not authenticated) return false
    }
 }
