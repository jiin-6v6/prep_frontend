import { useRef, useContext } from "react";
import "../assets/styles/MzListAddForm.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

const saveMzList = async (userId, mzListName, navigate) => {
  if (window.confirm("맛집 리스트를 생성하시겠습니까?")) {
    const res = await fetch(`${BACKEND_SERVER}/user/${userId}/mzlist`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ mzListName: mzListName }),
    }).then((response) => response.json());

    if (res.result === "fail") {
      alert(res.message);
    } else if (res.result === "success") {
      alert("정상적으로 저장했습니다.");
      navigate("/");
    } else {
      alert("Internal Server Error!");
    }
  }
};

const MzListAddForm = () => {
  const navigate = useNavigate();
  const userId = useContext(AppContext);
  const mzListName = useRef();

  return (
    <div className="mzlist_add_form">
      <div className="mzlist_name_input_container">
        <div className="mzlist_name">맛집 리스트명</div>
        <div className="mzlist_name_input">
          <input
            type="text"
            className="mzlist_name_input"
            ref={mzListName}
          ></input>
        </div>
        <div className="mzlist_submit_button">
          <button
            onClick={() => {
              saveMzList(userId, mzListName.current.value, navigate);
            }}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};
export default MzListAddForm;
