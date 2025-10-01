import React from "react";
import { experience } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";

const Experience = () => {
  return (
    experience && (
      <Fade bottom duration={2000}>
        <section className="section section-lg text-center">
          <Container>
            <div className="d-flex flex-column align-items-center p-4">
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info mb-3">
                <i className="ni ni-briefcase-24 text-info" />
              </div>
              <h4 className="display-3 text-info">Experience</h4>
            </div>

            <Row className="row-grid justify-content-center">
              {experience.map((data, i) => {
                return (
                  <Col lg="8" md="10" sm="12" key={i} className="mb-4">
                    {/* Card data bina image */}
                    <div className="p-4 shadow rounded bg-white">
                      <h5 className="text-info">{data.role}</h5>
                      <h6 className="text-muted">{data.company}</h6>
                      <p className="mb-1">{data.date}</p>
                      <p>{data.desc}</p>
                      {data.descBullets && (
                        <ul className="text-left">
                          {data.descBullets.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Experience;
