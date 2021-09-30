import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-bootstrap/Carousel';


class HomeCorouselCOmp extends Component {
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <div style={{ margin: '20px', borderRadius: '15px' }}>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                style={{ width: '500px', height: '500px', position: 'relative' }}
                                className="d-block w-100"
                                src='/images/forestpark.jpeg'
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 className="text-dark">Adventure Park</h3>
                                <p  className="text-dark">Have a great vacation</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ width: '500px', height: '500px', position: 'relative' }}
                                className="d-block p-center w-100"
                                src='/images/forest/f1.jpg'
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3 className="text-dark">Exciting Forest Park</h3>
                                <p className="text-dark">Enjoy safe rides</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ width: '500px', height: '500px', position: 'relative' }}
                                className="d-block w-100"
                                src="/images/riverpark.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Exciting River Park</h3>
                                <p>Enjoy safe rides</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    <div className="jumbotron" style={{margin:'20px'}}>
                        <h1 className="display-3">Welcome to Wonder Woods</h1>
                        <hr className="my-4" />
                        <p>Adventure Parks are different from traditional theme parks. There are two types of parks here one is forest park
                            and second is river park. Both the parks are safe to wander and ride.
                            Unlike temporary and mobile funfairs and theme parks, adventure parks are 
                            stationary and built for long-lasting operation. They are more elaborate than city parks usually providing attractions that cater to a variety of age groups.
         </p>
                        <p class="lead">
                            <a class="btn btn-primary btn-lg " href="https://www.holidify.com/pages/amusement-parks-in-delhi-298.html" role="button">Learn more</a>
                        </p>
                    </div>

                </div>
            </div>
        );
    }
}

export default HomeCorouselCOmp;
