var assert = require('assert');
var chaiAssert = require('chai').assert;
var expect = chaiAssert.expect;
var AddTodo = '/src/js2/components/AddTodo';

var foo = 'bar';
var beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
  describe('#typeOf()', function(){
    it('beverages has 3 types of tea', function(){
      chaiAssert.lengthOf(beverages.tea, 3);
    });
  });
});

//==============================
describe('String', function(){
  describe('#typeOf()', function(){
    it('With Chai, foo is String', function(){
      chaiAssert.typeOf(foo, 'string', 'foo is a string'); // with optional message
    });
  });

  describe('#Value', function(){
    it('With Chai, foo equal `bar`', function(){
      chaiAssert.equal(foo, 'bar');
    });

    it('With Chai, foo`s value has a length of 3', function(){
      chaiAssert.lengthOf(foo, 3);
    });
  });
});

//==============================


//======== Add to do ==================
/*
describe('AddTodo', function(){
  describe('#Function', function(){
    it('Testing AddTodo, handleChangeRequired', function(){
      var addTodo = new AddTodo();
      var eventParem = {
        target: {
          value: 'state'
        }
      }
      addTodo.handleChangeRequired(eventParem);
      expect(addTodo.state.value).to.equal("state");
    });
  });
});
*/
//======== Ending Add to do ==================
