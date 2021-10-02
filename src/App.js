import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
// let name = "Chaitra";
function App() {
  const[mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#333';
      showAlert(" Dark mode is enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode is enabled", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="textUtils" mode = {mode} toggleMode = {toggleMode}/>
      {/* <Navbar /> */}
      <Alert alert={alert}/>
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
              <About mode={mode}/>
          </Route>

          <Route exact path="/">
            <TextForm heading="Enter the text to analyse" mode={mode} />
          </Route>
        </Switch>
        {/* <TextForm heading="Enter the text to analyse" mode={mode} /> */}
        {/* <About /> */}
      </div>
    </Router>
      </>

  );
}

export default App;
