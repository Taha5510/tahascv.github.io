import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Taha Lallali </span>
            from <span className="purple"> London, UK.</span>
            <br />
            <br />
            <br />
            Apart from coding, these are some other activities that I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Basketball
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "All repetitive, menial computer tasks can most likely be automated or partially automated with the right code."{" "}
          </p>
          <footer className="blockquote-footer">Taha Lallali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
