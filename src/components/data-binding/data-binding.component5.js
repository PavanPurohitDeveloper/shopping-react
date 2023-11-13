export function DataBindingComponent5() {

    //creating Nested Objects/list - Array has Object
    var courses = [
        { Title: "ASP.NET", Poster: "./asp.jpeg", Topics: ["Web", "API", "MVC"] },
        { Title: "AWS", Poster: "./aws.jpeg", Topics: ["Cloud", "Services", "Database"] },
        { Title: "Digital Marketing", Poster: "./dm.jpeg", Topics: ["Cloud", "Services", "Database"] },
        { Title: "Data Science", Poster: "./ds.jpeg", Topics: ["Cloud", "Services", "Database"] }
    ];

    return (

        // data presentation Using Bootstrap Cards style
        <div className="container-fluid">
            {/* {
                courses.map(course =>
                    <img src={course.Poster} width="20%" height="100" />
                )
            } */}
            <h2>Courses</h2>
            <div className="d-flex flex-wrap">
                {
                    courses.map(course =>
                        <div className="card m-2 p-2 w-25">
                            <img src={course.Poster} className="card-img-top" height="150" />
                            <div className="card-header">
                                <h3>{course.Title}</h3>
                            </div>

                            <div className="card-body">
                                <ul>
                                    {
                                        course.Topics.map(topic =>
                                            <li>{topic}</li>
                                        )
                                    }
                                </ul>
                            </div>

                            <div className="card-footer">
                                <button className="btn btn-primary w-100">Join Course</button>
                            </div>
                        </div>

                    )
                }
            </div>
        </div >
    )
}