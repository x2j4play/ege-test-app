import React, {Component} from 'react';
import {Alert, Button, Card, Col, Container, Row} from "react-bootstrap";
import '../app.css'
import {Link} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {ProblemCardDisplay} from "../Components/ProblemCardDisplay";
import {info_list} from "../StaticData/ProblemsInfo";

interface MatchParams {
}

export interface ProblemTestingSelectPageProps extends RouteComponentProps<MatchParams> {
}

export type ProblemTestingSelectPageState = {}


export class ProblemsSelectPage extends Component<ProblemTestingSelectPageProps, ProblemTestingSelectPageState> {
    constructor(props: ProblemTestingSelectPageProps) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {
    }

    render() {
        return (
            <Container fluid='sm'>
                <Row>
                    <Col className='text-center'>
                        <Button className='btn-top-home text-center' variant={'info'}
                                href={process.env.PUBLIC_URL + '/#/'}>На главную</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>Задания ЕГЭ по математике профильного уровня 2021</Card.Header>
                            <Card.Body>
                                <Container className='lvl-two-container'>
                                    {info_list.map((info) => (
                                        <Alert variant='primary'>
                                            <a href={process.env.PUBLIC_URL + '/#/problemsTesting/' + info.num}
                                               style={{color: '#004085'}}
                                               className="ui label large circular">{info.num}</a>
                                            &nbsp;&nbsp;&nbsp;
                                            <Link to={'/problemsTesting/' + info.num}
                                                  style={{color: '#004085'}}>{info.name}</Link>
                                        </Alert>
                                    ))}
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <Button className='btn-down-home text-center' variant={'info'} href={process.env.PUBLIC_URL + '/#/'}>На главную</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
