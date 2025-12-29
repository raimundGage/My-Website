export const Window = ({ title, content, contentImage }) => {
  return (
    <section>
      <div
        className="bg-win-grey max-w-xs p-2 my-3 border-2 shadow-[2px_2px_0_0_#000]
                   border-l-win-light border-t-win-light border-r-win-dark border-b-win-dark"
      >

        {/* Title */}
        <div className="bg-win-blue mb-2 px-2 py-1 flex justify-between items-center">
          <span className="text-white text-xs font-bold tracking-wide">{ title }</span>

          <div className="flex gap-1">  
            <button className="bg-win-grey border-[1.25px] border-l-win-light border-t-win-light border-r-black border-b-black px-1 text-xs font-bold leading-none hover:border-l-black hover:border-t-black hover:border-r-win-light hover:border-b-win-light cursor-pointer">?</button>
            <button className="bg-win-grey border-[1.25px] border-l-win-light border-t-win-light border-r-black border-b-black px-1 text-xs font-bold leading-none hover:border-l-black hover:border-t-black hover:border-r-win-light hover:border-b-win-light cursor-pointer">-</button>
            <button className="bg-win-grey border-[1.25px] border-l-win-light border-t-win-light border-r-black border-b-black px-1 text-xs font-bold leading-none hover:border-l-black hover:border-t-black hover:border-r-win-light hover:border-b-win-light cursor-pointer">X</button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-win-light border-2 border-gray-500 p-4 font-serif">
          { content }
          <img src={ contentImage } />
        </div>

      </div>
    </section>
  );
};
