import { useSelector } from 'react-redux';
import Home from './increments/Home';
import Test from './test/Test';
function App() {
const myState = useSelector((state) => state.changeNumber)
  return (
    <div className="App">
      {/* <Home currentValue={myState}/> */}
      <Test/>
    </div>
  );
}

export default App;
