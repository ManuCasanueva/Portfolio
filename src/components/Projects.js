import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pifoodlan2.png";
import projImg2 from "../assets/img/gymlan.png";
import projImg3 from "../assets/img/helper.jpg"
import projImg4 from "../assets/img/esencial.jpg"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Food Recipes App",
      description: 'Design and creation of an application that gives the user information about recipes, bringing all the info, from an external API, using the endpoints that it provides, as well also, giving the user the possibility to create and save recipes in a own DataBase. ',
      imgUrl: projImg1,
      button :<button className="botonProject" type="button" class="btn btn-secondary btn-lg" > <a href="https://github.com/ManuCasanueva/PI-Food" style={{ textDecoration: 'none', color:"white" }}>See Project</a></button>,
    },
    {
      title: "Gym Fit App",
      description: "Design and creation of an application for smalls and medium gyms, offering the owners the possibility of giving their customers a value-added service through the application. They will be able to know the gym weekly schedule, his staff and the facilities so the user can see the routines that offers.",
      imgUrl: projImg2,
      button :<button className="botonProject" type="button" class="btn btn-secondary btn-lg" > <a href="https://app-gym-frontend.vercel.app/" style={{ textDecoration: 'none', color:"white" }}>See Project</a></button>,
    },
    {
      title: "Minecraft Helper",
      description: "Using front-end technologies like React, CSS, Material-UI, Konva, and among other tools, I have developed a platform that will allow you to create portal links quickly and easily.But that's not all. I've also included a special feature: a circle blueprint generator. Now you can create perfect circular structures without complications.",
      imgUrl: projImg3,
      button :<button className="botonProject" type="button" class="btn btn-secondary btn-lg" > <a href="https://minecraft-helper.vercel.app/?vercelToolbarCode=TD-bcRBAqZK9yu7" style={{ textDecoration: 'none', color:"white" }}>See Project</a></button>,
    },
    {
      title: "Agua Esencial",
      description: "Aplication web that has been designed to help whit specific needs of the industry, optimizing the inventory tracking and management process. Whit an intuitive interface and advanced functionalities, we achived simplify the daily operations, reduce errors, and minimize costs",
      imgUrl: projImg4,
      button :<button className="botonProject" type="button" class="btn btn-secondary btn-lg" > <a href="https://front-proyecto-linkedin.vercel.app/" style={{ textDecoration: 'none', color:"white" }}>See Project</a></button>,
    },
    
  ];
  
  return (
    <section className="project" id="project" >
      <Container >
        <Row >
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                
                <p>Some of the projects that i made in the last year.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                  
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                              
                                key={index}
                                {...project}
                                
                                />
                                )
                              })
                            }
                            
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
