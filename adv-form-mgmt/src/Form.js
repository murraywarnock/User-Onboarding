import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value, checked, type } = evt.target;
    const valueToUse = (type === "checkbox" ? checked : value);
    change(name, valueToUse);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Board a User On</h2>

        {/* 🔥 DISABLE THE BUTTON */}
        <button disabled={disabled}>SUBMIT</button>

        <div className="errors">
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>
      </div>

      <div className="form-group inputs">
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>
          Username&nbsp;
          <input
            value={values.username}
            onChange={onChange}
            name="username"
            type="text"
          />
        </label>

        <label>
          Email
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            type="text"
          />
        </label>

        <label>
          Password
          <input
            value={values.password}
            onChange={onChange}
            name="password"
            type="password"
          />
        </label>

      </div>

      <div className="form-group checkboxes">
        <h4>Submit!</h4>

        {/* ////////// CHECKBOXES ////////// */}
     
        <label>
          Terms of Service
          <input
            type="checkbox"
            name="terms"
            checked={values.terms && (values.terms !== "no") ? true :false}
            onChange={onChange}
          />
        </label>
      </div>
    </form>
  );
}
