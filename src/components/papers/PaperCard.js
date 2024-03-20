import React, { useState } from "react";
import { Col, Card, Button, Collapse } from "react-bootstrap";
import { FiletypePdf, ChevronDoubleDown, ChevronDoubleUp } from "react-bootstrap-icons";

const PaperCard = (paperObj) => {
  const [open, setOpen] = useState(false);

  const paper = paperObj.paper;

  const handleCollapse = () => {
    if (open) {
        document.getElementById("collapse-btn-up-" + paper.pdfURL).setAttribute("hidden", "");
        document.getElementById("collapse-btn-down-" + paper.pdfURL).removeAttribute("hidden");
    } else {
        document.getElementById("collapse-btn-up-" + paper.pdfURL).removeAttribute("hidden");
        document.getElementById("collapse-btn-down-" + paper.pdfURL).setAttribute("hidden", "");
    }
    setOpen(!open);
  };

  return (
    <Col>
      <Card>
        <div className="embedDiv">
          <embed
            src={paper.pdfURL + "#toolbar=0&navpanes=0&scrollbar=0"}
          ></embed>
        </div>
        
        <Card.Body className="text-center">
          <Card.Title>{paper.title}</Card.Title>
          <Button
            onClick={handleCollapse}
            aria-controls={"collapse-text-" + paper.pdfURL}
            aria-expanded={open}
            className="collapse-btn"
          >
            <ChevronDoubleDown id={"collapse-btn-down-" + paper.pdfURL} />
            <ChevronDoubleUp id={"collapse-btn-up-" + paper.pdfURL} hidden/>
          </Button>
          <Collapse in={open}>
            <div id={"collapse-text-" + paper.pdfURL} style={{ textAlign: "justify" }}>
              {paper.abstract}
            </div>
          </Collapse>
          <hr style={{ marginBottom: "0" }} />
        </Card.Body>

        <Card.Footer style={{ textAlign: "right", marginBottom: "10px" }}>
          <Button href={paper.pdfURL} target="_blank">
            <FiletypePdf size={20} style={{ marginRight: "0.5em" }} />
            View Paper
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default PaperCard;
