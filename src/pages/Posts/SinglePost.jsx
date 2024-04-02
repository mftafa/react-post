import PostAuthor from "./PostAuthor.jsx";
import PostTitle from "./PostTitle.jsx";
import PostBody from "./PostBody.jsx";
import PostImage from "./PostImage.jsx";

export default function SinglePost({post}){
    return(
        <>
            <article className="flex max-w-xl flex-col p-5 items-start justify-between rounded-xl bg-gray-50 hover:bg-gray-100">
                <PostImage post={post} />
                <div className="group relative">
                    <PostTitle post={post} />
                    <PostBody post={post} />
                </div>
                <PostAuthor post={post} />
            </article>
        </>
    )
}