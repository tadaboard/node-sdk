export default class Request {
  constructor(body) {
    this.body = body;
  }

  extractQuery() {
    return this._extractQuery(this.body);
  }

  _extractQuery(body) {
    let input = this._convertInput(body);
    if (input.query === undefined || typeof input.query != 'object') {
      return {};
    }

    return input.query;
  }

  _convertInput(body) {
    if (typeof body == 'String') {
      if (body.length == 0) {
        return {};
      }
      try {
        this.requestObject = JSON.parse(body);
      } catch (e) {
        if (e instanceof SyntaxError) {
          throw new TypeError('Request input must be a valid JSON when it\'s a string');
        } else {
          throw e;
        }
      }
    } else if (typeof body == 'object') {
      return body;
    } else {
      return {};
    }
  }
}
