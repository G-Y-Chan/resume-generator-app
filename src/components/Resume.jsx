function Resume(props) {
    return (
        <div
            style={{
                backgroundColor:"white",
                width:"40vw",
                height:"100vh"
            }}
        >
            <h1
                style={{
                    margin:0
                }}
            >{props.data.name}</h1>
            <span>{props.data.phone}|{props.data.email}|{props.data.location}</span>
            <hr 
                style={{width:"36vw"}}
            ></hr>
        </div>
    )
}

export default Resume;