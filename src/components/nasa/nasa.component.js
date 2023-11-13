import { useEffect, useState } from "react";
import "./nasa.component.css";

export function NasaComponent() {

    const [mars, setMars] = useState([]); //default data type is considered as "any"
    const [photos, setPhotos] = useState([]);

    function LoadPhotos() {

        //alert("Hi");
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
            .then(function (response) {
                return response.json();
            }) //callback function
            .then(        //then collect the response data
                function (data) {
                    console.log("API data::" + data.photos);
                    setMars(data.photos);
                })
    }
    //It call the API and present the data, at the time of loading the page..
    //It loads the data once.  At the time of loading the component it should work.  
    //At the time of initialization
    useEffect(() => {
        LoadPhotos();
    }, []);  //[] -- dependencies for loading the data..

    function handleLoadClick() {

        setPhotos(mars);
    }

    //It has to get the data and store inside State.
    // function handleLoadDataClick() {

    //     fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    //         .then(response => response.json()) //callback function
    //         .then(data => {
    //             setMars(data);
    //         })
    // }

    return (

        <div className="container-fluid mt-3">
            {/* <h2>Mars Rover Photos <button onClick={handleLoadDataClick}>Load Data</button></h2> */}
            <h2>Mars Rover Photos <button>Load Data</button></h2>
            <div className="d-flex flex-wrap">
                {
                    mars.map(item =>

                        <div className="car m-2 p-2" id="card">

                            <img src={item.img_src} className="card-img-top" width="100" height="100" />

                            <div className="card-body">
                                <dl>
                                    <dt>Camera</dt>
                                    <dd>{item.camera_name}</dd>
                                    <dt>Rover</dt>
                                    <dd>{item.rover.name}</dd>
                                </dl>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
