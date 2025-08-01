interface ExtensionsProps {
  isLight: boolean;
}

function Extensions({ isLight }: ExtensionsProps) {
    return (
        <div className="d-flex justify-content-between mt-5 mb-4">
        {
            isLight === true ?
            <>
                <h1 className="text-white fs-2">Extensions List</h1>
                <div className="d-flex gap-3">
                    <button type="button" className="myBtn myBtnRow active">All</button>
                    <button type="button" className="myBtn myBtnRow">Active</button>
                    <button type="button" className="myBtn myBtnRow">Inactive</button>
                </div>
            </>
            :
            <>
                <h1 className="fs-2" style={{color: "#2f354b"}}>Extensions List</h1>
                <div className="d-flex gap-3">
                    <button type="button" className="myBtn myBtnRow active">All</button>
                    <button type="button" className="myBtn myBtnRow">Active</button>
                    <button type="button" className="myBtn myBtnRow">Inactive</button>
                </div>
            </>
        }
        </div>
    );
}

export default Extensions;