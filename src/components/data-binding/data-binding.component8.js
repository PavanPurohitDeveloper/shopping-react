import { useState } from "react"

export function DataBindingComponent8() {

    //2 way Binding example
    const [userName, setUserName] = useState("")

    //e this can access the value entered in text box..
    function HandleUserName(e) {
        //alert("hi");
        //console.log(e.target.value);
        setUserName(e.target.value);
    }

    return (
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User Name</dt>
                <dd>
                    {/* <input type="text" onKeyUp={HandleUserName} value={userName} /> */}
                    <input type="text" onKeyUp={HandleUserName} />
                </dd>
            </dl>
            <p>
                Hello ! {userName}
            </p>
        </div>
    )
}