import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { findRenderedDOMComponentWithTag } from "react-dom/test-utils";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (catagory, value) => {
    setFormDetails({
      ...formDetails,
      [catagory]: value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setButtonText('Sending...');
    let response = await fetch('https://localhost:5000/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json;charset=utf-8'
        },
        body: JSON.stringify(formDetails),
    });
    setButtonText('Send');
    let result = response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
        setStatus({
            success: true,
            message: "Message sent succesfully"
        });
    }
    else {
        setStatus({
            success: false,
            message: "Message NOT sent succesfully"
        });
    }
  }

  return (
    <section className="contact" id="contct">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="" />
          </Col>
          <Col md={6}>
            <h2> Contact Me</h2>
            <form onSubmit={submitHandler}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(event) =>
                      onFormUpdate("firstName", event.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(event) =>
                      onFormUpdate("lastName", event.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(event) =>
                      onFormUpdate("email", event.target.value)
                    }
                  />
                  </Col>
                  <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(event) =>
                      onFormUpdate("phone", event.target.value)
                    }
                  />
                  </Col>
                  <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(event) =>
                      onFormUpdate("message", event.target.value)
                    }
                  />
                  <button type="submit"><span>{buttonText}</span></button>
                  </Col>
                  {
                    status.message &&
                    <Col>
                    <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                    </Col>
                  }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
