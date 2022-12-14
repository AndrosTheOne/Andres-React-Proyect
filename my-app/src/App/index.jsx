import { Grid } from '../Grid';

import './App.css';

const App = () => 
{
  return (
    <div className="mainContainer">

      <header className="mainTitle">
        <img src={require("./PkmGo-Logo.png")} alt="mainLogo" />
      </header>

      <main>
        <Grid/>
      </main>

    </div>
  );
}

export default App;
