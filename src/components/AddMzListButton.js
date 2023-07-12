import addMzListButtonFilePath from "../assets/images/AddMzListButton.png";
import "../assets/styles/AddMzListButton.css";

const AddMzListButton = () => {
  return (
    <div className="add_list_mz_button">
      <img src={addMzListButtonFilePath} alt="맛집 리스트 추가 버튼" />
    </div>
  );
};
export default AddMzListButton;
