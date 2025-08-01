import ExtensionList from "./components/ExtensionList";
import Extensions from "./components/Extensions";
import { useState } from "react";

function App() {
  const [lightState, setLightState] = useState(false);
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");

  // Light state changing
  function handleClick() {
      if(lightState === false) {
          setLightState(true);
      } else {
          setLightState(false);
      }
  }

  // Default class values
  let classNameString = "w-100 navbar navbar-expand-lg rounded-4";
  let classNameDivMain = "mainDiv";

  if(lightState === true) {
    classNameString = "w-100 navbar navbar-expand-lg rounded-4 border lightVersion";
    classNameDivMain = "mainDiv lightVersion";
  }

  return (
    <div className={classNameDivMain}>
     <nav className={classNameString}>
          <div className="container-fluid">
              <a className="navbar-brand" href="#">
                  <img src={lightState === true ? "assets/images/logo.svg":"assets/images/logo-white.png"} alt="logo" width="200"/>
              </a>
              {lightState === true ?
                  <button type="button" className="myBtn myBtnSun lightVersion" onClick={handleClick}><i className="bi bi-moon"></i></button>:
                  <button type="button" className="myBtn myBtnSun" onClick={handleClick}><i className="bi bi-sun"></i></button>
              }
              
          </div>
      </nav>

      <Extensions isLight={lightState} filter={filter} setFilter={setFilter}></Extensions>
      <ExtensionList isLight={lightState} filter={filter}></ExtensionList>
    </div>
  );
}

export default App;