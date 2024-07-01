import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/check_driving_licence_status_2f32a98611.png";
import projImg2 from "../assets/img/1_exGkrJ77gzDUt-LJehimeg.png";
import projImg3 from "../assets/img/6605302286313-astra-microwave-shares-are-trading-higher-than-the-5-day--20-day--50-day--100-day-and-200-day-moving-285353442-16x9.avif";
import projImg4 from "../assets/img/meta-image-probing.png";
import projImg5 from "../assets/img/maxresdefault (1).jpg";
import projImg6 from "../assets/img/1691419579348.jpeg";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Driving License Status Checker",
      description: "Automatically fills in the driving license number and date of birth. Captures and fills in the CAPTCHA code automatically. Extracts detailed information about the driving license status, including current status, holder's name, license number, validity details, and class of vehicle details. Outputs the extracted information in JSON format.",
      imgUrl: projImg1,
    },
    {
      title: "Doc-Based Question Answering Project",
      description: "Developed a user-friendly web app using Streamlit to analyze text documents, offer detailed answers, and include a translation feature. Designed for researchers, students, and information seekers.",
      imgUrl: projImg2,
    },
    {
      title: "Trading Analyst Dashboard",
      description: "Developed models to analyze large datasets and identify financial trends using Python, enabling informed trading decisions by recognizing patterns in financial data.",
      imgUrl: projImg3,
    },
    {
      title: "Voice-Based Assistance Bot",
      description: "Created a web app using a Large Language Model (LLM) to answer questions naturally, complete tasks, and engage in conversations, catering to multiple user needs.",
      imgUrl: projImg4,
    },
    {
      title: "Fine-tuning Llama3 on Conversational Dataset Using Lora",
      description: "Enhanced the Llama3 language model's dialogue capabilities by fine-tuning it on a specialized conversational dataset. Utilized LORA (Low-Rank Adaptation) to efficiently fine-tune the model, focusing on reducing the computational cost and memory requirements.",
      imgUrl: projImg5,
    },
    {
      title: "Upwork Scraping Project",
      description: "Developed and implemented advanced web scraping solutions using Selenium to extract valuable data from Wellfound, Crunchbase, and PitchBook. This project involved overcoming sophisticated bot prevention mechanisms.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are some of the projects I have worked on, showcasing my skills and expertise in various domains.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
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
                      <Tab.Pane eventKey="second">
                        <p>More projects coming soon...</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Stay tuned for updates...</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
