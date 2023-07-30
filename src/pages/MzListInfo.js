import { useParams, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import Header from "../components/Header";
import UserHeader from "../components/UserHeader";
import MzListRestaurant from "../components/MzListRestaurant";
import AddButton from "../components/AddButton";
import GoBackButton from "../components/GoBackButton";

const MzListInfo = () => {
  const param = useParams();
  const { state } = useLocation();
  const userId = useContext(AppContext);

  return (
    <div className="MzListInfo">
      <Header
        leftChild={<GoBackButton />}
        headerText={param?.mzListName}
        rightChild={<UserHeader userId={userId} />}
      />
      <MzListRestaurant mzListId={state?.mzListId} />
      <AddButton
        onClickTarget={`/mzlist/${param?.mzListName}/new`}
        mzListId={state?.mzListId}
      />
    </div>
  );
};
export default MzListInfo;
