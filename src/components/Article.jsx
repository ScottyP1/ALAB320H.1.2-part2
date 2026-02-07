const Article = ({ title, imgSrc }) => {
    return (
        <article className="mt-12">
            <span>11/12/20</span>
            <h3 className="text-5xl mb-4">{title}</h3>
            <img src={imgSrc} alt="title-img" className="w-full" />
            <p className="mb-12">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique velit voluptates commodi laudantium
                corporis natus expedita soluta voluptatum impedit deleniti nemo, sunt optio ipsam sit. Molestias
                voluptatem
                veritatis dolore at?
            </p>
            <span className="flex justify-end text-red-800 font-bold mb-6">
                <a className="">Continues ...</a>
            </span>
            <hr />
        </article>
    )
}



export default Article;
