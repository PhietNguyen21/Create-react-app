import videoHomePage from "../../assets/video-homepage.mp4";

const Homepage = (props) => {
  return (
    <div className="homepage-container">
      <div className="homepage">
        <video autoPlay loop muted>
          <source src={videoHomePage} type="video/mp4" />
        </video>

        <div className="homepage-content">
          <h3 className="tilte">There's a better way to ask</h3>
          <p className="title-content">
            You don't want to make a boring form. And your audience won't answer
            one.Create a typeform instead -- and make every happy.
          </p>

          <div>
            <button className="btn-free">Get's started.It's free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
