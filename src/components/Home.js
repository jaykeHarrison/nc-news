import { Link } from "react-router-dom";
import SignedInStatus from "./SignedInStatus";
import SubHeader from "./SubHeader";
import UserDropDownList from "./UserDropDownList";
import WhatsHotWhatsNot from "./WhatsHotWhatsNot";

const Home = ({ signedInUser, setSignedInUser }) => {
  return (
    <>
      <SubHeader title="Welcome to NC News" />
      <WhatsHotWhatsNot />
      <SignedInStatus signedInUser={signedInUser} />
      <UserDropDownList />
      <Link to="/articles">
        <p>VIEW ALL ARTICLES</p>
      </Link>
    </>
  );
};

export default Home;
