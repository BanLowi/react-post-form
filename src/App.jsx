import { useState } from "react"
import axios from "axios";

const postURL = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

function App() {

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    body: "",
    public: false
  });
  console.log(formData.public);


  function handleData(e) {
    // controllo se il target è una checkbox
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setFormData({
      ...formData,
      [e.target.name]: value

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
                name="title"
                id="formTitleInput"
                aria-describedby="helpId"
                placeholder="Title"
                onChange={handleData}
                value={formData.title}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="author"
                id="formAuthorInput"
                aria-describedby="helpId"
                placeholder="Author"
                onChange={handleData}
                value={formData.author}
              />
            </div>

            {/*             <label>Write here:
              <textarea
                value={formData.body}
                onChange={handleData}
              />
            </label> */}

            <div className="mb-3">
              <label htmlFor="formTextArea" className="form-label">Write Here:</label>
              <textarea className="form-control" name="body" id="formTextArea" rows="3" value={formData.body} onChange={handleData}></textarea>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" value={formData.public} onChange={handleData} id="formCheckbox" />
              <label className="form-check-label" htmlFor="formCheckbox"> Public </label>
            </div>

            <button type="submit">Invia</button>

          </form>

        </div>


      </main>

    </>
  )
}

export default App
