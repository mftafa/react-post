import {useEffect, useState} from "react";
import SinglePost from "../../components/Post/SinglePost.jsx";

export default function LatestPosts(){

    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://66063693d92166b2e3c36964.mockapi.io/api/react-posts/posts", {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
            });
    }, []);

    return(
        <>
            <div className="text-center my-12">
                <div className="relative mb-2">
                    <h2 className="text-gray-800 font-bold text-5xl z-0 uppercase">All Posts</h2>
                    <i className="absolute w-64 h-4 bg-blue-800 bg-opacity-50 transform -translate-x-1/2 top-8 -z-50"></i>
                </div>
                <p className="font-normal text-lg text-gray-400">You can view all our post</p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {
                    data.map((post) => {
                        return <SinglePost key={post.id} post={post} />
                    })
                }
            </div>
        </>
    )
}