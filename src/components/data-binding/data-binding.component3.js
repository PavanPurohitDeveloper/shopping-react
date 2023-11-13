export function DataBindingComponent3() {

    //creating Array of Objects
    var products = [
        { Name: "TV", Price: 45000.44, Stock: true },
        { Name: "Mobile", Price: 34000.33, Stock: false },
        { Name: "Nike Casuals", Price: 5200.44, Stock: true }
    ];

    return (
        <div className="container-fluid">
            <h2>Products Table</h2>

            {/* display in tabular format */}
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product.Name}>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                                <td>{(product.Stock == true) ? "Available" : "Out of Stock"}</td>
                                <td>
                                    <button class="btn btn-info"><span class="bi bi-eye-fill"></span></button>
                                    <button class="btn btn-warning ms-2"><span class="bi bi-eye-pen"></span></button>
                                    <button class="btn btn-danger ms-2"><span class="bi bi-eye-trash"></span></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}