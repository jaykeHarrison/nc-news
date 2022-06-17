import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { getAllUsers } from "../utils/api";

const UserDropDownList = () => {
  const [userList, setUserList] = useState([]);
  const { setSignedInUser } = useContext(UserContext);

  const handleUserChange = (event) => {
    setSignedInUser(event.target.value);
  };

  useEffect(() => {
    getAllUsers().then((usersArr) => {
      setUserList(usersArr);
    });
  }, []);

  return (
    <select onChange={handleUserChange}>
      <option value=""></option>
      {userList.map(({ username }) => {
        return (
          <option key={username} value={username}>
            {username}
          </option>
        );
      })}
    </select>
  );
};

export default UserDropDownList;
