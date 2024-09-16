// src/Homepage.js

const Homepage = () => {
  return (
    <div className="flex min-h-screen bg-cover bg-center bg-[url('/src/assets/bg.jpg')]">
      <div className="flex-1 flex items-center justify-center text-center text-white p-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to My Homepage</h1>
          <p className="text-lg">
            This is a sample homepage with a full background image and a fancy menu on the right
            side.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Homepage
