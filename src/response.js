import Query from './query';
import Request from './request';

let widgetsToArray = (widgets) => {
  let result = [];
  Object.keys(widgets).forEach(function(key) {
    result.push({
      id: key,
      data: widgets[key]
    });
  });

  return result;
};

export default class Response {
  constructor(options = {}) {
    this.widgets = {};
    this.request = new Request(options.requestBody);
    this.query = new Query({default: options.queryDefault, request: this.request});
  }

  getQuery() {
    return this.query.getQuery();
  }

  widget(id, data) {
    this.widgets[id] = data;
  }

  toJSON() {
    return {
      timestamp: Date.now(),
      query: this.query.getQuery(),
      item: widgetsToArray(this.widgets)
    };
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }
}
