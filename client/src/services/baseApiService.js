const apiMethod = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE"
};

// const baseUrl = "https://api.classscheduler.tk/v1";
const baseUrl = "http://localhost:4040/v1";

export default class BaseApiService {
  constructor(submittedBaseUrl = null) {
    this._baseUrl = submittedBaseUrl || baseUrl;
  }
  _prepareSettings(methodName) {
    let settings = {
      method: methodName,
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    };
    return settings;
  }

  _prepareUrl(actionName, params) {
    if (!this._baseUrl) {
      throw new Error("Invalid Base Url");
    }

    let stringUrl = `${this._baseUrl}/${actionName}`;
    let url = new URL(stringUrl);
    if (params) {
      url.search = new URLSearchParams(params);
    }

    return url;
  }

  async getData(actionName, params) {
    let url = this._prepareUrl(actionName, params);
    let settings = this._prepareSettings(apiMethod.GET);
    let response = await fetch(url, settings);
    return await response.json();
  }

  async postData(actionName, params, postData) {
    let url = this._prepareUrl(actionName, params);
    let settings = this._prepareSettings(apiMethod.POST);
    let response = await fetch(url, {...settings, body: JSON.stringify(postData)});
    return response;
  }
  async putData(actionName, params, postData) {
    let url = this._prepareUrl(actionName, params);
    let settings = this._preparePostSettings(apiMethod.PUT);
    let response = await fetch(url, {...settings, body: JSON.stringify(postData)});
    return response;
  }
  async deleteData(actionName, params) {
    let url = this._prepareUrl(actionName, params);
    let settings = this._prepareSettings(apiMethod.DELETE);
    let response = await fetch(url, settings);
    return response;
  }
}
