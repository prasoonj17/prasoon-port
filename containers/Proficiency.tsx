import React from "react";
import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import GreetingLottie from "../components/DisplayLottie";

const Proficiency = () => {
  return (
    SkillBars && (
      <Container className="section section-lg">
        <Fade bottom duration={2000}>
          <Row>
            <Col lg="6">
              <h1 className="h1">Proficiency</h1>
              {SkillBars.map((skill) => {
                return (
                  <div className="progress-info" key={skill.Stack}>
                    <div className="progress-label">
                      <span>{skill.Stack}</span>
                    </div>
                    <div className="progress-percentage">
                      <span>{skill.progressPercentage}%</span>
                    </div>
                    <Progress
                      max="100"
                      value={skill.progressPercentage}
                      color="info"
                      role="progressbar"
                      aria-label={skill.Stack}
                    />
                  </div>
                );
              })}
            </Col>

            <Col lg="5" className="d-flex flex-column justify-center left-8 align-items-center">
              {/* 👇 Lottie animation */}
              <GreetingLottie animationPath="/lottie/build.json" />

              {/* 👇 Video (auto play, loop, muted) */}
              <video
                src="/gif1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="img-fluid rounded shadow mt-4 h-5 w-5"
              />
            </Col>
          </Row>
        </Fade>
      </Container>
    )
  );
};

export default Proficiency;
