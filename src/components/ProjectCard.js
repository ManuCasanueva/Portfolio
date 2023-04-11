import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, button }) => {
  return (
    <div className="projects" >
      <Col size={19} sm={10} md={20} class="d-flex justify-content-center">
        <div  className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          <div>
             {button}
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};
