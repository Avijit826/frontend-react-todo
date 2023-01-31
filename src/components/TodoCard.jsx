const TodoCard = () => {
  return (
    <section class="body-font text-gray-600">
      <div class="container mx-auto flex flex-col items-center px-5 py-4 md:flex-row">
        {/* checkbox */}
        <span class="mr-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
          {/* check icon --start-- */}
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            class="h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
          {/* --end-- */}
        </span>
        <div class="mb-6 flex w-full flex-col pr-0 text-center md:mb-0 md:w-auto md:pr-10 md:text-left">
          <h2 class="title-font text-xs font-medium tracking-widest text-indigo-500">
            COMPLETED
          </h2>
          <h1 class="title-font text-2xl font-medium text-gray-900 md:text-3xl">
            Buy Milk
          </h1>
        </div>
        <div class="mx-auto flex flex-shrink-0 items-center space-x-4 md:ml-auto md:mr-0">
          {/* Edit Todo Button */}
          <button class="h-12 w-12 items-center rounded-lg bg-gray-100 py-2 px-3 hover:bg-gray-200 focus:outline-none">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="{1.5}"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>

          {/* Delete todo Button */}
          <button class="h-12 w-12 items-center rounded-lg bg-gray-100 py-2 px-3 hover:bg-gray-200 focus:outline-none">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="{1.5}"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="border-t border-gray-200 w-4/5 mx-auto"></div>
    </section>
  )
}
