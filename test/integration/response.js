import Response from '../../src/response';

describe('TB', () => {
  describe('response query flow', () => {
    it('should read the query object from the requestBody parameter', () => {
      let response = new Response({requestBody: {query: {data: '123'}}});
      expect(response.query.getQuery()).to.be.eql({data: '123'});
    });

    it('should merge defaults with the requestBody parameter', () => {
      let response = new Response({requestBody: {}, queryDefault: {data: '123'}});
      expect(response.query.getQuery()).to.be.eql({data: '123'});
    });

    it('should not replace defaults from the query if already present in the requestBody parameter', () => {
      let response = new Response({requestBody: {query: {data: '456'}}, queryDefault: {data: '123'}});
      expect(response.query.getQuery()).to.be.eql({data: '456'});
    });

    it('should include query object in the response', () => {
      let response = new Response({requestBody: {query: {data: '456'}}, queryDefault: {data: '123'}});
      expect(response.toJSON().query).to.be.eql({data: '456'});
    });
  });
});
