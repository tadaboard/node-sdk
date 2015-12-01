widgetsToArray = (widgets) => {
  result = [];
  Object.keys(widgets).forEach(function(key) {
    result.push({
      id: key,
      data: widgets[key]
    });
  });

  return result;
};

export default class Response {
  constructor() {
    this.widgets = {};
  }

  widget(id, data) {
    this.widgets[id] = data;
  }

  toJSON() {
    return JSON.stringify({
      timestamp: Date.now(),
      query: {},
      item: widgetsToArray(this.widgets)
    });
  }
}
