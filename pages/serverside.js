// pages/serverside.js

export async function getServerSideProps() {
  try {
    // Fetch data from a real API
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );

    // Check if the request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const todos = await res.json();

    // Pass the fetched data to the component as props
    return {
      props: {
        todos,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    // Pass an empty list if there's an error
    return {
      props: {
        todos: [],
      },
    };
  }
}
// serverside
export default function Serverside({ todos }) {
  return (
    <div>
      <h1>Server Side Rendering Example</h1>
      <h2>Todo List:</h2>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.id}>
              {todo.title} {todo.completed ? "(Completed)" : "(Pending)"}
            </li>
          ))
        ) : (
          <p>No todos available or failed to fetch data.</p>
        )}
      </ul>
    </div>
  );
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       message: "Server-side rendering is working!",
//     },
//   };
// }

// export default function Serverside({ message }) {
//   return <div>{message}</div>;
// }
