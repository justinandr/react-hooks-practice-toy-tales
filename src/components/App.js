import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(data => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy) {
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newToy)
    })
    .then(res => res.json())
    .then(() => setToys([...toys, newToy]))
  }

  function handleDonate(deletedToy) {
    const updatedToys = toys.filter(toy => toy.id !== deletedToy.id)

    setToys(updatedToys)
  }

  function handleUpdateToy(updatedToy){
    const updatedToys = toys.map(toy => 
      toy.id === updatedToy.id ? updatedToy : toy
    )

    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDonate={handleDonate} onUpdateToy={handleUpdateToy} />
    </>
  );
}

export default App;
