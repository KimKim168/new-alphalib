const ReadMore = ({item}) => {
    return (
        <a
            href={item}
            className="mt-4 inline-block rounded bg-[#8b262b] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#a52a2f]"
        >
            Read more
        </a>
    );
};

export default ReadMore;
