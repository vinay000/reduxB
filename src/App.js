import { useSelector } from 'react-redux';
import Home from './increments/Home';
function App() {
const myState = useSelector((state) => state.changeNumber)
  return (
    <div className="App">
      <Home currentValue={myState}/>
    </div>
  );
}

export default App;
