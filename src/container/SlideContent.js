import React from 'react'
import { Container } from 'semantic-ui-react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './container.css'

const SlideContent = () => (

  <Container className="sildeCon">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://photos.harstatic.com/185530390/hr/img-3.jpeg?ts=2020-06-26T08:24:21.840"
          alt="First slide"
          style={{ height: '600px' }}
        />
        <Carousel.Caption className="dimmer">
          <h1 className="sildeCon title"> First slide label</h1>
          <p className="sildeCon title"> Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://photos.harstatic.com/152961921/hr/img-15.jpeg?ts=2018-09-05T12:24:41.210"
          alt="Third slide"
          style={{ height: '600px' }}
        />

        <Carousel.Caption className="dimmer">
          <h1 className="sildeCon title">Second slide label</h1>
          <p className="sildeCon title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://photos.harstatic.com/176898748/hr/img-2.jpeg?ts=2019-08-09T08:54:29.080"
          alt="Third slide"
          style={{ height: '600px' }}
        />
        <Carousel.Caption className="dimmer">
          <h1 className="sildeCon title">Third slide label</h1>
          <p className="sildeCon title">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Container>
)

export default SlideContent

