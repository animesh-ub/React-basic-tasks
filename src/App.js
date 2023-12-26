import './App.css';
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';
import Forth from './Components/Forth';
import First1 from './Components/First1';
import Second1 from './Components/Second1';
import Forth1 from './Components/Forth1';
import Third1 from './Components/Third1';
import Student from './Components/Student';
import Appclass from './Components/Appclass';


function App() {
  return (
    <>
    <First/>
    <Second/>
    <Third/>
    <Forth/>
    <First1/>
    <Second1/>
    <Third1/>
    <Forth1/>
    <Student
    name={"Animesh"} address={"Lucknow"} score="87"
    />
    
    <Appclass></Appclass>

    <button onClick={hello}>Hello</button>
    <button onClick={bye}>Bye</button>
 </>
  );
  
}

function hello(){
  alert("Hello")
}
 function bye(){
  alert("Bye")
}

export default App;
