import {useState} from "react";
import useHandleCreateForm from "../hooks/useHandleCreateForm.js";
import Allert from "../components/shared/Allert.jsx";

export default function Contact() {

    const nameInputProps = useHandleCreateForm("");
    const emailInputProps = useHandleCreateForm("");
    const messageInputProps = useHandleCreateForm("");

    const [allertMessageBox, setAllertMessageBox] = useState(false);

    const formSubmitHandler = async (event) => {

        event.preventDefault();

        let data = {
            title: nameInputProps?.value,
            image: emailInputProps?.value,
            category: messageInputProps?.value
        };

        try {
            let res = await fetch(
                "https://66063693d92166b2e3c36964.mockapi.io/api/react-posts/contact",
                {
                    method: "post",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            res = await res.json();

            nameInputProps?.resetValue()
            emailInputProps?.resetValue()
            messageInputProps?.resetValue()

            setAllertMessageBox(true)

            setTimeout(() => {
                setAllertMessageBox(false)
            }, 5000);

            console.log(res);

        } catch (error) {
            // TODO Handle error
            console.log(error);
        }
    }

    return (
        <>
            <div className="text-center my-12">
                <div className="relative mb-2">
                    <h2 className="text-gray-800 font-bold text-5xl z-0 uppercase">Contact Us</h2>
                    <i className="absolute w-64 h-4 bg-blue-800 bg-opacity-50 transform -translate-x-1/2 top-8 -z-50"></i>
                </div>
                <p className="font-normal text-lg text-gray-400">keep contact with us</p>
            </div>
            <form onSubmit={formSubmitHandler} className="w-1/2 mx-auto">
                {allertMessageBox &&
                    <Allert message="Created successfully." allertCloseHandler={() => setAllertMessageBox(false)}/>}
                <div className="mb-3">
                    <label htmlFor="name" className="block mb-2 text-sm text-gray-600">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        {...nameInputProps}
                        placeholder="Enter name"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        {...emailInputProps}
                        placeholder="Enter Email"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm text-gray-600"
                    >
                        Message
                    </label>
                    <input
                        type="text"
                        name="message"
                        id="message"
                        {...messageInputProps}
                        placeholder="Enter category"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                    />
                </div>
                <div className="mb-3">
                    <button
                        type="submit"
                        className="w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
                    >
                        Submit Contact
                    </button>
                </div>
            </form>
        </>
    )
}