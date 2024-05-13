function Projects({ name, description, technologies }) {
  return(
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <ul>
        {technologies.map((tech, index) => 
        <li key={index}>{tech}</li>)}
      </ul>
    </div>
  );
};

export default Projects;