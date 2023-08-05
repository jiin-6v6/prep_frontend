import { useContext } from "react";
import { AppContext } from "../App";
import Header from "../components/Header";
import UserHeader from "../components/UserHeader";
import GoBackButton from "../components/GoBackButton";
import MzListAddForm from "../components/MzListAddForm";

const MzListAdd = () => {
  const userId = useContext(AppContext);

  return (
    <div className="MzListInfo">
      <Header
        leftChild={<GoBackButton />}
        headerText="맛집 리스트 추가"
        rightChild={<UserHeader userId={userId} />}
      />
      <MzListAddForm />
    </div>
  );
};
export default MzListAdd;
