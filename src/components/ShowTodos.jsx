import React, { useEffect } from "react"

const ShowTodo = () => {
  const [task, setTask] = useState()
  const getData = () => {
    return fetch("http://localhost:3000/api/todo")
      .then((response) => response.json())
      .then((data) => setTask(data))
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="ml-3 text-xl">Todos List</span>
          </a>
          <button>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M96 2H2 7l50 5 10-5-10-5zM2 14l10 5 10-5Z4 12l80 9 6-2"></path>
            </svg>
          </button>
        </div>
      </header>
      {task.map((data) => (
        <TodoCard data={data} />
      ))}
    </>
  )
}
