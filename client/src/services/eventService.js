import BaseApiService from "./baseApiService";

export default class EventService extends BaseApiService {
  fetchEvents() {
    return this.getData("events", "");
  }
}