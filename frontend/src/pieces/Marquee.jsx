export const Marquee = ({ icon, name, from }) => {
    return(
        <section>
            <article className="bg-black overflow-hidden whitespace-nowrap my-2">
                <div className="text-neon-green inline-block font-serif animate-marquee">
                    +-+ {icon} {name} from {from} +-+
                </div>
            </article>
        </section>
    );
};
