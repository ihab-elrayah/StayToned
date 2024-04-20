import Helmet from "react-helmet";
import bleft from "./bicepleft.png";
import bright from "./bicepright.png";
import smiling from "./smiling.jpeg";

function FrontPage () {
  return (
      <div className="bruh">
      <div className="frontpage">
        <div className="titleWrapper">
          <h1 className="title">
            <img className="arm" src={bleft}/>
            StayToned: AI for a Healthier You
            <img className="arm" src={bright}/>
          </h1>
          <p className="subtitle">Optimize your health with AI-driven customized workouts <br/> and our tool that makes it easy to locate nearby gyms.</p>
        </div>
      </div>
        <div className="spacer"></div>
        <div class="container">
          <div class="panel text-panel">
              <h2>What we offer</h2>
              <p>
                <span className="bolded">Gym Locator:</span> With FitFinder's Gym Locator, discovering gyms in your area has never been easier. Simply enter your location, and our tool instantly identifies the best gyms around, complete with details like amenities, hours, and user reviews. Whether you're traveling or looking for a new fitness spot, Gym Locator helps you find the perfect place to work out.
              </p><br/>
              link
              <p>
                <span className="bolded">AI-Powered Custom Workouts:</span> FitFinder's AI Assistant Toner crafts workouts tailored to your fitness level, goals, and preferences. Just answer a few simple questions, and Toner designs a personalized routine to help you reach your goals. Whether you're into strength training, yoga, or high-intensity cardio, Toner adapts to your needs and keeps your workouts fresh and engaging.
              </p>
              link
          </div>
          <div class="panel image-panel">
              <img src={smiling} alt="Example Image" />
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    );
}

export default FrontPage;