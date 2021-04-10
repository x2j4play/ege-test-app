import React, {Component} from 'react';
import {Alert, Badge, Card, Col, Container, Row, Tab, Table, Tabs} from "react-bootstrap";
import {TicketType} from "../Types/TicketType";
import '../app.css'
import {Link} from "react-router-dom";
import {ProblemCardDisplay} from "./ProblemCardDisplay";
import {conversion_table} from "../StaticData/ConversionTables";
import {ProblemsInfoType} from "../StaticData/ProblemsInfo";
import {ProblemType} from "../Types/ProblemType";

export interface ProblemsResultsProps {
    problemsInfo: ProblemsInfoType;
    problemsData: ProblemType[];
    answers: string[];
}

export type ProblemsResultsState = {}

export class ProblemsResults extends Component<ProblemsResultsProps, ProblemsResultsState> {
    constructor(props: ProblemsResultsProps) {
        super(props);
        this.state = {};
    }

    render() {
        const {problemsData, answers, problemsInfo} = this.props;

        const ranks: string[] = this.props.answers.map((answer, idx) => (
            problemsData[idx].correct_answer === answer ? '1' : '0'
        ))
        const score: number = ranks.reduce((a, b) => a + parseInt(b), 0);
        const succ_count: number = ranks.filter((r) => r !== '0').length;

        return (
            <Card>
                <Card.Header as='h5'>
                    Задания {problemsInfo.num}-го типа. {problemsInfo.name}
                    <br/>
                    <Badge variant='info'>Результаты</Badge>
                </Card.Header>
                <Card.Body>
                    <Container className='lvl-two-container'>
                        <Row>
                            <Col>
                                <Table hover bordered responsive size="sm">
                                    <thead>
                                    <tr>
                                        <th>№ п/п</th>
                                        <th>Номер в каталоге</th>
                                        <th>Ваш ответ</th>
                                        <th>Правильный ответ</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {problemsData.filter((problem) => !problem.is_detailed_answer).map((problem, idx) => (
                                        <tr>
                                            <td>
                                                {idx + 1}
                                            </td>
                                            <td>
                                                <Link to={'/problem/' + problem.id}>{problem.id}</Link>
                                            </td>
                                            <td style={{
                                                backgroundColor: answers[idx] === '' ?
                                                    'gainsboro' : parseInt(ranks[idx]) > 0 ?
                                                        '#c0ffc0' : '#ffc0c0'
                                            }}>
                                                {answers[idx] === '' ? 'без ответа' : answers[idx]}
                                            </td>
                                            <td>
                                                {problem.correct_answer}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card.Text>
                                    <Alert variant='info'>
                                        Вы решили {succ_count} из {ranks.length} заданий, набрали {score} первичных
                                        баллов.
                                    </Alert>
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card.Title as='h5'>
                                    Решения
                                </Card.Title>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Tabs defaultActiveKey="all" variant='pills' id="tabs-problems"
                                      style={{paddingLeft: '0.7rem'}}>
                                    <Tab eventKey="all" title="Всех заданий">
                                        {problemsData.filter((problem) => !problem.is_detailed_answer).map((problem, idx) => (
                                            <ProblemCardDisplay problemData={problem}
                                                                solutionShowedByDefault={false}
                                                                showResultBadge={true}
                                                                isCorrectAnswer={ranks[idx] !== '0'}
                                                                userAnswer={answers[idx] === '' ? 'без ответа' : answers[idx]}/>
                                        ))}
                                    </Tab>
                                    <Tab eventKey="wrong" title="Неверно решенных заданий">
                                        {problemsData.filter((problem) => !problem.is_detailed_answer).map((problem, idx) => (
                                            ranks[idx] === '0' ? <ProblemCardDisplay problemData={problem}
                                                                                     solutionShowedByDefault={false}
                                                                                     showResultBadge={true}
                                                                                     isCorrectAnswer={ranks[idx] !== '0'}
                                                                                     userAnswer={answers[idx] === '' ? 'без ответа' : answers[idx]}/> : <></>
                                        ))}
                                    </Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        );
    }
}