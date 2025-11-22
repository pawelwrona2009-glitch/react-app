import LikeCounter from "../components/LikeCounter/LikeCounter";


function Posts() {

    return (
        <>
            <h1>LATEST POSTS</h1>
            <article>
                <div className='posts'>
                    <LikeCounter title="Pierwszy post" description="Opis naszego artykułu" count="5" color="red"></LikeCounter>
                    <LikeCounter title="2 post" description="Opis naszego artykułu" count="16" color="green"></LikeCounter>
                    <LikeCounter title="3 post" description="Opis naszego artykułu" count="3" color="brown"></LikeCounter>
                    <LikeCounter></LikeCounter>
                </div>
            </article>
        </>
    );
}

export default Posts;
