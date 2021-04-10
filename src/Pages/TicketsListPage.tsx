import React, {Component} from 'react';
import {Alert, Badge, Button, ButtonGroup, Card, Col, Container, Row} from "react-bootstrap";
import '../app.css'
import {RouteComponentProps} from "react-router";
import {tickets_list} from "../StaticData/Tickets";

interface MatchParams {
}

export interface TicketsListPageProps extends RouteComponentProps<MatchParams> {
}

export type TicketsListPageState = {}


export class TicketsListPage extends Component<TicketsListPageProps, TicketsListPageState> {
    constructor(props: TicketsListPageProps) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {
    }

    render() {
        return (
            <Container style={{height: '100vh'}} fluid='sm'>
                <Row style={{maxHeight: '10%', overflow: 'auto'}}>
                    <Col className='text-center'>
                        <Button className='btn-top-home text-center' variant={'info'}
                                href={process.env.PUBLIC_URL + '/#/'}>На главную</Button>
                    </Col>
                </Row>
                <Row style={{height: '87%'}}>
                    <Card style={{height: '100%'}}>
                        <Card.Header as='h5'>
                            <b>Список билетов</b>
                        </Card.Header>
                        <Card.Body style={{height: '100%', overflow: 'auto'}}>
                            <Container fluid>
                                <Row>
                                    {tickets_list.map((ticket) => (
                                        <Card className='card-ticket-home'>
                                            <Card.Header>
                                                <b>Вариант №{ticket.id}</b>
                                            </Card.Header>
                                            <Card.Body>
                                                <Alert variant='dark'>
                                                    <h6>Количество задач: <b>{ticket.problems.length}</b></h6>
                                                    <h5>
                                                        <Badge
                                                            variant={ticket.is_full_exam_version ? 'success' : 'warning'}>
                                                            {ticket.is_full_exam_version ? 'Полный вариант' : 'Неполный вариант'}
                                                        </Badge>
                                                    </h5>
                                                </Alert>
                                                <ButtonGroup vertical style={{width: '100%'}}>
                                                    <Button
                                                        href={process.env.PUBLIC_URL + '/#/ticket/' + ticket.id}>
                                                        Просмотр варианта
                                                    </Button>

                                                    <Button variant='info'
                                                            href={process.env.PUBLIC_URL + '/#/testing/' + ticket.id}>
                                                        Пройти тестирование
                                                    </Button>
                                                </ButtonGroup>
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        );
    }
}