export function DataBindingComponent2() {

    //creating simple Array
    var categories = ["All", "Electronics", "Footwear", "Fashion"];

    return (
        <div className="container-fluid">
            <h2>Product Details</h2>
            <ol>
                {
                    categories.map(category =>
                        <li key={category}>{category}</li>
                    )
                }
            </ol>
            <select>
                {
                    categories.map(category =>
                        <option key={category}>{category}</option>
                    )
                }
            </select>

            {/* Every category I wanted in a check box */}
            <ul className="list-unstyled">
                {
                    categories.map(category =>
                        <li key={category}><input type="checkbox" />{category}</li>
                    )
                }
            </ul>

            {/* Every category I wanted show as button */}
            <div >
                {
                    categories.map(category =>
                        <div key={category}>
                            <button class="btn btn-primary"> {category} </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}