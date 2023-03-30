abstract class AbstractAuthService {
    protected abstract varify(token: string): void;
    protected abstract encodeToken(id: string): string;
    protected abstract authenticate(id: string, password: string): boolean;

    public signIn(id: string, password: string) {
        if (this.authenticate(id, password)) {
            const token = this.encodeToken(id);
            return token;
        } else {
            throw new Error("id / password incorrect");
        }
    }

    public authorization(token: string) {
        try {
            this.varify(token);
            console.log("authorized");
        } catch(e: any) {
            throw new Error(e);
        }
    }
}

export default AbstractAuthService;