import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class TodoForm extends Component {
  renderText({ input, meta, label }) {
    return (
      <div>
        <label>{label}</label>
        <input {...input} type="text" autoComplete="off" />
      </div>
    );
  }

  renderCheckbox({ input, meta, label }) {
    return (
      <div>
        <label>{label}</label>
        <input type="checkbox" {...input} />
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form className="" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderText} label="Title" />
        <Field
          name="description"
          component={this.renderText}
          label="Description"
        />
        <Field
          name="complete"
          component={this.renderCheckbox}
          label="Complete"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "todoForm",
})(TodoForm);
