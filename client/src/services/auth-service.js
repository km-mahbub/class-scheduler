import BaseApiService from "./base-api-service";

export default class AuthService extends BaseApiService {
  tryLogin(data) {
    return this.postData("auth/login", "", data);
  }
}