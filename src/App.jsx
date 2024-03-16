import './App.css'
import axios from "axios";

function App() {

    async function fetchPosts () {
        try {
            const response = await axios.get("http://localhost:3000/posts")
            console.log(response)
        } catch (e) {
            console.error(e)
        }
    }

  return (
    <>
        <h1>Programmeer hier jouw applicatie</h1>
        <button type={"button"} onClick={fetchPosts}>Get all posts</button>
    </>
  )
}

export default App
