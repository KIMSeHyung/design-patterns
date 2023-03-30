import AbstractAuthService from "./AbstractAuthService";
import userData from "../UserData";
import jwt from "jsonwebtoken";

class AuthService extends AbstractAuthService {
    private seceret = "secret";
    protected varify(token: string): void {
        jwt.verify(token, this.seceret);
    }
    protected encodeToken(id: string): string {
        return jwt.sign({id}, this.seceret);
    }
    protected authenticate(id: string, password: string): boolean {
        if(userData.id === id && userData.password === password) {
            return true;
        }
        return false;
    }
}

export default AuthService;