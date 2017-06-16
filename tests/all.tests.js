"use strict";

/**
 * @author EmmanuelOlaojo
 * @since 6/22/16
 */

var fs = require("fs");

var config = require("../test_conf");
config.init();

var Fawn = config.Fawn;
var DB = config.DB;
var TASKS = config.TASKS;

global.utils = require("../lib/utils")();
global.expect = config.expect;
global.Promise = config.Promise;
global.TEST_COLLECTION_A = config.TEST_COLLECTION_A;
global.TEST_COLLECTION_B = config.TEST_COLLECTION_B;
global.TEST_FILE_PATH = config.TEST_FILE_PATH;
global.TEST_FILE_TEXT = config.TEST_FILE_TEXT;

describe("ALL TESTS", function(){
  before(function(){
    Fawn.init(config.db + DB, TASKS);

    Fawn.initModel(TEST_COLLECTION_A);
    Fawn.initModel(TEST_COLLECTION_B);

    global.Task = Fawn.Task;
    global.task = Fawn.Task();
    global.taskMdl = task.getTaskCollection();

    global.TestMdlA = utils.getModel(TEST_COLLECTION_A);
    global.TestMdlB = utils.getModel(TEST_COLLECTION_B);

    fs.writeFileSync(TEST_FILE_PATH, TEST_FILE_TEXT);
  });

  after(function(){
    fs.unlinkSync(TEST_FILE_PATH);
    return utils.dropCollection(TASKS);
  });

  require("./task.tests");
  require("./roller.tests");
});


