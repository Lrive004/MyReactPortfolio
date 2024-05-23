function Projects({ name, description, technologies, image }) {
  return(
    <div>
      <h3>{name}</h3>
      <img src={image} alt={name}/>
      <p>{description}</p>
      <ul>
        {technologies.map((tech, index) => 
        <li key={index}>{tech}</li>)}
      </ul>
    </div>
  );
};

export default Projects;