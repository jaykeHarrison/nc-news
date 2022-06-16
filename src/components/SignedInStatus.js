import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.js";

const SignedInStatus = () => {
  const { signedInUser } = useContext(UserContext);

  const notSignedInString =
    "You are currently not signed in, please select a user:";
  const signedInAsString = `You are currently signed in as: ${signedInUser}`;
  return <h3>{signedInUser === "" ? notSignedInString : signedInAsString}</h3>;
};

export default SignedInStatus;
