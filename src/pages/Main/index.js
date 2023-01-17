import api from '../../services/api';
import Post from '../../components/Post';
import { useEffect, useState } from 'react';


function Main() {

    const [post, setPost ] = useState([]);

    useEffect(() => {
        api.get('/posts')
        .then((response) => {
            console.log(response);
            setPost(response.data);
            
        })
    }, [])

    return(
        <>
        <section className='container'>
            <h2 className='mt-2'>Novidades do Blog:</h2>


        <div className='mt-5 container-posts'>
            {
                post.map((post) => {
                    return(
                    <>
                        <Post
                        key={post.id}
                        subtitle={post.category}
                        image={post.image}
                        title={post.title}
                        author={post.author}
                        date={post.date}
                        resume={post.resume}>

                        </Post>
                    </>
                    )
                })
            }
        </div>

        </section>

        </>
        
    );
}

export default Main;