import TB from '../../src/tadaboard-node-sdk';

describe('TB', () => {
  describe('response', () => {
    it('is a function', () => {
      expect(TB.response).to.be.a('function');
    });
  });
});
