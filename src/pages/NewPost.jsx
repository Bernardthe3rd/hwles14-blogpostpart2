import {useEffect, useState} from "react";
import {readTime} from "../helpers/readTime.js";
// import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";

const NewPost = () => {
    const d = new Date()
    // const navigate = useNavigate();
    const [navigatePost, setNavigatePost] = useState(false)

    const [formState, setFormState] = useState({
        title:"",
        subtitle:"",
        fullname:"",
        post:""
    })

    function handleFormChange (f) {
        const changedTitle = f.target.name
        const changedSubtitle = f.target.name
        const changedFullname = f.target.name
        const changedPost = f.target.name

        setFormState({
            ...formState,
            [changedTitle]: f.target.value,
            [changedSubtitle]: f.target.value,
            [changedFullname]: f.target.value,
            [changedPost]: f.target.value
        })
    }


    async function handleSubmit (e) {
        e.preventDefault();
        const validationErrors = validateForm(formState);
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await axios.post("http://localhost:3000/posts", {
                    "title": `${formState.title}`,
                    "subtitle": `${formState.subtitle}`,
                    "content": `${formState.post}`,
                    "author": `${formState.fullname}`,
                    "created": `${d.toISOString()}`,
                    "readTime": `${Math.round(readTime(formState.post))} minuten`,
                    "comments": 0,
                    "shares": 0
                })
                console.log(`Je hebt zojuist een nieuwe post succesvol toegevoegd! ${response.data}`)
            } catch (e) {
                console.error(`Er is zojuist iets misgegaan bij het posten ${e.message}`)
            }
            setNavigatePost(true);
        } else {
            setErrors(validationErrors);
        }
    }

    const [errors, setErrors] = useState({});

    const validateForm = (data) => {
        let errors = {};
        if (!data.title.trim()) {
            errors.title = "Er moet een titel ingevuld zijn"
        }
        if (!data.subtitle.trim()) {
            errors.subtitle = "Er moet een subtitle ingevuld worden"
        }
        if (!data.fullname.trim()) {
            errors.fullname = "Er moet een naam ingevuld worden"
        }
        if (!data.post.trim()) {
            errors.post = "Er moet een verhaaltje geschreven worden"
        } else if (data.post.length < 300 || data.post.length > 2000) {
            errors.post = "De post moet minimaal 300 karakters bevatten en maximaal 2000"
            console.log(data.post.length)
        }
        return errors;
    };

    const [postId, setPostId] = useState([])
    async function fetchPostsId () {
        try {
            const response = await axios.get("http://localhost:3000/posts")
            setPostId(response.data)
        } catch (e) {
            console.error(e.message)
        }
    }

    useEffect(() => {
        void fetchPostsId()
    },[handleSubmit])

    let findId = postId.map((posten) => {
        return posten.id
    })

    let lastId = findId.slice(-1)

    return (
        <>
            <h1>Post toevoegen</h1>
            {navigatePost === true ?
                <div>
                    <p>De blogpost is succesvol toegevoegd. Je kunt deze
                    <Link to={`/posts/${lastId}`}> hier </Link>
                    bekijken.</p>
                </div>
                :
                <form onSubmit={handleSubmit} className={"form-container"}>
                <label htmlFor="input-title">
                    Titel
                    <input type="text" id={"input-title"} name={"title"} value={formState.title} onChange={handleFormChange}/>
                    {errors.title && <p>{errors.title}</p>}
                </label>
                <label htmlFor="input-subtitle">
                    Subtitle
                    <input type="text" id={"input-subtitle"} name={"subtitle"} value={formState.subtitle} onChange={handleFormChange}/>
                    {errors.subtitle && <p>{errors.subtitle}</p>}
                </label>
                <label htmlFor="input-fullname">
                    Naam en achternaam
                    <input type="text" id={"input-fullname"} name={"fullname"} value={formState.fullname} onChange={handleFormChange}/>
                    {errors.fullname && <p>{errors.fullname}</p>}
                </label>
                <label htmlFor="input-post">
                    Blogpost
                    <textarea name="post" id="input-post" cols="30" rows="10" value={formState.post} onChange={handleFormChange}/>
                    {errors.post && <p>{errors.post}</p>}
                </label>
                <button type={"submit"}>Toevoegen</button>
            </form>}
        </>
    );
};

export default NewPost;