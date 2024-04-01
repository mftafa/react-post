import {useEffect, useState} from "react";
import SingleContact from "./SingleCountact.jsx";

export default function ContactList(){

    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://66063693d92166b2e3c36964.mockapi.io/api/react-posts/contact", {
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
                    <h2 className="text-gray-800 font-bold text-5xl z-0 uppercase">All Contacts</h2>
                    <i className="absolute w-64 h-4 bg-blue-800 bg-opacity-50 transform -translate-x-1/2 top-8 -z-50"></i>
                </div>
                <p className="font-normal text-lg text-gray-400">You can view all our contacts</p>
            </div>
            <div
                className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 border-t border-gray-200 pt-10 lg:max-w-none">
                {
                    data.map((contact) => {
                        return <SingleContact key={contact.id} contact={contact}/>
                    })
                }
            </div>
        </>
    )
}