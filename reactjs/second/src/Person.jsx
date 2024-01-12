function Person(props) {
    return (
        <div className="person-box">
            <h2>Name: {props.name}</h2>
            <h2>Gender: {props.gender}</h2>
            <h2>Age: {props.age}</h2>
        </div>
    )
}
export default Person;