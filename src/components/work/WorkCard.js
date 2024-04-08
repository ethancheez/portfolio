import React from "react";
import { Card, Col } from "react-bootstrap";
import { BoxArrowUpRight } from "react-bootstrap-icons";

const WorkCard = (workObj) => {
  const work = workObj.work;

  const startDate = new Date(work.startDate);
  const endDate = new Date(work.endDate);
  const workDuration =
    startDate.toLocaleString("en-US", { month: "short", timeZone: "UTC" }) +
    " " +
    startDate.getUTCFullYear() +
    " - " +
    (work.endDate.toLowerCase() === "present" ? "Present" : endDate.toLocaleString("en-US", { month: "short", timeZone: "UTC" })) +
    " " +
    (work.endDate.toLowerCase() === "present" ? "" : endDate.getUTCFullYear());

  return (
    <Col>
      <Card style={{ height: "100%" }}>
        <Card.Img variant="top" src={work.logoURL} />
        <Card.Body>
          <Card.Title>{work.company}</Card.Title>
          <Card.Subtitle>{work.position}</Card.Subtitle>
          <Card.Text>{workDuration}</Card.Text>
          <Card.Text className="summary">{work.summary}</Card.Text>
        </Card.Body>
        {work.website !== "" ? (
          <a
            href={work.website}
            target="_blank"
            rel="noreferrer"
            className="redirect-icon"
          >
            <BoxArrowUpRight />
          </a>
        ) : null}
      </Card>
    </Col>
  );
};

export default WorkCard;
