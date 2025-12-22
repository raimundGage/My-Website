export default function Marquee({ marqueeText }) {
    return (
        <section>
            <div className="bg-black overflow-hidden whitespace-nowrap">
                <div className="animate-marquee inline-block text-green-400 font-courier">
                    {marqueeText}
                </div>
            </div>
        </section>
    );
};
