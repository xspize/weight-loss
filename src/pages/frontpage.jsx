import logo from '../assets/weight-loss.gif';
import Progress from '../progress';
import '../App.css';
import TypeWriterEffect from "react-typewriter-effect";
import { Outlet, Link } from "react-router-dom";

function frontpage() {
  return (
    <div className="frontpage">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TypeWriterEffect
                      multiTextLoop
                      cursorColor=" #f33b12"
                      multiText={[
                        "Personal Weight Loss Tracker",
                      ]}
                      multiTextDelay={0}
                      typeSpeed={0}
                    />
          <strong></strong>
          <p> 👻 Goal Weight: 80.7kg 👻</p>
          <Progress />
      </header>
      
    </div>
    
  );
}

export default frontpage;
