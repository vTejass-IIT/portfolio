// import logo from './logo.svg';
import './App.scss';
import Snowflakes from './components/snowflakes/snowflakes';
// import Introduction from './components/introduction/introduction';
// import SpiderMan from './components/spiderman/spiderman';
import Contact from './components/contact/contact';
import Overview from './components/overview/overview';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';

function App() {
  return (
    <div>
      <header>
        
      </header>
      <main>
        {/* <Introduction/> */}
        <Snowflakes />
        {/* <SpiderMan></SpiderMan> */}
        <Overview />
        <Experience />
        <Projects/>
        <Contact/>
        
      </main>
    </div>
  );
}

export default App;
