export function DataBindingComponent4() {

    //creating Nested Objects/list - Array has Object
    var menu = [
        { Category: "Electronics", Products: ["TV", "Mobile"] },
        { Category: "Footwear", Products: ["Nike Casuals", "Lee Boot"] }
    ];

    return (
        <div className="container-fluid">
            {/* Expandable list details and summary*/}
            <h2>Select Category</h2>
            {
                menu.map(item =>
                    <details key={item.category}>
                        <summary>{item.Category}</summary>
                        <ul>
                            {item.Products.map(product =>
                                <li key={product}>{product}</li>
                            )}
                        </ul>
                    </details>

                )
            }
            <h2>Shopping Menu</h2>
            <ol>
                {
                    menu.map(item =>
                        <li key={item.Category}>
                            {item.Category}
                            <ul>
                                {
                                    item.Products.map(product =>
                                        <li key={product}>
                                            {product}
                                        </li>
                                    )
                                }
                            </ul>
                        </li>
                    )
                }
            </ol>
            <h2>Select Product</h2>
            <select>
                {
                    menu.map(item =>
                        <optgroup label={item.Category} key={item.Category}>
                            {
                                item.Products.map(product =>
                                    <option key={product}>{product}</option>
                                )
                            }
                        </optgroup>

                    )
                }

            </select>
        </div>
    )
}