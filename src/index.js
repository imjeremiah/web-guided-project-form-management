import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

const initialFormValues = { petName: "", petType: "" };

function SimpleForm() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [pets, setPets] = useState(petsList);

  const change = (evt) => {
    const { value, name } = evt.target;
    /**
     * const value = evt.target.value
     * const name = evt.target.name
     */
    setFormValues({ ...formValues, [name]: value });
    /**
     * formValues = {
     *  petName: "",
     *  petType: "",
     * }
     */
  }

  const submit = (evt) => {
    evt.preventDefault();
    const newPet = {
      petName: formValues.petName.trim(),
      petType: formValues.petType.trim()
    }
    setPets(pets.concat(newPet));
    setFormValues(initialFormValues);
  }

  return (
    <div>
      <h1>Simple Form App</h1>
      {pets.map((pet, idx) => (
        <div key={idx}>
          {pet.petName} is a {pet.petType}
        </div>
      ))}
      <form onSubmit={submit}>
        <input 
          value={formValues.petName}
          onChange={change}
          name="petName"
          type="text"
        />
        <input 
          value={formValues.petType}
          onChange={change}
          name="petType"
          type="text"
        />
        <button>submit</button>
      </form>
    </div>
  )
}

render(
  <>
    <SimpleForm />
    {/* <App /> */}
  </>
  , document.querySelector('#root')
)
