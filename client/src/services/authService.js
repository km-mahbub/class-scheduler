import BaseApiService from "./baseApiService";

export default class AuthService extends BaseApiService {
  tryLogin(data) {
    return this.postData("auth/login", "", data);
  }
}