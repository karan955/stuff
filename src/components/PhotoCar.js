import React from 'react'
import {Carousel, Grid, Row, Col, Image} from 'react-bootstrap'
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

const PhotoCar = () => (

<div>
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
</div>
)

export default PhotoCar
