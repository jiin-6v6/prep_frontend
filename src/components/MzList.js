import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import "../assets/styles/MzList.css";

const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

const MzList = () => {
  const navigate = useNavigate();
  const [userMzList, setUserMzList] = useState([]);
  const userId = useContext(AppContext);

  const getUserMzList = async (userId) => {
    const res = await fetch(`${BACKEND_SERVER}/user/${userId}/mzlist`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    }).then((response) => response.json());
    setUserMzList(res.mzList ? Object.values(res.mzList) : []);
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
            <div
              className="user_mz_list"
              id={item.listId}
              key={item.listId}
              onClick={() =>
                navigate(`/mzlist/${item.listName}`, {
                  state: { mzListId: item.listId },
                })
              }
            >
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
