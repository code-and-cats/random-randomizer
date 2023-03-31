import './App.css';
import YesNo from './components/YesNo';
import { RandomNumber } from './components/RandomNumber';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Header />
     <main>
     <YesNo />
     <RandomNumber />
     </main>
    </div>
  );
}

export default App;
