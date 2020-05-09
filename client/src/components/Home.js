import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, CardFooter, Row, Col
} from 'reactstrap';



class Home extends Component {

    render() {
        return (
            <div>
                <h3 align="center">Featured Job Positions</h3>
                <Row>
                    <Col sm="4">
                    <Card>
                        <CardImg variant="top" src="https://www.version2.dk/sites/v2/files/nyt_microsoft_logo.png" />
                        <CardBody>
                            <CardTitle>Full-time Student Developer</CardTitle>
                            <CardText>
                                Do you want to be at the heart of cloud computing?
                                Do you want to work on a meaningful and impactful
                                project and make a difference to the US government
                                and country?

                                <br></br>
                                Software engineers (SWEs) work with teammates to solve
                                problems and build innovative software solutions. You
                                are passionate about customers and product quality, and
                                you provide technical guidance to Program Managers as
                                they consider user needs and product requirements.
                                You will also be expected to demonstrate an ability to
                                learn and adopt relevant new technologies, tools,
                                methods and processes to leverage in your solutions.
                            </CardText>
                        </CardBody>
                        <Button href="https://careers.microsoft.com/students/us/en/job/771320/Full-Time-Opportunities-for-Students-and-Recent-Graduates-with-Security-Clearance-Software-Development">Apply</Button>
                        <CardFooter>
                            <small className="text-muted">Date posted : Apr 8, 2020</small>
                        </CardFooter>
                    </Card>
                    </Col>
                    <Col sm="4">
                    <Card>
                        <CardImg variant="top" src="https://www.frenchweb.fr/wp-content/uploads/2018/04/uneskillvalue.jpg"/>
                        <CardBody>
                            <CardTitle>Developer - All levels</CardTitle>
                            <CardText>
                                Enhance the React front-end features of the app and structure the first front-end team. If you like mobile development, they have many tasks in this field too.
                                <br></br>
                                You have a lot of ambitions in tech and you'd like to find a good company to catalyze this ambition (real ambition, not just having good teammates & learning edge libraries).
                            </CardText>
                        </CardBody>
                        <Button href="https://bit.ly/2VlVeRs">Apply</Button>
                        <CardFooter>
                            <small className="text-muted">Date posted : Feb 19, 2020</small>
                        </CardFooter>
                    </Card></Col>
                    <Col sm="4">
                    <Card>
                        <CardImg variant="top" src="https://bit.ly/2XQB7fS" />
                        <CardBody>
                            <CardTitle>Senior Frontend Engineer</CardTitle>
                            <CardText>
                                Shogun, and we're on a mission to help people create the best eCommerce experiences in the world.
                                Basic Qualifications:
                                <br></br>
                                <br></br>
                                &#9675; Working knowledge of TypeScript (and JavaScript), Tests (Jest, React-Testing-Library etc)<br></br>
                                &#9675; Working experience with frontend frameworks such as React<br></br>
                                &#9675; Proven pixel-perfect CSS skills<br></br>
                                &#9675; Real-world code we can review<br></br>
                            </CardText>
                        </CardBody>
                        <Button href="https://stackoverflow.com/jobs?id=360336&pg=3">Apply</Button>
                        <CardFooter>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardFooter>
                    </Card></Col>
                </Row>
            </div>
        );
    }
}
export default Home;