import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";
//====================================================================================================
const defaultForm = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

//====================================================================================================
function SignUpForm(params) {
  const [signUpForm, setSignUpForm] = useState(defaultForm);
  const { displayName, email, password, confirmPassword } = signUpForm;
  const { setCurrentUser } = useContext(UserContext);
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
      setCurrentUser(user);
      resetFormField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("Email is already in use");
      else console.log("error", error.message);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onFormSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          onChange={onChangeHandler}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          required
          type="password"
          onChange={onChangeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button onSubmit={() => {}}>Submit</Button>
      </form>
    </div>
  );
}
export default SignUpForm;
