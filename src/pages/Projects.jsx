export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Project 1 */}
        <div className="bg-white shadow rounded-lg p-6 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">Project Title 1</h2>
          <p className="text-gray-600 mb-4">
            Short description of the project goes here. This could be a website,
            app, or tool.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-medium">
            View Project
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow rounded-lg p-6 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">Project Title 2</h2>
          <p className="text-gray-600 mb-4">
            Placeholder for another project with space to explain what it does
            and who it's for.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-medium">
            View Project
          </a>
        </div>

        {/* Project 3 */}
        <div className="bg-white shadow rounded-lg p-6 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">Project Title 3</h2>
          <p className="text-gray-600 mb-4">
            Maybe a tool, prototype, or something under construction. Add final
            details later.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-medium">
            View Project
          </a>
        </div>

        {/* Project 4 */}
        <div className="bg-white shadow rounded-lg p-6 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">Project Title 4</h2>
          <p className="text-gray-600 mb-4">
            You can always rename and reorder these. It's all flexible and
            reusable.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-medium">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}
