import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./Form.js";
import User from "./User.js"
import axios from "axios";
import schema from "./validation/formSchema";
import * as yup from "yup";


//////////////// INITIAL STATES ////////////////
const initialFormValues = {
  ///// TEXT INPUTS /////
  username: "",
  email: "",
  password: "",
  ///// CHECKBOX /////
  terms: false,
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  terms: "",
};

const initialUsers = [];
const initialDisabled = true;


function App() {
    //////////////// STATES ////////////////
    const [users, setUsers] = useState(initialUsers); // array of user objects
    const [formValues, setFormValues] = useState(initialFormValues); // object
    const [formErrors, setFormErrors] = useState(initialFormErrors); // object
    const [disabled, setDisabled] = useState(initialDisabled); // boolean


      //////////////// HELPERS ////////////////

  const postNewUser = (newUser) => {
    //    POST] `newUser` to `https://reqres.in/api/users`
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        console.log("Post response:", res)
        // debugger;
    //    add new user to state
        setUsers([res.data, ...users]);
    //    reset form
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
        debugger;
      });
  };

  const inputChange = (name, value) => {
    // RUN VALIDATION WITH YUP

    // yup.reach will allow us to "reach" into the schema and test only one part.
    // We give reach the schema as the first argument, and the key we want to test as the second.

    yup
      .reach(schema, name) // get to this part of the schema
      //we can then run validate using the value
      .validate(value) // validate this value
      .then(() => {
        // happy path and clear the error
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      // if the validation is unsuccessful, we can set the error message to the message
      // returned from yup (that we created in our schema)
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          // validation error from schema
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value, // NOT AN ARRAY
    });
  };

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.term,
    };
    // 🔥 STEP 8- POST NEW USER USING HELPER
    postNewUser(newUser);
  };

  //////////////// SIDE EFFECTS ////////////////
  // useEffect(() => {
  //   getFriends();
  // }, []);

  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);
    
  return (
    <div className="container">
      <header>
        <h1>USER BOARDER ONNER</h1>
      </header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}      
      />      {users.map((user) => {
        return <User key={user.email} details={user} />;
      })}
    </div>
  );
}

export default App;
