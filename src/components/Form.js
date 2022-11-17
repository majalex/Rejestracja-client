import '../styles/Form.css';
import axios from 'axios';
import { useState } from 'react';

const Form = (props) => {
    const [name, setName] = useState("");
    const [lName, setLname] = useState("");
    const [event, setEvent] = useState("");
    const [city, setCity] = useState("");

    const addData = (e) => {
        e.preventDefault();

        if (!name || !lName || !event || !city) {
            return;
        }

        axios
            .post("http://localhost:8080/api/add", {
                name: name,
                lname: lName,
                event: event,
                city: city
            })
            .then((res) => {
                setName('');
                setLname('');
                setEvent('');
                setCity('');
                props.getData();
            })
            .catch((error) => {
                console.log(error);
            });
    
            
    };

    return (
        <div className="Form" onSubmit={addData}>
            <form>
                <label for="fname">Imię:</label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    id="fname"
                    name="fname">
                </input>
                <label for="lname">Nazwisko:</label>
                <input
                    onChange={(e) => setLname(e.target.value)}
                    value={lName}
                    type="text"
                    id="lname"
                    name="lname">
                </input>
                <label for="event">Wydarzenie:</label>
                <select
                    onChange={(e) => setEvent(e.target.value)}
                    value={event}
                    name="event"
                    id="event"
                    form="event">
                    <option>-</option>
                    <option value="Full Stack Developer">Kurs Full Stack Developer</option>
                    <option value="Front End Developer">Kurs Front End Developer</option>
                    <option value="Back End Developer">Kurs Back End Developer</option>
                </select>
                <label for="event">Miasto:</label>
                <select
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    name="city"
                    id="city"
                    form="city">
                    <option>-</option>
                    <option value="Online">Online</option>
                    <option value="Warszawa">Warszawa</option>
                    <option value="Kraków">Kraków</option>
                </select>
                <input className="btn" type="submit" value="Wyślij" />
            </form>
        </div>
    );
}

export default Form;
