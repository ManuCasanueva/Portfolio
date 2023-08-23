export const ProjectCard = ({ title, description, imgUrl, button }) => {
  return (
    <div className="projects">
      <div className="proj-imgbx">
        <img className="pic" src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <br></br>
            {button}
          </div>
        </div>
      </div>
    </div>
  );
};
