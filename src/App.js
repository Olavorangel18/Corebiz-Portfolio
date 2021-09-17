import Header from './components/Header';
import Contact from './components/Contact';
import Navegation from './components/Navegation'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header name="Olavo Rangel da Conceição" description="Front-End Developer"></Header>
      <Contact></Contact>
      <Navegation firstItem="Curiosidades" secondItem="Projetos" thirdItem="Certificados"></Navegation>
    </div>
  );
}

export default App;
