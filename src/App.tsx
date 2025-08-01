import ExtensionList from "./components/ExtensionList";
import Extensions from "./components/Extensions";
import { useState } from "react";

function App() {
  const [lightState, setLightState] = useState(false);

  function handleClick() {
      if(lightState === false) {
          setLightState(true);
      } else {
          setLightState(false);
      }
  }

  return (
    <>
     <nav className="mt-1 w-100 navbar navbar-expand-lg rounded-3">
          <div className="container-fluid">
              <a className="navbar-brand" href="#">
                  <img src="assets/images/logo.svg" alt="logo" width="200"/>
              </a>
              {lightState === true ?
                  <button type="button" className="myBtn myBtnSun" onClick={handleClick}><i className="bi bi-sun"></i></button>:
                  <button type="button" className="myBtn myBtnSun" onClick={handleClick}><i className="bi bi-moon"></i></button>
              }
              
          </div>
      </nav>
      <Extensions isLight={lightState}></Extensions>
      <ExtensionList isLight={lightState}></ExtensionList>
    </>
  );
}

export default App;