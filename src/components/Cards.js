import React from 'react';
import {Grid, Row, Col, Thumbnail, Button, ButtonToolbar } from 'react-bootstrap';
import image1 from '../images/start_claim.png';
import image2 from '../images/total_drivers.png';
import image3 from '../images/expiration_notifier.png';


class Cards extends React.Component {
  render() {
    return (
  <Grid>
    <Row>
      <Col xs={6} md={4}>
        <Thumbnail src={image1} alt="242x200">
          <h3>Total Claims</h3>
          <p>This month...</p>
          <p>
          <div>
            <Button bsStyle="primary" bsSize="large" block>3,375</Button>&nbsp;
          </div>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail src={image2} alt="242x200">
          <h3>Total Drivers</h3>
          <p>This month...</p>
          <p>
          <div>
            <Button bsStyle="primary" bsSize="large" block>3,375</Button>&nbsp;
          </div>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail src={image3} alt="242x200">
          <h3>Expiration Notifications</h3>
          <p>Description</p>
          <p>
          <div>
            <Button bsStyle="primary" bsSize="large">Button</Button>&nbsp;
            <Button bsStyle="primary" bsSize="large">Button</Button>
          </div>
          </p>
        </Thumbnail>
      </Col>
    </Row>
  </Grid>
  )
 }
};

export default Cards
