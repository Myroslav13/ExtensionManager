import { useEffect, useState } from "react";

async function jsonFetch(file: string) {
    const response = await fetch(file);
    return await response.json();
}

interface ExtensionsProps {
  isLight: boolean;
}

function ExtensionList({ isLight }: ExtensionsProps) {
    const [data, setData] = useState<any[]>([]);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        jsonFetch("/data.json").then(data => setData(data));

        function handleResize() {
            setWindowSize(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
    }, 
    []);

    let classNameString = "card h-100 rounded-4 border text-white";
    let classNameToggle = "form-check-input";
    let classNameP = "";
    let classNameRemoveButton = "";

    if(isLight === true) {
        classNameString = "card h-100 rounded-4 border lightVersion";
        classNameToggle = "form-check-input lightVersion";
        classNameP = "lightVersion";
        classNameRemoveButton = "lightVersion";
    }

    return (
        <div className="container text-center mt-2">
            <div className="row">
                {data.map((el, index) => { 
                    let marginClass = "me-2";

                    if (((index + 1) % 3 === 0) && (window.innerWidth > 999)) marginClass = "";

                    if (((index + 1) % 2 === 0) && ((window.innerWidth > 768) && (window.innerWidth <= 999))) marginClass = "";

                    if (window.innerWidth < 768) marginClass = "";       
                    
                    return (
                    <div key={index} className={"col-md-6 col-lg-4 mb-3 p-0"}>
                        <div className={`${classNameString} ${marginClass}`}>
                            <div className="d-flex align-items-start p-3">
                                <img src={el.logo} className="card-img-top w-25" alt="logo" />
                                <div className="card-body text-start pt-0">
                                    <h5 className="card-title">{el.name}</h5>
                                    <p className={classNameP}>{el.description}</p>
                                </div>
                            </div>
                            <div className="card-footer bg-transparent border-0 mt-auto d-flex align-items-center justify-content-between pb-3">   
                                <button type="button" className={classNameRemoveButton}>Remove</button>

                                <div className="form-check form-switch">
                                    <input className={classNameToggle} type="checkbox" id="flexSwitchCheckDefault"/>
                                </div>
                            </div>
                        </div>
                    </div>
                );
                })}
            </div>
        </div>
    );
}

export default ExtensionList;