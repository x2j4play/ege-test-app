import React, {Component} from 'react';
import {Button, ButtonGroup, Card, Col, Container, Row} from "react-bootstrap";
import '../app.css'
import {RouteComponentProps} from "react-router";

interface MatchParams {
}

export interface HomePageProps extends RouteComponentProps<MatchParams> {
}

export type HomePageState = {}


export class HomePage extends Component<HomePageProps, HomePageState> {
    constructor(props: HomePageProps) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {
    }

    render() {
        return (
            <Container fluid='sm'>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Container>
                                    <Row>
                                        <ButtonGroup vertical style={{width: '100%'}}>
                                            <Button variant={'info'}
                                                    href={process.env.PUBLIC_URL + '/#/ticketsList'}>Список билетов</Button>
                                            <Button variant={'warning'}
                                                    href={process.env.PUBLIC_URL + '/#/problemsSelect'}>Тестирование по типу
                                                задач</Button>
                                        </ButtonGroup>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}