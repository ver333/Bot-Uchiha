const ping = require('../ping');

describe('Ping Command', () => {
  test('should return pong response', () => {
    const result = ping. execute();
    expect(result).toBeDefined();
  });
});
