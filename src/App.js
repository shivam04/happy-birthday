import './App.css';
import Birthday from './components/Birthday';

function App() {
  const name = "Prags";
  const birthday = 23;
  const birtmonth = 12;
  return (
    <div className="App">
      <Birthday name={name} birthday={birthday} birtmonth={birtmonth}/>
    </div>
  );
}

export default App;
