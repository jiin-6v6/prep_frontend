import MzList from "../../components/MzList";
import Header from "../../components/Header";
import UserHeader from "../../components/UserHeader";

const Home = ({ userId }) => {
  return (
    <div className="Home">
      <Header
        leftChild={"menu bar"}
        headerText={"HOME PAGE"}
        rightChild={<UserHeader userId={userId} />}
      />
      <MzList userId={userId} />
    </div>
  );
};

export default Home;
