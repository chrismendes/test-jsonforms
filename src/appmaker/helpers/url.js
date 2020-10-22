export default class UrlHelper {

  constructor() {
    this.appRoutePrefix = '/apps/';
  }

  /**
   * Convert a string to a url style string
   * 
   * @param {string} string e.g. "Equipment Request App"
   * @returns {string} URL style string, e.g. "equipment-request-app"
   */
  static stringToURL(string) {
    const url = string.toLowerCase().replace(' ', '-');
    return url;
  }

}