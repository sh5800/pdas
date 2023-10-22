import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import BardImage from "./images/Bard.png";
import ChatGPTImage from "./images/ChatGPT.png";
import CopilotImage from "./images/Copilot.png";

function App() {
  return (
    <div>

      <section className="hero is-primary">
        <div className="hero-body">
            <p className="title">
                Generative AI Tools
            </p>
        </div>
      </section>  

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="ChatGPT"
                handle="@ChatGPTBot"
                image={ChatGPTImage}
                description="The most commonly used tool from OpenAI to date is ChatGPT, which offers common users free access to basic AI content development."
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                title="GitHub Copilot"
                handle="@GitHubCopilot"
                image={CopilotImage}
                description="GitHub Copilot, in partnership with GitHub and OpenAI, created Copilot, a code completion Artificial Intelligence tool."
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                title="Bard"
                handle="@googlebardinfo"
                image={BardImage}
                description="Bard is a chatbot and content generation tool developed by Google. "
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
