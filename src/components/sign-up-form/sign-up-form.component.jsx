import { useState } from "react";

const defaultForm = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm(params) {
  const [signUpForm, setSignUpForm] = useState(defaultForm);
  const { displayName, email, password, confirmPassword } = signUpForm;

  console.log("signUpForm", signUpForm);
  
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setSignUpForm({ ...signUpForm, [name]: value });
  };
  return (
    <div>
      <h1>User SignUp Form</h1>
      <form>
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
