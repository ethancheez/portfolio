import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const EducationCard = ({ education }) => {
  const startDate = new Date(education.startDate);
  const endDate = new Date(education.endDate);

  return (
    <Row
      style={{ marginBottom: "2em", marginTop: "2em" }}
      className="educationCard"
    >
      <Col xs={2}>
        <Image src={education.logoURL} className="img-fluid" />
      </Col>
      <Col>
        <h2>
          <b>{education.institution}</b>
        </h2>
        <h3>
          {education.degree} in {education.field}
        </h3>
        <p>
          {startDate.toLocaleString("en-US", {
            month: "long",
            timeZone: "UTC",
          })}{" "}
          {startDate.getUTCFullYear()} -{" "}
          {endDate.toLocaleString("en-US", { month: "long", timeZone: "UTC" })}{" "}
          {endDate.getUTCFullYear()}
        </p>
        <p className="eduSummary">{education.summary}</p>
        <span>
            Organizations:
        </span>
        <ul>
            {education.organizations.map((org) => <li key={org.name}>{org.name} {org.position !== "" ? " -- " + org.position : null}</li>)}
        </ul>
      </Col>
      <hr style={{ color: "white", marginTop: "2em" }} />
    </Row>
  );
};

export default EducationCard;
