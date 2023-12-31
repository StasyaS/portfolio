import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { PageForMe } from './Components/pageForMe/PageForMe';
import './styles/helper.scss';
import { Header } from './Components/Header/Header';
import Contact from './Components/Contact/Contact';
import Hobby from './Components/Hobby/Hobby';
// import { BigTest } from './Components/Test/BigTest';
// import CodePenEmbed from './EditCode/CodePenEmbed';
//import { Test } from './Components/Test';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>  
        <Route path='/' element={<PageForMe/>} />
        <Route path='/hobby' element={<Hobby/>} />
      </Routes>
      <Contact/>


      {/* <BigTest/> */}
      {/* <Test/> */}
    </div>
  );
}

export default App;



