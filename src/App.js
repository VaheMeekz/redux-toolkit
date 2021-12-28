import logo from './logo.svg';
import './App.css';
import {useSelector} from "react-redux";

function App() {

  const count = useSelector(state => state?.toolkit.count)

  console.log(count)
  return (
    <div className="App">

    </div>
  );
}

export default App;
