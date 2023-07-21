import moment from "moment";
import { useState, useEffect } from "react";

import "../assets/styles/MzList.css";

const MzList = ({ userId }) => {
  const [userMzList, setUserMzList] = useState([]);

  const getUserMzList = async (userId) => {
    const res = await fetch(`http://localhost:3001/user/${userId}/list`).then(
      (response) => response.json()
    );
    setUserMzList(Object.values(res.mzList));
  };

  useEffect(() => {
    getUserMzList(userId);
  }, [userId]);

  return (
    <div className="MzList">
      <div className="user_mz_list_container_header">
        <div className="user_mz_list_name_header">맛집 리스트명</div>
        <div className="user_mz_list_created_date_header">리스트 생성일자</div>
      </div>
      <div className="user_mz_list_container">
        {userMzList.map((item) => {
          return (
            <div className="user_mz_list" id={item.listId} key={item.listId}>
              <div className="user_mz_list_name">{item.listName}</div>
              <div className="user_mz_list_created_date">
                {moment(item.createdDate, "YYYYMMDD").format("YYYY-MM-DD")}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MzList;
