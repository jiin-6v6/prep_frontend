import { useParams, useLocation } from "react-router-dom";

import Header from "../components/Header";
import AddMzListButton from "../components/AddMzListButton";
import UserHeader from "../components/UserHeader";
import MzListRestaurant from "../components/MzListRestaurant";

const MzListInfo = ({ userId }) => {
  const param = useParams();
  const { state } = useLocation();

  return (
    <div className="MzListInfo">
      <Header
        leftChild={<AddMzListButton />}
        headerText={param?.mzListName}
        rightChild={<UserHeader userId={userId} />}
      />
      <MzListRestaurant mzListId={state?.mzListId} />
    </div>
  );
};
export default MzListInfo;
