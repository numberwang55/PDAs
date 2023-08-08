import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import "bulma/css/bulma.css";

export default function App() {
  return (
    <div>
      <header className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </header>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title={"Alexa"}
                handle={"@alexa99"}
                image={AlexaImage}
                description="Alexa was invented by Amazon so that you buy more things."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title={"Cortana"}
                handle={"@cortana32"}
                image={CortanaImage}
                description="Cortana was made by Microsoft. Anyone know what it does?"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title={"Siri"}
                handle={"@siri01"}
                image={SiriImage}
                description="Siri was made by Apple and apparently is being phased out"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
