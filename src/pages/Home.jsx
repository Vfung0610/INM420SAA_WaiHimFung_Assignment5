import welcomeImg from "../assets/images/welcomeImg.jpeg";
import "../assets/css/Home.css";

const Home = () => {
  return (
    <div className="home">
      <img src={welcomeImg} alt="A Welcome Image" />
    </div>
  );
};

export default Home;
