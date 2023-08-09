import { useParams, useLocation } from "react-router-dom";
import Header from "../components/Header";
import GoBackButton from "../components/GoBackButton";
import UserHeader from "../components/UserHeader";
import { useContext } from "react";
import { AppContext } from "../App";
import MzListUpdateForm from "../components/MzListUpdateForm";

const MzListUpdate = () => {
  const param = useParams();
  const { state } = useLocation();
  const userId = useContext(AppContext);

  return (
    <div className="MzListUpdate">
      <Header
        leftChild={<GoBackButton />}
        headerText={param?.mzListName}
        rightChild={<UserHeader userId={userId} />}
      />
      <MzListUpdateForm mzListId={state.mzListId} />
    </div>
  );
};
export default MzListUpdate;
