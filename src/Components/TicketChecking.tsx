import React, {Component} from 'react';
import {Badge, Button, Card, Col, Container, Row} from "react-bootstrap";
import {TicketType} from "../Types/TicketType";
import '../app.css'
import {ProblemCardChecking} from "./ProblemCardChecking";

export interface TicketCheckingProps {
    ticketData: TicketType;
    answers: string[];
}

export type TicketCheckingState = {
    ranks: number[]
}

export class TicketChecking extends Component<TicketCheckingProps, TicketCheckingState> {
    constructor(props: TicketCheckingProps) {
        super(props);
        this.state = {
            ranks: this.props.answers.map((answer, idx) => (
                this.props.ticketData.problems[idx].is_detailed_answer ? 0 :
                    this.props.ticketData.problems[idx].correct_answer === answer ? 1 : 0
            ))
        };
    }

    render() {
        const {ticketData, answers} = this.props;
        const {ranks} = this.state;
        return (
            <Card>
                <Card.Header as='h5'>Билет №{ticketData.id}
                    <br/>
                    <Badge variant='info'>Проверка части с развернутым ответом</Badge>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Ниже вы можете ознакомиться с решениями заданий части с развернутым ответом и оценить их
                        выполнение самостоятельно.
                        По окончании проверки нажмите кнопку «Подвести итоги», вы будете перенаправлены на страницу с
                        решениями остальных заданий и результатами.
                    </Card.Text>
                    <Container className='lvl-two-container'>
                        {ticketData.problems.filter((problem) => problem.is_detailed_answer).map((problem) => (
                            <Row>
                                <Col>
                                    <ProblemCardChecking problemIDX={ticketData.problems.indexOf(problem)}
                                                         problemData={problem}
                                                         solutionShowedByDefault={true}
                                                         changeRankCallback={(idx: number, rank: number) =>
                                                             this.setState(({ranks}) => ({ranks: [...ranks.slice(0, idx), rank, ...ranks.slice(idx + 1)]}))}/>
                                </Col>
                            </Row>
                        ))}
                        <Row className='row-next-bottom'>
                            <Col>
                                <Button className='btn-next-bottom'
                                        href={process.env.PUBLIC_URL + '/#/results/' + ticketData.id + '/' + btoa(ranks.join('@')) + '/' + btoa(answers.join('@'))}>
                                    Подвести итоги
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        );
    }
}