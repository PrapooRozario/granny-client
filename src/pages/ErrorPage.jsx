

const ErrorPage = () => {
    return (
      <div>
        <div className="flex h-screen flex-col bg-white">
          <img
            src="https://images.deccanherald.com/deccanherald%2F2023-10%2F19b5f132-bce9-4094-a967-d105462dddb1%2Ffile7s9pratl4hzqeit2dwt.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2)"
            alt=""
            className="h-64 w-full object-cover"
          />

          <div className="flex flex-1 items-center justify-center">
            <div className="mx-auto max-w-xl px-4 py-8 text-center">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We can't find that page.
              </h1>

              <p className="mt-4 text-gray-500">
                Try searching again, or return home to start from the beginning.
              </p>

              <button onClick={()=> window.history.go(-1)}
                href="#"
                className="mt-6 inline-block rounded bg-yellow-500 px-5 py-3 text-sm font-medium hover:bg-yellow-600 focus:outline-none focus:ring"
              >
                Go Back Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;