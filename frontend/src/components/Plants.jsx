export const Plants = () => {
    const Plants = [
        {
            name: "Jack O' Lantern",
            sunCost : 225,
            damage : 300,
            isInstant: false
        },
        {
            name: "Guacodile",
            sunCost : 125,
            damage : 20,
            isInstant: false
        },
        {
            name: "Bud'uh Boom",
            sunCost : 100,
            damage : 1000,
            isInstant: true
        }
    ];

    return (
        <section>
            <article>
                <ol className="list-decimal list-inside">
                    {Plants.map((plant) => {
                        return <li key={plant.name}>Plant: {plant.name} Sun: ☀️ {plant.sunCost} Damage: {plant.damage} (Instant use is {plant.isInstant})</li>
                    })}
                </ol>
            </article>
        </section>
    );
};
