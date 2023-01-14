import Post from '../Post';

function Article() {
    //fazer uma requisição para uma API



    return(
        <section className='container'>
            <h2>Artigos</h2>
            <div className='mt-5 container-posts'>
            <Post subtitle="tecnologia" title="O guia definitivo sobre o blog">
            123Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, non! Ratione perspiciatis dolore quidem autem! Provident officia vitae laboriosam tempora alias commodi sunt cum quas, ex nobis sed earum atque.
            </Post>
            <Post subtitle="fotografia" title="Quais as melhores cameras de 2023"  >
            222Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, non! Ratione perspiciatis dolore quidem autem! Provident officia vitae laboriosam tempora alias commodi sunt cum quas, ex nobis sed earum atque.
            </Post>
            <Post subtitle="cinema" title="Os 10 filmes com maior orçamento do ano de 2023">
            444Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, non! Ratione perspiciatis dolore quidem autem! Provident officia vitae laboriosam tempora alias commodi sunt cum quas, ex nobis sed earum atque.
            </Post>

            </div>
        
        </section>

    );
}

export default Article;