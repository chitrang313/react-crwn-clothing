//import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils.js";

import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils.js";

function SignIn(params) {
  
  const onGoogleSignInHandler = async () => {
    const result = await signInWithGooglePopup();
    console.log(result);
  };

  return (
    <div>
      <h1>Sign-In Page</h1>            
      <button onClick={onGoogleSignInHandler}>sign-in with google</button>
    </div>
  );
}

export default SignIn;
