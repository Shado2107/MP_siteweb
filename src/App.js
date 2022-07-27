import './App.css';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Services/>
      <Reasons/>
      <Plans/>
    </div>
  );
}

export default App;
