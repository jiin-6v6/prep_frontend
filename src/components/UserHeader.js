import profileIconFilePath from "../assets/images/coolcool.jpg";
import "../assets/styles/UserHeader.css";
// const profileIconFilePath = "/assets/images/coolcool.jpg";

const UserHeader = ({ userId }) => {
  return (
    <div className="user_header">
      <div className="user_name">{userId}</div>
      <div className="user_profile_icon">
        <img src={profileIconFilePath} alt="프로필 아이콘" />
      </div>
    </div>
  );
};

export default UserHeader;
