import { useNavigate } from "react-router-dom";

import goBackButtonFilePath from "../assets/images/GoBackButton.png";
import "../assets/styles/GoBackButton.css";

const GoBackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="go_back_button">
      <img
        src={goBackButtonFilePath}
        alt="뒤로 가기 버튼"
        // TODO 홈으로 보내는 것이 아니라 뒤로가는 것으로 수정
        onClick={() => navigate("/")}
      />
    </div>
  );
};
export default GoBackButton;
