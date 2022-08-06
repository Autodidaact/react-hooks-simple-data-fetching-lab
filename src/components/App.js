// create your App component 
import React, { useEffect, useState }from "react";

const App = () => {
    const [dogData, setDogData] = useState(null)

    useEffect(()=> {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => setDogData(data.message))
    }, [])
    
    //const listDogData = dogData.map(dog => <img src={dog.message} alt="A Random Dog"/>)
    if (!dogData) {
    return <p>Loading...</p> 
    }
    return (
        <img src={dogData} alt="A Random Dog"/>
    ) 
}
export default App;

