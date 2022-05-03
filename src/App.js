import './css/App.css';
import ContactInfo from './components/ContactInfo';
import PersonalStatement from './components/PersonalStatement';
import Education from './components/Education'
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div id='resumeContainer'>
      <section id='leftSide'>
        <ContactInfo />
      </section>
      <section id='rightSide'>
        <PersonalStatement />
        <Education />
        <WorkExperience />
      </section>
    </div>
  );
}

export default App;
