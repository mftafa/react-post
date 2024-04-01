import { useState } from "react";
import useHandleCreateForm from "../../hooks/useHandleCreateForm.js";
import Allert from "../../components/shared/Allert.jsx";

export default function CreatePost() {
  const titleInputProps = useHandleCreateForm("");
  const imageInputProps = useHandleCreateForm("");
  const categoryInputProps = useHandleCreateForm("");
  const descriptionInputProps = useHandleCreateForm("");
  const authorInputProps = useHandleCreateForm("");
  const authorDescriptionInputProps = useHandleCreateForm("");
  const timeInputProps = useHandleCreateForm("");

  const [allertMessageBox, setAllertMessageBox] = useState(false);

  const formSubmitHandler = async (event) => {

    event.preventDefault();

    let data = {
      title: titleInputProps?.value,
      image: imageInputProps?.value,
      category: categoryInputProps?.value,
      description: descriptionInputProps?.value,
      author: authorInputProps?.value,
      authorDescription: authorDescriptionInputProps?.value,
      time: timeInputProps?.value,
    };

    try {
      let res = await fetch(
        "https://66063693d92166b2e3c36964.mockapi.io/api/react-posts/posts",
        {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      res = await res.json();

      titleInputProps?.resetValue()
      imageInputProps?.resetValue()
      categoryInputProps?.resetValue()
      descriptionInputProps?.resetValue()
      authorInputProps?.resetValue()
      authorDescriptionInputProps?.resetValue()
      timeInputProps?.resetValue()

      setAllertMessageBox(true)

      setTimeout(() => {
        setAllertMessageBox(false)
      }, 5000);

      console.log(res);

    } catch (error) {
      // TODO Handle error
      console.log(error);
    }
  };

  return (
    <>
      <div className="text-center my-8">
        <div className="relative mb-2">
          <h2 className="text-gray-800 font-bold text-5xl z-0 uppercase">
            Create a post
          </h2>
          <i className="absolute w-64 h-4 bg-blue-800 bg-opacity-50 transform -translate-x-1/2 top-8 -z-50"></i>
        </div>
        <p className="font-normal text-lg text-gray-400">
          here you can create your post
        </p>
      </div>
      <div className="w-1/2 mx-auto">
        {allertMessageBox && <Allert message="Created successfully." allertCloseHandler={()=>setAllertMessageBox(false)} />}
        <form onSubmit={formSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="title" className="block mb-2 text-sm text-gray-600">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              {...titleInputProps}
              placeholder="Enter title"
              required
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="block mb-2 text-sm text-gray-600">
              Image
            </label>
            <input
              type="text"
              name="image"
              id="image"
              {...imageInputProps}
              required
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="category"
              className="block mb-2 text-sm text-gray-600"
            >
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              {...categoryInputProps}
              placeholder="Enter category"
              required
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="description"
              className="block mb-2 text-sm text-gray-600"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              {...descriptionInputProps}
              placeholder="Enter description"
              required
              className="w-full h-24 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="block mb-2 text-sm text-gray-600">
              Author
            </label>
            <input
              type="text"
              name="author"
              id="author"
              {...authorInputProps}
              placeholder="Enter author"
              required
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="authorDescription" className="block mb-2 text-sm text-gray-600">
              Author Description
            </label>
            <input
                type="text"
                name="authorDescription"
                id="authorDescription"
                {...authorDescriptionInputProps}
                placeholder="Enter author description"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="time" className="block mb-2 text-sm text-gray-600">
              Time
            </label>
            <input
                type="date"
                name="time"
                id="time"
                {...timeInputProps}
                placeholder="Enter time"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
            />
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
