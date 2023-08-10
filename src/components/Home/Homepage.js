import videoHomePage from "../../assets/video-homepage.mp4";

const Homepage = (props) => {
  return (
    <div className="homepage-container">
      <video autoPlay loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
    </div>
  );
};

export default Homepage;
