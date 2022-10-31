


const PersonCard = (props) => {
    const {firstName, lastName} = props;
    return (
        <div className="App">
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <p>Gender: {props.gender}</p>
        </div>
    )
}

export default PersonCard;