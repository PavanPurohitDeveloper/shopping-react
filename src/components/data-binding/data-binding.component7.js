import { useState } from "react"

export function DataBindingComponent7() {

    const [categories] = useState(["Electronics", "Footwear"])

    return (

        <div className="container-fluid">
            <ol>
                {
                    categories.map(category =>
                        <li key={category}>{category}</li>
                    )
                }
            </ol>
        </div>
    )
}