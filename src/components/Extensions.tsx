import { useEffect, useState } from "react";

interface ExtensionsProps {
  isLight: boolean;
  filter: "all" | "active" | "inactive";
  setFilter: (filter: "all" | "active" | "inactive") => void;
}

function Extensions({ isLight, filter, setFilter }: ExtensionsProps) {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    
    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
    }, []);

    // Default class values
    let classNameButtonActive = "myBtn myBtnRow active";
    let classNameButton = "myBtn myBtnRow";
    let classNameH1 = "text-white fs-2";
    let classNameDiv = "d-flex justify-content-between mt-5 mb-4";

    if(isLight === true) {
        classNameButtonActive = "myBtn myBtnRow active lightVersion";
        classNameButton = "myBtn myBtnRow lightVersion";    
        classNameH1 = "fs-2 lightVersion";
    }

    if(windowSize < 768) {
        classNameDiv = "d-flex justify-content-center align-items-center flex-column my-4";
    }

    // Filter click handle
    function handleClick(newState:"all" | "active" | "inactive") {
        setFilter(newState);
    }

    return (
        <div className={classNameDiv}>
            <h1 className={classNameH1}>Extensions List</h1>
            <div className="d-flex gap-3">
                <button type="button" className={filter === "all" ? classNameButtonActive:classNameButton} onClick={() => handleClick("all")}>All</button>
                <button type="button" className={filter === "active" ? classNameButtonActive:classNameButton} onClick={() => handleClick("active")}>Active</button>
                <button type="button" className={filter === "inactive" ? classNameButtonActive:classNameButton} onClick={() => handleClick("inactive")}>Inactive</button>
            </div>
        </div>
    );
}

export default Extensions;