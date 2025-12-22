export default function Button({ buttonText }) {
    return(
        <section>
            <div className="bg-win-grey font-sans
                            border-2 p-2 inline-block
                            border-l-win-light border-t-win-light
                            border-r-win-dark  border-b-win-dark">
                <div>
                    {buttonText}
                </div>
            </div>
        </section>
    );
};
