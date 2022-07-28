
// import './App.css';
import About from './Components/About';
import Banner from './Components/Banner';
import Career from './Components/Career';
import CaseStudies from './Components/CaseStudies';
import Footer from './Components/Footer';
import MySkill from './Components/MySkill';
import Nav from './Components/Nav';
import Process from './Components/Process';
import RecentProject from './Components/RecentProject';
import WhatNext from './Components/WhatNext';


function App() {
  return (
    <div className="App dark:bg-black dark:text-white ">
       <Nav/>
       <Banner/>
       <MySkill/>
      <Process/>
      <RecentProject/>
      <Career/>
      <About/>
      <CaseStudies/>
      <WhatNext/>
      <Footer/>
    </div>
  );
}

export default App;
