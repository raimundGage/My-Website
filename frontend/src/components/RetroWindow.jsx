export const RetroWindow = ({ title, children, imageSource }) => {
  return (
    <div className="bg-win-grey p-1 border-2 border-t-white border-l-white border-b-win-dark border-r-win-dark shadow-[1px_1px_0_0_#000] max-w-md">

      {/* Title Bar */}
      <div className="bg-win-blue px-2 py-1 flex justify-between items-center mb-2">
        <span className="text-white font-bold text-sm tracking-wide">{title}</span>
        <div className="flex gap-1">
          <button className="bg-win-grey border border-t-white border-l-white border-b-black border-r-black px-1 text-xs font-bold leading-none">?</button>
          <button className="bg-win-grey border border-t-white border-l-white border-b-black border-r-black px-1 text-xs font-bold leading-none">X</button>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white border-2 border-inset border-gray-500 p-4 font-serif">
        <img src={imageSource} />
        {children}
      </div>

    </div>
  );
}
