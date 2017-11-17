import React from 'react'
import SmallMap from './SmallMap'
import {Carousel, Grid, Row, Col, Image, Media} from 'react-bootstrap'
import image1 from '../images/1.png'
import image2 from '../images/2.png'
import image3 from '../images/3.png'
import image4 from '../images/4.png'
import image5 from '../images/5.png'
import image6 from '../images/6.png'
import image7 from '../images/7.png'
import image8 from '../images/8.png'
import image9 from '../images/9.png'
import image10 from '../images/10.png'
import image11 from '../images/11.png'
import image12 from '../images/12.png'
import image13 from '../images/diagram.png'

const Reports = () => (

  <div>
  <h3>Claim On 11/17/17 At 9:00 AM</h3>

  <div className="col-lg-4">
    <SmallMap />
  </div>

  <div className="col-lg-4">
  </div>

  <div className="col-lg-4">
    <dl className="incidentData">
      <dt>Involved Information: </dt>
      <dd>Yes</dd>

      <dt>Witnesses: </dt>
      <dd>Yes</dd>

      <dt>Police Report: </dt>
      <dd>Yes</dd>

      <dt>License Plate Photos: </dt>
      <dd>Yes</dd>

      <dt>Scene Photos: </dt>
      <dd>Yes</dd>

      <dt>Accident Diagram: </dt>
      <dd>Yes</dd>

      <dt>Accident Description: </dt>
      <dd>Yes</dd>

      <dt>Injury Diagram: </dt>
      <dd>Yes</dd>
    </dl>
  </div>
  <div className="col-lg-4">
    <dl className="partiesInvolved">
      <dt>Name: </dt>
      <dd>James Brown</dd>

      <dt>Drivers License: </dt>
      <dd>B1234567</dd>

      <dt>Phone: </dt>
      <dd>(818)338-1234</dd>

      <dt>Email: </dt>
      <dd>info@autoclaim.com</dd>

      <dt>Vehicle Year: </dt>
      <dd>2010</dd>

      <dt>Vehicle VID: </dt>
      <dd>VID123456789</dd>

      <dt>Make: </dt>
      <dd>Toyota</dd>

      <dt>Model: </dt>
      <dd>Corolla</dd>

      <dt>Insurance Company: </dt>
      <dd>Mercury</dd>

      <dt>Policy Number: </dt>
      <dd>P1234567</dd>
    </dl>
  </div>
  <div className="col-lg-4">
      <dl className="partiesInvolved2">
        <dt>Name: </dt>
        <dd>Peter Smith</dd>

        <dt>Drivers License: </dt>
        <dd>B1234567</dd>

        <dt>Phone: </dt>
        <dd>(818)338-1234</dd>

        <dt>Email: </dt>
        <dd>info@autoclaim.com</dd>

        <dt>Vehicle Year: </dt>
        <dd>2012</dd>

        <dt>Vehicle VID: </dt>
        <dd>VID123456789</dd>

        <dt>Make: </dt>
        <dd>Subaru</dd>

        <dt>Model: </dt>
        <dd>Outback</dd>

        <dt>Insurance Company: </dt>
        <dd>Liberty Mutual</dd>

        <dt>Policy Number: </dt>
        <dd>P1234567</dd>
      </dl>
    </div>
    <div className="col-lg-4">
        <dl className="partiesInvolved3">
          <dt>Name: </dt>
          <dd>Jane Doe</dd>

          <dt>Drivers License: </dt>
          <dd>B1234567</dd>

          <dt>Phone: </dt>
          <dd>(818)338-1234</dd>

          <dt>Email: </dt>
          <dd>info@autoclaim.com</dd>

          <dt>Vehicle Year: </dt>
          <dd>2015</dd>

          <dt>Vehicle VID: </dt>
          <dd>VID123456789</dd>

          <dt>Make: </dt>
          <dd>Ford</dd>

          <dt>Model: </dt>
          <dd>Fiesta</dd>

          <dt>Insurance Company: </dt>
          <dd>State Farm</dd>

          <dt>Policy Number: </dt>
          <dd>P1234567</dd>
        </dl>
      </div>
      <div className="col-lg-4">
        <Carousel>
            <Carousel.Item>
              <img width={450} height={250} alt="450x250" src={image1} />
              <Carousel.Caption>
                <h3>License Plate Photos</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={450} height={250} alt="450x250" src={image2} />
              <Carousel.Caption>
                <h3>License Plate Photos</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={450} height={250} alt="450x250" src={image3} />
              <Carousel.Caption>
                <h3>License Plate Photos</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={450} height={250} alt="450x250" src={image4} />
              <Carousel.Caption>
                <h3>License Plate Photos</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-lg-4">
        <Carousel>
            <Carousel.Item>
              <img width={450} height={250} alt="450x250" src={image5} />
              <Carousel.Caption>
                <h3>Accident Scene Photos</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={450} height={250} alt="450x250" src={image6} />
              <Carousel.Caption>
                <h3>Accident Scene Photos</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={450} height={250} alt="450x250" src={image7} />
              <Carousel.Caption>
                <h3>Accident Scene Photos</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={450} height={250} alt="450x250" src={image8} />
              <Carousel.Caption>
                <h3>Accident Scene Photos</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-lg-4">
        <Carousel>
            <Carousel.Item>
              <img width={450} height={250} alt="450x250" src={image9} />
              <Carousel.Caption>
                <h3>Document Photos</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={450} height={250} alt="450x250" src={image10} />
              <Carousel.Caption>
                <h3>Document Photos</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={450} height={250} alt="450x250" src={image11} />
              <Carousel.Caption>
                <h3>Document Photos</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={450} height={250} alt="450x250" src={image12} />
              <Carousel.Caption>
                <h3>Document Photos</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-lg-4">
            <SmallMap />
          </div>

          <div className="col-lg-8">
          <h3>Accident Description</h3>
          <p>This is a description of the accident as told by the party who filed the auto
          claim with <br /> our application. The party stated that they were stopped at the
          red light <br /> at the intersection, and the other party failed to stop and rear-ended
          their vehicle. <br /> The speed of the vehicle was determined to be in excess of the 35MPH speed
          limit posted.</p>
          </div>

          <div className="col-lg-6">
            <Media>
            <Media.Left>
            <img width={150} height={150} src={image13} alt="diagram" />
            </Media.Left>
            <Media.Body>
            <Media.Heading>Injury Diagram-Front</Media.Heading>
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
            </Media.Body>
            </Media>
  </div>
  <div className="col-lg-6">
    <Media>
    <Media.Left>
    <img width={150} height={150} src={image13} alt="diagram" />
    </Media.Left>
    <Media.Body>
    <Media.Heading>Injury Diagram-Back</Media.Heading>
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
    </Media.Body>
    </Media>
  </div>
  </div>
)

export default Reports
