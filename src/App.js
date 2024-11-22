//import './App.css';
//import { useSelector , useDispatch} from 'react-redux';
//import { Incrementer , Decrementer , Reset } from './config/action';
import { BrowserRouter , Routes ,Route } from "react-router-dom";
import AddUser from "./composants/AddUser";
import UpdateUser from "./composants/Updateuser";
import UserList from "./composants/Userlist";
function App() {
  //const num = useSelector(data => data.num)
  //const dispatch = useDispatch();
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList/>}></Route>
        <Route path='add-user' element={<AddUser/>}></Route>
        <Route path='/update-user/:id' element={<UpdateUser/>}></Route>
      </Routes>
    </BrowserRouter>
      {/*<div>{num}</div>
      <div>
        <button onClick={() => dispatch(Incrementer(5))}>Incrementer</button>
        <button onClick={() => dispatch(Decrementer())}>Decrementer</button>
        <button onClick={() => dispatch(Reset())}>Reset</button>
      </div>*/}
    </>
  );  
}

export default App;
