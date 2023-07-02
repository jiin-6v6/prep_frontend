import Header from "../../components/header/Header";
import UserHeader from "../../components/header/UserHeader";

const Home = () => {
  return (
    <div>
      <Header rightChild={<UserHeader />} />
    </div>
  );
};

export default Home;
