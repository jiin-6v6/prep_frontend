import menuFilePath from "../assets/images/MenuButton.png";
import "../assets/styles/MenuButton.css";

const MenuButton = () => {
  return (
    <div className="menu_button">
      <img src={menuFilePath} alt="메뉴 버튼" />
    </div>
  );
};
export default MenuButton;
