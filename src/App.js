import logo from './logo.svg';
import './App.css';
import Title from './Component/Resume/Title';
import Experience from './Component/Resume/Experience';
import Skill from './Component/Resume/Skill';
import Hobbies from './Component/Resume/Hobbies';

function App() {
  return (
    <div className="App">
      <Title />
      <Experience />
      <Skill />
      <Hobbies />
    </div>
  );
}

export default App;
