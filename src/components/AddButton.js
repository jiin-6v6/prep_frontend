import { useNavigate } from "react-router-dom";

import addButtonFilePath from "../assets/images/AddButton.png";
import "../assets/styles/AddButton.css";

const AddButton = ({ onClickTarget, mzListId }) => {
  const navigate = useNavigate();
  return (
    <div className="add_button">
      <img
        src={addButtonFilePath}
        alt="맛집 리스트 추가 버튼"
        onClick={() =>
          navigate(`${onClickTarget}`, { state: { mzListId: mzListId } })
        }
      />
    </div>
  );
};
export default AddButton;
