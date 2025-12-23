export const Button = ({ buttonText }) => {
    return (
        <section>
            <button className="bg-win-grey inline-block
                                border-2 p-2
                                border-l-win-light border-t-win-light
                                border-r-win-dark  border-b-win-dark">
                {buttonText}
            </button>
        </section>
    );
};
