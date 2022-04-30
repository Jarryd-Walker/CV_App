import './css/App.css';
import ContactInfo from './components/ContactInfo';
import PersonalStatement from './components/PersonalStatement';
import Education from './components/Education'

function App() {
  return (
    <div id='resumeContainer'>
      <section id='leftSide'>
        <ContactInfo />
      </section>
      <section id='rightSide'>
        <PersonalStatement />
        <Education />
      </section>
    </div>
  );
}

export default App;
