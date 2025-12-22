export default function Fruits() {
    const fruits = [
        "Apple", "Banana", "Coconut", "Guava", "Strawberry", "Watermelon"
    ];
    
    return (
        <div>
            <ul>
                {fruits.map((es) => (
                    <li>{es}</li>
                ))}
            </ul>
        </div>
    );
};
