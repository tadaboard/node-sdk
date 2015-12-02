import Response from '../../src/response';

let responseSchema = {
  title: 'response schema v1',
  type: 'object',
  required: ['timestamp', 'query', 'item'],
  properties: {
    timestamp: {
      type: 'number'
    },
    query: {
      type: 'object'
    },
    item: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'data']
      }
    }
  }
};

describe('TB', () => {
  describe('response', () => {
    let response;

    beforeEach(() => {
      response = new Response();
    });

    it('should have an empty object as widgets property', () => {
      expect(response.widgets).to.be.an('object').and.be.empty;
    });

    describe('toJSON', () => {
      it('should return a valid JSON', () => {
        response.widgets = {'1': {data: 123}};
        expect(response.toJSON()).to.be.jsonSchema(responseSchema);
      });

      it('should should return a JSON with merged ID and data', () => {
        response.widgets = {'1': {data: 123}};
        expect(response.toJSON().item).to.be.eql([{id: '1', data: {data: 123}}]);
      });
    });

    describe('toString', () => {
      it('should return a valid JSON as string', () => {
        response.widgets = {'1': {data: 123}};
        let json = JSON.parse(response.toString());
        expect(json).to.be.jsonSchema(responseSchema);
      });
    });
  });
});
