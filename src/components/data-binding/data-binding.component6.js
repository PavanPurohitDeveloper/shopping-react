import { useState } from "react"

export function DataBindingComponent6() {

    // //One way Data Binding
    // var username = "John";

    // return (

    //     <div className="container-fluid">
    //         <h2>One Way Data Binding</h2>
    //         User Name : <input type="text" value={username} />
    //         <p>
    //             Hello ! {username}
    //         </p>
    //     </div>
    // )

    //It allows any kind of data.
    //    first property is getter, seocnd property is setter
    //const { userName, setUserName } = useState("John");
    const [userName, setUserName] = useState("John")
    return (

        <div className="container-fluid">
            <h2>One Way Data Binding</h2>
            User Name : <input type="text" value={userName} />
            <p>
                Hello ! {userName}
            </p>
        </div>
    )
}