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

    useEffect(() => {
        jsonFetch("/data.json").then(data => setData(data));
    }, []);

    return (
        <div className="container text-center mt-2">
            <div className="row">
                {data.map((el, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mb-3 px-2">
                        <div className="card h-100 rounded-4 border text-white">
                            <div className="d-flex align-items-start p-3">
                                <img src={el.logo} className="card-img-top w-25" alt="logo" />
                                <div className="card-body text-start pt-0">
                                    <h5 className="card-title">{el.name}</h5>
                                    <p>{el.description}</p>
                                </div>
                            </div>
                            <div className="card-footer bg-transparent border-0 mt-auto d-flex align-items-center justify-content-between pb-3">   
                                <button type="button" className="">Remove</button>

                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default ExtensionList;