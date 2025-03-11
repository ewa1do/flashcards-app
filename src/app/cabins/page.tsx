import Counter from "../components/Counter";

export default async function page() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    console.log(data);

    return (
        <div>
            <h1>Cabins:</h1>

            <ul>
                {data.map((user: { id: number; name: string }) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

            <Counter />
        </div>
    );
}
