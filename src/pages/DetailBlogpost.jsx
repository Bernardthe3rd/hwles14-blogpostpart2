import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {dateFormat} from "../helpers/dateFormat.js";

const DetailBlogpost = () => {
    const { id} = useParams();
    const [post, setPost] = useState([])
    const [error, setError] = useState(false)
    async function fetchDetailPost () {
        try {
            const response = await axios.get(`http://localhost:3000/posts/${id}`)
            setPost(response.data)
        } catch (e) {
            console.error(e.message)
            setError(true)
        }
    }

    useEffect(() => {
        void fetchDetailPost()
    },[])

    // const newId = posts.find(post => {
    //     return post.id.toString() === id;
    // })
    // console.log(newId)


    return (
        <>
            {/*<p>{id}</p>*/}
            {/*=== true achter error mocht weg, omdat dit vanzelfsprekend een boolean waarde genereerd.*/}
            {error
                ?
                <div>
                    <p>Er is iets misgegaan met het ophalen van de data, kom later terug</p>
                    <Link to={"/posts"} className={"link-title"}>Terug naar de overzichtpagina</Link>
                </div>
                :
            <article className={""}>
                <h1>{post.title}</h1>
                <h2>{post.subtitle}</h2>
                <p>Geschreven door {post.author} op {dateFormat(post.created)}</p>
                <p>{post.content}</p>
                <p>{post.comments} reactie - {post.shares} keer gedeeld</p>
                <Link to={"/posts"} className={"link-title"}>Terug naar de overzichtpagina</Link>
            </article>
            }
        </>
    );
};

export default DetailBlogpost;