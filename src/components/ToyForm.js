import React, { useState } from "react";

function ToyForm({ onAddToy }) {

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    likes: 0
  })

  function handleChange(e){
    const name = e.target.name
    const value = e.target.value

    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    onAddToy(formData)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          value={formData.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
