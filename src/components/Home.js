import { Link } from "react-router-dom";
import SignedInStatus from "./SignedInStatus";
import SubHeader from "./SubHeader";
import UserDropDownList from "./UserDropDownList";
import WhatsHotWhatsNot from "./WhatsHotWhatsNot";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Home = () => {
  const { signedInUser } = useContext(UserContext);

  return (
    <>
      <SubHeader title="Welcome to NC News" />
      <SignedInStatus />
      {!signedInUser ? <UserDropDownList /> : null}
      <Link to="/articles">
        <p id="view-all-articles">VIEW ALL ARTICLES</p>
      </Link>
      <WhatsHotWhatsNot />
    </>
  );
};

export default Home;
