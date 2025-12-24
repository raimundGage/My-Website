export const Window = ({ title }) => {
    return (
        <section>
            <div className="bg-win-grey p-1 border-2 max-w-sm
                            shadow-[1px_1px_0_0_#000000]
                            border-l-win-light border-t-win-light
                            border-r-win-dark border-b-win-dark">

                {/* Title */}
                <div className="bg-win-blue px-2 py-1 justify-between items-center mb-2">
                    <span className="text-white font-bold text-sm tracking-wide">{title}</span>
                    <div className="flex gap-1">
                        <button className="bg-win-grey border border-l-win-light border-t-win-light border-r-black border-b-black px-1 text-xs leading-none font-bold">A</button>
                        <button className="bg-win-grey border border-l-win-light border-t-win-light border-r-black border-b-black px-1 text-xs leading-none font-bold">A</button>
                    </div>
                </div>

                {/* Content */}
                <div>

                </div>

            </div>
        </section>
    );
};