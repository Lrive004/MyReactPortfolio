import Projects from "../components/Project"

export default function Portfolio() {
  const projects = [
    {
      name: 'Employee Tracker',
      description: '',
      technologies: [],
    },
    {
      name: 'Social Network API',
      description: '',
      technologies: [],
    },
    {
      name: 'SVG Logo Maker',
      description: '',
      technologies: [],
    },
    {
      name: 'Dog Adoption Site',
      description: '',
      technologies: [],
    },
    {
      name: 'E-Commerce App',
      description: '',
      technologies: [],
    },
    {
      name: 'JavaScript Quiz',
      description: '',
      technologies: [],
    },
  ];
  return (
    <div>
      <h1>Portfolio</h1>
      {projects.map((project, index) =>
      <Projects key={index} {...project}/>
      )}
    </div>
  )
}