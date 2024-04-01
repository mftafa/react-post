export default function SinglePost({post}){
    return(
        <>
            <article className="flex max-w-xl flex-col p-5 items-start justify-between rounded-xl bg-gray-50 hover:bg-gray-100">
                <img src={post?.image} alt="Post" className="w-full rounded-xl" />
                <div className="group relative">
                    <h3 className="my-3 text-xl font-bold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href="#">{post?.title}</a>
                    </h3>
                    <div className="text-xs">
                        <time className="text-gray-500" dateTime="2020-03-16">{post?.time}</time>
                    </div>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post?.description}</p>
                </div>
                <div className="flex gap-3 w-full items-end justify-between">
                    <div className="relative mt-8 flex items-center gap-x-4 w-full">
                        <img alt="" className="h-10 w-10 rounded-full bg-gray-50" src="/src/assets/images/avatar.png" />
                        <div className="text-sm leading-6">
                            <p className="font-bold text-gray-900">
                                <a href="#">{post?.author}</a>
                            </p>
                            <p className="text-gray-600">{post?.authorDscription}</p>
                        </div>
                    </div>
                    <div className="w-full text-xs">
                        <div className="flex gap-1 justify-end">
                            <a href="#" className="rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-300">{post?.category}</a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}