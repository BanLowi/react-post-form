import { useState } from "react"

function App() {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: ""
  });


  return (
    <>

      <header><h1>FORM POST</h1></header>

      <main>

        <div className="container">

          <form>

            <div class="mb-3">
              <input
                type="text"
                className="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="First Name"
              />
            </div>

            <div class="mb-3">
              <input
                type="text"
                className="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Last Name"
              />
            </div>



          </form>

        </div>


      </main>

    </>
  )
}

export default App
