import MzList from "../components/MzList";
import Header from "../components/Header";
import MenuButton from "../components/MenuButton";
import UserHeader from "../components/UserHeader";
import AddButton from "../components/AddButton";

const Home = () => {
  return (
    <div className="Home">
      <Header
        leftChild={<MenuButton />}
        headerText={"HOME PAGE"}
        rightChild={<UserHeader />}
      />
      <MzList />
      <AddButton onClickTarget={"/mzlist/new"} />
    </div>
  );
};

export default Home;
