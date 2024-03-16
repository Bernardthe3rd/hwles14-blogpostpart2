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

    async function fetchPostSix () {
        try {
            const response = await axios.get("http://localhost:3000/posts/6")
            console.log(response)
        } catch (e) {
            console.error(e)
        }
    }

    async function addNewPost () {
        try {
            const response = await axios.post("http://localhost:3000/posts", {
                "title": "Wat gebruiker heeft ingevuld",
                "subtitle": "Wat gebruiker heeft ingevuld",
                "content": "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
                "author": "Voornaam achternaam",
                "created": "2023-09-21T09:30:00Z",
                "readTime": 1,
                "comments": 0,
                "shares": 0
            })
            console.log(`Je hebt zojuist een nieuwe post succesvol toegevoegd! ${response}`)
        } catch (e) {
            console.error(`Er is zojuist iets misgegaan bij het posten ${e.message}`)
        }
    }

    async function deletePost () {
        try {
            const response = await axios.delete("http://localhost:3000/posts/19")
            console.log(`Je post is succesvol verwijderd! ${response}`)
        } catch (e) {
            console.error(`De post die je wilt verwijderen is al verwijderd! ${e.message}`)
        }
    }

    async function changePost () {
        try {
            const response = await axios.put("http://localhost:3000/posts/1", {
                "title": "De smaken van IJsland",
                "subtitle": "Een culinaire reis door Bella Italia",
                "content": "Italië, het land van heerlijke pasta, pizza en gelato, is een culinair paradijs dat elke fijnproever moet ervaren. In deze blog nemen we je mee op een smakelijke reis door Bella Italia. Ontdek de geheimen achter de perfecte risotto, leer hoe je zelfgemaakte pasta maakt en proef de verrukkelijke regionale gerechten van Noord tot Zuid. Bereid je voor om je smaakpapillen te verwennen in de keuken van de laarsvormige natie.",
                "author": "Anna de Kok",
                "created": "2023-09-21T09:30:00Z",
                "readTime": 5,
                "comments": 12,
                "shares": 8
            })
            console.log(`Je hebt zojuist een post succesvol gewijzigd! ${response}`)
        } catch (e) {
            console.error(`Er is zojuist iets misgegaan bij het wijzigen ${e.message}`)
        }
    }

  return (
    <>
        <h1>Programmeer hier jouw applicatie</h1>
        <div className={"outer-container"}>
            <button type={"button"} onClick={fetchPosts}>Get all posts</button>
            <button type={"button"} onClick={fetchPostSix}>Get only post 6</button>
            <button type={"button"} onClick={addNewPost}>Add a new post</button>
            <button type={"button"} onClick={deletePost}>Delete post</button>
            <button type={"button"} onClick={changePost}>Change a post</button>
        </div>
    </>
  )
}

export default App
