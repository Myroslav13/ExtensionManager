import { useEffect, useState } from "react";

interface ExtensionsProps {
  isLight: boolean;
}

function Extensions({ isLight }: ExtensionsProps) {
    let classNameButtonActive = "myBtn myBtnRow active";
    let classNameButton = "myBtn myBtnRow";
    let classNameH1 = "text-white fs-2";

    if(isLight === true) {
        classNameButtonActive = "myBtn myBtnRow active lightVersion";
        classNameButton = "myBtn myBtnRow lightVersion";    
        classNameH1 = "fs-2 lightVersion";
    }

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    
    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
    }, []);

    let classNameDiv = "d-flex justify-content-between mt-5 mb-4";

    if(windowSize < 768) {
        classNameDiv = "d-flex justify-content-center align-items-center flex-column my-4";
    }

    return (
        <div className={classNameDiv}>
            <h1 className={classNameH1}>Extensions List</h1>
            <div className="d-flex gap-3">
                <button type="button" className={classNameButtonActive}>All</button>
                <button type="button" className={classNameButton}>Active</button>
                <button type="button" className={classNameButton}>Inactive</button>
            </div>
        </div>
    );
}

export default Extensions;