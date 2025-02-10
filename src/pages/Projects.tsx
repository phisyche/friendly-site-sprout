
const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A minimal design approach",
      category: "Design",
    },
    {
      title: "Project Two",
      description: "Interactive user experience",
      category: "Development",
    },
    {
      title: "Project Three",
      description: "Brand identity design",
      category: "Branding",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="container mx-auto px-6 py-32 animate-fadeIn">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 rounded-full mb-4">
            Projects
          </span>
          <h1 className="text-4xl font-bold tracking-tight mb-12">Latest Work</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-gray-100"></div>
                <div className="p-6">
                  <span className="text-sm text-gray-500">{project.category}</span>
                  <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
