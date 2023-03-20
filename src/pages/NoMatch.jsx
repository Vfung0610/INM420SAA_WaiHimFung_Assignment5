import "../assets/css/NoMatch.css";
import pageNotFoundImg from "../assets/images/pageNotFound.jpg";

const NoMatch = () => {
  return (
    <div className="noMatch">
      <img src={pageNotFoundImg} alt="Page Not Found" />
    </div>
  );
};

export default NoMatch;
