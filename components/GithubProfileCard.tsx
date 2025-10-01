import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";

const GithubProfileCard = ({ avatar_url }: GithubUserType) => {
  return (
    <Card
      className="section-lg shadow-2xl border-0 rounded-lg overflow-hidden"
      style={{
        background: "linear-gradient(to right, #38bdf8, #0ea5e9, #0284c7)", // skyblue gradient
      }}
    >
      <Container className="py-4">
        <div className="p-4">
          <Row className="align-items-center">
            <Col className="order-lg-2 text-center" lg="4">
              <img
                src={avatar_url}
                alt="Prasoon Jain"
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",      // circle banane ke liye
                  objectFit: "cover",       // image ko crop karke fit kare
                  border: "4px solid #3b82f6", // Tailwind sky-500
                }}
                className="shadow-lg transform hover:scale-105 transition-transform duration-300"
              />


            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white font-bold text-3xl mb-3">Reach Out to me!</h2>
              <p className="lead text-white mt-3 font-medium">
                DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
              </p>
              <p className="text-white mt-3 text-base">
                MCA 2025 || Birla Institute of Technology, Mesra
              </p>
              <p className="text-white mt-2 text-base">
                Contact: 7509388996, prasoonj02@gmail.com
              </p>
              <div className="my-4 flex items-center bg-gray-800 bg-opacity-50 shadow-md rounded-full px-4 py-2 text-white">
                <i className="ni ni-pin-3 text-blue-200 mr-2" />
                <span className="text-sm font-medium">Noida</span>
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
