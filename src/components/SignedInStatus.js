const SignedInStatus = ({ signedInUser }) => {
  const notSignedInString =
    "You are currently not signed in, please select a user:";
  const signedInAsString = `You are currently signed in as: ${signedInUser}`;
  return <h3>{signedInUser === "" ? notSignedInString : signedInAsString}</h3>;
};

export default SignedInStatus;
