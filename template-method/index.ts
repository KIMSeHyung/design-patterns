import AuthService from "./auth/AuthService";

const authService = new AuthService();

const token = authService.signIn("test", "test");
authService.authorization(token);