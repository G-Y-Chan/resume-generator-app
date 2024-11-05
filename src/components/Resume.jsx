function Resume(props) {
    return (
        <div
            style={{
                backgroundColor:"white",
                width:"40vw",
                height:"100vh"
            }}
        >
            <h1>{props.data.name}</h1>
            <span>{props.data.phone}|{props.data.email}|{props.data.location}</span>
        </div>
    )
}

export default Resume;