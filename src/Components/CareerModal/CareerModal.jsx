import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./CareerModal.css";

function CareerModal({ show, onHide }) {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Application Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="jobPositionInput">
              <Form.Label>Job Position:</Form.Label>
              <Form.Control type="text" placeholder="Job Position" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="nameInput">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phoneNumber">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control type="number" placeholder="Phone Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="currentLocation">
              <Form.Label>Current Location:</Form.Label>
              <Form.Control type="text" placeholder="Current Location" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="emailId">
              <Form.Label>Email Id:</Form.Label>
              <Form.Control type="email" placeholder="Email Id" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="resume">
              <Form.Label>Resume Attachment:</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="experienceFresher">
              <Form.Label>Experience/Fresher:</Form.Label>
              <Form.Control as="select" defaultValue="">
                <option value="">
                  Select Status
                </option>
                <option value="Experience">Experience</option>
                <option value="Fresher">Fresher</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="messageBody">
              <Form.Label>Message Body:</Form.Label>
              <Form.Control type="text" placeholder="Message Body" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Submit Application
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CareerModal;
