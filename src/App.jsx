import { useState } from "react"
import axios from "axios";

const postURL = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

function App() {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: ""
  });

  function handleData(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value

    });
  }

  function handleSubmit(e) {
    e.preventDefault()

    axios.post(postURL, formData, {
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        console.log(response);

      })
  }


  return (
    <>

      <header><h1>FORM POST</h1></header>

      <main>

        <div className="container">

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="firstname"
                id=""
                aria-describedby="helpId"
                placeholder="First Name"
                onChange={handleData}
                value={formData.firstname}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="lastname"
                id=""
                aria-describedby="helpId"
                placeholder="Last Name"
                onChange={handleData}
                value={formData.lastname}
              />
            </div>

            <button type="submit">Invia</button>

          </form>

        </div>


      </main>

    </>
  )
}

export default App
