const fse = require('fs-extra');
const tools = require('./tools');

describe('museria', () => {
  before(() => fse.ensureDir(tools.tmpPath));
  after(() => fse.remove(tools.tmpPath));
  require('./node');
  require('./client');
  require('./services');
  require('./routes');
  require('./utils');
});