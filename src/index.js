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

function SimpleForm() {
  const [formValues, setFormValues] = useState({
    petName: '', 
    petType: '',
  });
  const [pets, setPets] = useState(petsList);

  const change = event => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  }

  const submit = event => {
    event.preventDefault();
    const newPet = {
      petName: formValues.petName,
      petType: formValues.petType,
    };
    setFormValues({
      petName: '',
      petType: '',
    });
    
    setPets(pets.concat(newPet));
  }

  return (
    <div className='container'>
      <h1>Simple Form App!</h1>
      {pets.map((pet, index) => (
        <div key={index}>
          {pet.petName} is a {pet.petType}
        </div>
      ))}
      <form onSubmit={submit}>
        <input
          type='text'
          name='petName'
          value={formValues.petName}
          onChange={change}
        />
        <input
          type='text'
          name='petType'
          value={formValues.petType}
          onChange={change}
        />
        <input type='submit' value='CREATE YOUR PET' />
      </form>
    </div>
  )
}

render(
  <>
    <SimpleForm />
    <App />
  </>
  , document.querySelector('#root')
)
