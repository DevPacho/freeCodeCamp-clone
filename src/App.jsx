import './App.css';
import Testimony from './components/testimony';
const boldTxtShawn = <b>freeCodeCamp changed my life.</b>

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>Here is what our alumni say about freeCodeCamp: Pacho</h1>

        <Testimony
          name="Shawn Wang"
          country="Singapore"
          whoImg="Shawn"
          position="Software Engineer"
          company="Amazon"
          description="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        />

        <Testimony
          name="Sarah Chima"
          country="Nigeria"
          whoImg="Sarah"
          position="Software Engineer"
          company="ChatDesk"
          description="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
        />

        <Testimony
          name="Emma Bostian"
          country="Sweden"
          whoImg="Emma"
          position="Software Engineer"
          company="Spotify"
          description="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
          />

      </div>
    </div>
  );
}

export default App;
