export default function Todo() {
  //   const [todoItems, setTodoItems] = useState('')
  //   const [todos, setTodos] = useState([])

  //   const handleAddTodo = (e) => {
  //     e.preventDefault() // Prevent default form submission
  //     if (todoItems.trim()) {
  //       setTodos([...todos, todoItems])
  //       setTodoItems('')
  //     }
  //   }

  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        flex: '2'
      }}
    >
      <h3>To-do List</h3>
      {/* <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={todoItems}
          onChange={(e) => setTodoItems(e.target.value)}
          placeholder="Add a new task..."
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />
        <button type="submit" style={{ padding: '10px' }}>
          Add
        </button>
      </form> */}
      {/* <ul style={{ listStyleType: 'none', padding: '0' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ margin: '5px 0' }}>
            {todo}
          </li>
        ))}
      </ul> */}
    </div>
  )
}
