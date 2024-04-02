export default function PostImage({post}) {
    return (
        <>
            <img src={post?.image} alt="Post" className="w-full rounded-xl"/>
        </>
    );
}
