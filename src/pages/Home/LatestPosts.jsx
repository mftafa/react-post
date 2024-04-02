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
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 border-t border-gray-200 pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {
                    data.slice(0,3).map((post) => {
                        return <SinglePost key={post.id} post={post} />
                    })
                }
            </div>
        </>
    )
}