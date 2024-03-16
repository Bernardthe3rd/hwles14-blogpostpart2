
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

const Overview = () => {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(false)
    async function fetchPosts () {
        try {
            const response = await axios.get("http://localhost:3000/posts")
            setPosts(response.data)
        } catch (e) {
            console.error(e.message)
            setError(true)
        }
    }

    useEffect(() => {
        void fetchPosts()
    },[])


    return (
        <>
            <h1>Bekijk alle posts op het platform!</h1>

            <ul>
                {error === true ? <p>Er is helaas iets misgegaan, refresh de pagina of contact de admin!</p> :
                    posts.map(post => {
                    return <li key={post.id} className={"inner-container"}>
                        <Link to={`/posts/${post.id}`} className={"default-nav-link link-title"}>{post.title}</Link>
                        <p>({post.author})</p>
                        <p>{post.comments} reactie - {post.shares} keer gedeeld</p>
                    </li>
                })}
            </ul>
        </>
    );
};

export default Overview;