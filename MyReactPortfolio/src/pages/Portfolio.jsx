import Projects from "../components/Project";

const projects = [
    {
      name: 'Employee Tracker',
      description: '',
      technologies: [],
    },
    {
      name: 'Social Network API',
      description: 'A social networking application that allows you to create, update, find and delete users and their thoughts (comments).',
      technologies: ['JavaScript'],
      image: 'images/Screenshot 2024-05-13 112514.png'
    },
    {
      name: 'SVG Logo Maker',
      description: 'This application is a SVG logo maker that accepts user input to dynamically create a custom SVG.',
      technologies: ['JavaScript'],
      image: 'images/Screenshot 2024-05-13 101621.png'
    },
    {
      name: 'Dog Adoption Site',
      description: '',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'E-Commerce App',
      description: '',
      technologies: [],
    },
    {
      name: 'JavaScript Quiz',
      description: '',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      {projects.map((project, index) => (
      <Projects key={index} {...project}/>
      ))}
    </div>
  );
};

export default Portfolio;