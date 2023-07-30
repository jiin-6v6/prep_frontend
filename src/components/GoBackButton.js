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
        onClick={() => navigate("/")}
      />
    </div>
  );
};
export default GoBackButton;
