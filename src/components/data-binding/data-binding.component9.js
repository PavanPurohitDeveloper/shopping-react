import { useState } from "react"

export function DataBindingComponent9() {

    //2 way Binding example
    const [Name, setName] = useState("");
    const [Price, setPrice] = useState(0);
    const [City, setCity] = useState("");
    const [Stock, setStock] = useState(false);

    //e this can access the value entered in text box..
    function NameChange(e) {
        setName(e.target.value);
    }

    function PriceChange(e) {
        setPrice(e.target.value);
    }

    function CityChange(e) {
        setCity(e.target.value);
    }

    function StockChange(e) {
        setStock(e.target.checked);
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h2> Register User </h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input onChange={NameChange} type="text" /></dd>

                        <dt>Price</dt>
                        <dd><input onChange={PriceChange} type="number" /></dd>

                        <dt>City</dt>
                        <dd>
                            <select onChange={CityChange}>
                                <option>Delhi</option>
                                <option>Hyderabad</option>
                            </select>
                        </dd>

                        <dt>Stock</dt>
                        <dd className="form-switch">

                            <input onChange={StockChange} type="checkbox" className="form-check-input" />Available
                        </dd>
                    </dl>
                </div>

                <div className="col-9">
                    <h2> Details </h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{Name}</dd>

                        <dt>Price</dt>
                        <dd>{Price}</dd>

                        <dt>City</dt>
                        <dd>{City}</dd>

                        <dt>Stock</dt>
                        <dd>{(Stock == true) ? "Avilable" : "Out of Stock"}</dd>
                    </dl>
                </div>
            </div>
        </div >
    )
}