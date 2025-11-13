import { useState } from "react"

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


  return (
    <>

      <header><h1>FORM POST</h1></header>

      <main>

        <div className="container">

          <form>

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



          </form>

        </div>


      </main>

    </>
  )
}

export default App
