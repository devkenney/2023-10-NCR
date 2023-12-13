import { useState } from 'react';

export default function Form (props) {
  const [form, setForm] = useState({
    name: "",
    age: 0
  })

  const handleChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    console.log(form)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={form.name}
        onChange={handleChange}
        name="name"
        placeholder="write name here!"
      />
      <input
        type="number"
        value={form.age}
        onChange={handleChange}
        name="age"
        placeholder="write age here!"
      />
      <input type="submit" value="Submit Form" />
    </form>
  )
}