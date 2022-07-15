const assert = require('chai').assert;
const ServerExpressMusiphone = require('../../src/server/transports/express')();

describe('ServerExpressMetastocle', () => {
  let server;
  let nodeServer;

  describe('instance creation', function () {
    it('should create an instance', function () { 
      assert.doesNotThrow(() => server = new ServerExpressMusiphone());
      server.node = this.node;  
      nodeServer = this.node.server;
      this.node.server = server; 
    });
  });

  describe('.init()', function () { 
    it('should not throw an exception', async function () {
      await server.init();
    });
  });
  
  describe('.deinit()', function () { 
    it('should not throw an exception', async function () {
      await server.deinit();
    });
  }); 

  describe('reinitialization', () => {
    it('should not throw an exception', async function () {
      await server.init();
    });
  });
  
  describe('.destroy()', function () { 
    it('should not throw an exception', async function () {
      await server.destroy();
      this.node.server = nodeServer; 
    });
  });
});