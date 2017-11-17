import React from 'react'
import {Form, FormGroup, FormControl, Col, Button, ControlLabel, Grid, Row, Image} from 'react-bootstrap';
import image4 from '../images/profile_pic.png';

const Account = () => (

<div>
<div className="col-lg-6">
<Grid>
  <Row>
    <Col xs={6} md={4}>
      <Image src={image4} circle />
    </Col>
  </Row>
</Grid>
</div>

<div className="col-lg-6">
  <Form horizontal>
    <FormGroup controlId="formHorizontalFirstName">
      <Col componentClass={ControlLabel} sm={2}>
        First Name
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="First Name" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalLastName">
      <Col componentClass={ControlLabel} sm={2}>
        Last Name
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Last Name" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="example@domain.com" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPhone">
      <Col componentClass={ControlLabel} sm={2}>
        Phone
      </Col>
      <Col sm={10}>
        <FormControl type="" placeholder="(xxx) (xxx) - (xxxx)" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalAddress">
      <Col componentClass={ControlLabel} sm={2}>
        Address
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Address" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalCity">
      <Col componentClass={ControlLabel} sm={2}>
        City
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="City" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalZipCode">
      <Col componentClass={ControlLabel} sm={2}>
        Zip Code
      </Col>
      <Col sm={6}>
        <FormControl type="text" placeholder="Zip Code" />
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
)

export default Account
