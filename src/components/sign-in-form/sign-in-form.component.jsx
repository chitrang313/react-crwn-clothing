import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  SigninAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils.js";
import Button from "../button/button.component.jsx";
import FormInput from "../form-input/form-input.component.jsx";
import "./sign-in-form.styles.scss";

const defaultSignInForm = {
  email: "",
  password: "",
};
function SignInForm(params) {
  const [signInForm, setSignInForm] = useState(defaultSignInForm);
  const { email, password } = signInForm;

  const onGoogleSignInHandler = async () => {
    const result = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(result.user);
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setSignInForm({ ...signInForm, [name]: value });
  };
  const resetFormField = () => {
    setSignInForm(defaultSignInForm);
  };
  const onFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await SigninAuthUserWithEmailAndPassword(email,password);
      console.log("response", response);
      resetFormField();
    } catch (error) {
      console.log("error", error.message);
    }
  };
  return (
    <div className="sign-in-container">
      <h2>I Already have an account</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={onFormSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={onChangeHandler}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={onChangeHandler}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">sign in</Button>
          <Button buttonType="google" onClick={onGoogleSignInHandler}>
            sign-in with google
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
