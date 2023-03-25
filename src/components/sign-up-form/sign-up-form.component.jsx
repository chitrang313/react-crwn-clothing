import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultForm = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm(params) {
  const [signUpForm, setSignUpForm] = useState(defaultForm);
  const { displayName, email, password, confirmPassword } = signUpForm;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setSignUpForm({ ...signUpForm, [name]: value });
  };

  const resetFormField = () => {
    setSignUpForm(defaultForm);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert("password is not matching");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("Email is already in use");
      else console.log("error", error.message);
    }
  };

  return (
    <div>
      <h1>User SignUp Form</h1>
      <form onSubmit={onFormSubmit}>
        <label>Display Name</label>
        <input
          required
          type="text"
          onChange={onChangeHandler}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          required
          type="email"
          onChange={onChangeHandler}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          required
          type="password"
          onChange={onChangeHandler}
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
          required
          type="password"
          onChange={onChangeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button onSubmit={() => {}}>Submit</button>
      </form>
    </div>
  );
}
export default SignUpForm;
