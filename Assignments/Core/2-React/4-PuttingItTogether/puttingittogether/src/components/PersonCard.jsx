import {useState} from 'react';

const PersonCard = (props) => {
    const {firstName, lastName, age} = props;
    const [defaultAge, birthday] = useState(age);
    return (
        <div className="App">
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {defaultAge}</p>
            <p>Hair Color: {props.hairColor}</p>
            <p>Gender: {props.gender}</p>
            <button class="btn btn-outline-success btn-sm" onClick={()=>birthday(defaultAge+1)}>Birthday Button</button>
        </div>
    )
}

export default PersonCard;