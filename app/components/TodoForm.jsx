var React = require('react');

var TodoForm = React. createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var todoItem = this.refs.todoEm.value;
    if(todoItem.length > 0) {
      this.refs.todoEm.value='';
      this.props.onAddTodo(todoItem);
    }
  },
  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="todoEm" placeholder="Enter a task" />
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
});

module.exports = TodoForm;
