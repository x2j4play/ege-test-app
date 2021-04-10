import React, {Component} from 'react';
import {Badge, Button, Card, Col, Container, Row} from "react-bootstrap";
import {ProblemCardTesting} from "./ProblemCardTesting";
import {TicketType} from "../Types/TicketType";
import '../app.css'

export interface TicketTestingProps {
    ticketData: TicketType;

}

export type TicketTestingState = {
    answers: string[]
}

class TicketTesting extends Component<TicketTestingProps, TicketTestingState> {
    constructor(props: TicketTestingProps) {
        super(props);
        this.state = {
            answers: this.props.ticketData.problems.map(() => ''),
        };

    }

    render() {
        const {ticketData} = this.props;
        const {answers} = this.state;
        return (
            <Card>
                <Card.Header as='h5'>
                    Билет №{ticketData.id}
                    <br/>
                    <Badge variant='info'>Тестирование</Badge>
                </Card.Header>
                <Card.Body>
                    {ticketData.description_content !== undefined &&
                    <Card.Text>
                        <div dangerouslySetInnerHTML={{__html: ticketData.description_content}}/>
                    </Card.Text>}
                    <Container className='lvl-two-container'>
                        {ticketData.problems.map((problem, idx) => (
                            <Row>
                                <Col>
                                    <ProblemCardTesting problemData={problem} problemIDX={idx}
                                                        changeAnswerCallback={(idx: number, answer: string) =>
                                                            this.setState(({answers}) =>
                                                                ({answers: [...answers.slice(0, idx), answer, ...answers.slice(idx + 1)]}))}/>
                                </Col>
                            </Row>
                        ))}
                        <Row className='row-next-bottom'>
                            <Col>
                                <Button className='btn-next-bottom'
                                        href={process.env.PUBLIC_URL + '/#/checking/' + ticketData.id + '/' + btoa(answers.join('@'))}>
                                    Завершить тестирование и свериться с ответами
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>

            </Card>
        );
    }
}

export default TicketTesting;

