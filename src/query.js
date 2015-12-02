import _ from 'lodash';

export default class Query {
  constructor(options = {}) {
    this.default = options.default || {};
    this.request = options.request || {};
    this.query = _.merge({}, this.default, this.request.extractQuery());
  }

  getQuery() {
    return this.query;
  }
}
