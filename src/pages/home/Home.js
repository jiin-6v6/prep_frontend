import MzList from "../../components/MzList";
import Header from "../../components/Header";
import AddMzListButton from "../../components/AddMzListButton";
import UserHeader from "../../components/UserHeader";

const Home = ({ userId }) => {
  return (
    <div className="Home">
      <Header
        leftChild={<AddMzListButton />}
        headerText={"HOME PAGE"}
        rightChild={<UserHeader userId={userId} />}
      />
      <MzList userId={userId} />
    </div>
  );
};

export default Home;
