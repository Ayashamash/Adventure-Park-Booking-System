import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-bootstrap/Carousel';
class TourComp extends Component {
    render() {
        return (
            <div>

                <div style={{margin:'20px',borderRadius:'15px'}}>
                <Carousel fade>
                    <Carousel.Item>
                        <video autoPlay={true} loop={true}
                            style={{ width: '500px', height: '500px', position: 'relative' }}
                            className="d-block w-100"
                            src='/videos/v1.mp4'
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Exciting Forest Park</h3>
                            <p>Wander in the woods those who wander are not lost</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <video autoPlay={true} loop={true}
                            style={{ width: '500px', height: '500px', position: 'relative' }}
                            className="d-block p-center w-100"
                            src='/videos/v1.mp4'
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Refreshing River Park</h3>
                            <p>Fresh water, silent river! Fell the beauty of nature</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <video autoPlay={true} loop={true}
                            style={{ width: '500px', height: '500px', position: 'relative' }}
                            className="d-block w-100"
                            src='/videos/v2.mp4'
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Safe and hygenic park</h3>
                            <p>We will take care of all</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>

            </div>
        );
    }
}

export default TourComp;
