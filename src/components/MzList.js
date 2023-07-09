import userEvent from "@testing-library/user-event";
import axios from "axios";
import { useState, useEffect } from "react";

const MzList = ({ userId }) => {
  const [userMzList, setUserMzList] = useState();

  const getUserMzList = (userId) => {
    axios.get(`http://localhost:3001/user/${userId}/list`).then((response) => {
      setUserMzList(response.data?.MzList);
    });
  };

  useEffect(() => {
    getUserMzList(userId);
  }, []);

  return (
    <div className="MzList">
      <div className="user_mz_list">{userMzList}</div>
    </div>
  );
};

export default MzList;
