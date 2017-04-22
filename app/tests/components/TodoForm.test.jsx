var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoForm = require('TodoForm');

describe('TodoForm', () => {
  it('should exists', () => {
    expect(TodoForm).toExist();
  })

  it('should called onAddTodo if valid text entered', () => {
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy}/>)
    var $el = $(ReactDOM.findDOMNode(todoForm));
    todoForm.refs.todoEm.value = 'Walk the dog!';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('Walk the dog!');
  })

  it('should not called onAddTodo if invalid text entered', () => {
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy}/>)
    var $el = $(ReactDOM.findDOMNode(todoForm));
    todoForm.refs.todoEm.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  })
});
