import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";

function SignIn(params) {
  const onGoogleSignInHandler = async () => {
    const result = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(result.user);
  };

  return (
    <div>
      <h1>Sign-In Page</h1>
      <button onClick={onGoogleSignInHandler}>sign-in with google</button>
    </div>
  );
}

export default SignIn;
