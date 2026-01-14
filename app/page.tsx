export default function Home() {
  return (
    <section className="custom-container py-20 flex flex-col sm:flex-row items-center gap-8">
      <div className="w-full sm:w-1/2">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 uppercase">
          Hi, I`m Alif
        </h1>
        <p className="text-lg text-gray-600 mt-4 leading-relaxed">
          Welcome to my portfolio website!
        </p>
      </div>
      <div className="w-full sm:w-1/2 bg-gray-200 h-64 sm:h-80 rounded-lg flex items-center justify-center">
        <p className="text-grey-400">Image Placeholder</p>
      </div>
    </section>
  );
}
