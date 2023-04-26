import './App.css';
import Navbar from './Component/Navbar';
import {Routes,Route} from 'react-router-dom'
import Addemp from './Component/Addemp';
import Home from './Component/Home';
import EditEmp from './Component/EditEmp';
import Feedback from './Component/Feedback';
import Addfeedback from './Component/Addfeedback';

function App() {
  return (

      <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route> 
        <Route path="/addEmp" element={<Addemp/>}></Route>
        <Route path="/editEmp" element={<EditEmp/>}></Route>
        <Route path="/addfeed" element={<Addfeedback/>}></Route>
        <Route path="/feed" element={<Feedback/>}></Route>
      </Routes>
    </div>

  );
}

export default App;
