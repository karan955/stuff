import React from 'react'
import {Carousel, Grid, Row, Col, Image} from 'react-bootstrap'
import image13 from '../images/diagram.png'

const InjuryInfo = () => (

<div>
<div className="col-lg-3">
<Grid>
  <Row>
    <Col xs={6} md={4}>
    <Image src={image13} rounded />
    </Col>
  </Row>
</Grid>
</div>

<div className="col-lg-3">
<table>
<thead>
    <tr>
      <th>Pain</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Hurt My Shoulder</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Hurt My Arm</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Hurt My Hip</td>
    </tr>
  </tbody>
</table>
</div>

<div className="col-lg-3">
<Grid>
  <Row>
    <Col xs={6} md={4}>
    <Image src={image13} rounded />
    </Col>
  </Row>
</Grid>

</div>
<div className="col-lg-3">
<table>
<thead>
    <tr>
      <th>Pain</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Hurt My Shoulder</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Hurt My Arm</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Hurt My Hip</td>
    </tr>
  </tbody>
</table>
</div>
</div>
)

export default InjuryInfo
