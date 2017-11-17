import React from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Col, Button} from 'react-bootstrap';


const Billing = () => (

  <div>
  <div className="col-lg-4">
  </div>

  <div className="col-lg-8">
  <Form horizontal>
  <FormGroup controlId="formsControlSelect">
  <ControlLabel>Credit Card</ControlLabel>
    <FormControl componentClass="select" placeholder="Visa">
      <option value="Visa">Visa</option>
      <option value="MasterCard">MasterCard</option>
      <option value="AMEX">AMEX</option>
      <option value="Discover">Discover</option>
    </FormControl>
  </FormGroup>

    <FormGroup controlId="formHorizontalCardNumber">
      <Col componentClass={ControlLabel} sm={2}>
        Card Number
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Card Number" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalNameCard">
      <Col componentClass={ControlLabel} sm={2}>
        Name on Card
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Name" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formsControlSelect">
    <ControlLabel>Expires</ControlLabel>
      <FormControl componentClass="select" placeholder="01-January">
        <option value="01-January">01-January</option>
        <option value="02-February">02-February</option>
        <option value="03-March">03-March</option>
        <option value="04-April">04-April</option>
        <option value="05-May">05-May</option>
        <option value="06-June">06-June</option>
        <option value="07-July">07-July</option>
        <option value="08-August">08-August</option>
        <option value="09-September">09-September</option>
        <option value="10-October">10-October</option>
        <option value="11-November">11-November</option>
        <option value="12-December">12-December</option>
      </FormControl>
    </FormGroup>
    <FormGroup controlId="formsControlSelect">
    <ControlLabel></ControlLabel>
      <FormControl componentClass="select" placeholder="2017">
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </FormControl>
    </FormGroup>

    <FormGroup controlId="formHorizontalSecurityCode">
      <Col componentClass={ControlLabel} sm={2}>
        Security Code
      </Col>
      <Col sm={2}>
        <FormControl type="text" placeholder="CVC" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalAddress1">
      <Col componentClass={ControlLabel} sm={2}>
        Address(line 1)
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Address" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalAddress2">
      <Col componentClass={ControlLabel} sm={2}>
        Address(line 2)
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder=" " />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalCity">
      <Col componentClass={ControlLabel} sm={2}>
        City
      </Col>
      <Col sm={8}>
        <FormControl type="text" placeholder="City" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalState">
      <Col componentClass={ControlLabel} sm={2}>
        State
      </Col>
      <Col sm={2}>
        <FormControl type="text" placeholder="State" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalZipCode">
      <Col componentClass={ControlLabel} sm={2}>
        Zip Code
      </Col>
      <Col sm={3}>
        <FormControl type="text" placeholder="Zip" />
      </Col>
    </FormGroup>


    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit">
          Submit
        </Button>
      </Col>
    </FormGroup>
  </Form>
  </div>
</div>
);

export default Billing
