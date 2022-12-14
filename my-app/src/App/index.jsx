import { Grid } from '../Grid';

import './App.css';

const App = () => 
{
  return (
    <div className="mainContainer">

      <header>

        <div className="mainTitle">
          <img src={require("./PkmGo-Logo.png")} alt="mainLogo" />
        </div>

        <div className="regionTitle">
          Kanto #001 - #151
        </div>
        
      </header>

      <main>
        <Grid/>
      </main>

    </div>
  );
}

export default App;
