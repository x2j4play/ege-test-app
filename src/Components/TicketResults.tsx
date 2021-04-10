import React, {Component} from 'react';
import {Alert, Badge, Card, Col, Container, Row, Tab, Table, Tabs} from "react-bootstrap";
import {TicketType} from "../Types/TicketType";
import '../app.css'
import {Link} from "react-router-dom";
import {ProblemCardDisplay} from "./ProblemCardDisplay";
import {conversion_table} from "../StaticData/ConversionTables";

export interface TicketResultsProps {
    ticketData: TicketType;
    ranks: string[];
    answers: string[];
}

export type TicketResultsState = {}

export class TicketResults extends Component<TicketResultsProps, TicketResultsState> {
    constructor(props: TicketResultsProps) {
        super(props);
        this.state = {};
    }

    render() {
        const {ticketData, ranks, answers} = this.props;
        const score: number = ranks.reduce((a, b) => a + parseInt(b), 0);
        const converted_score: number = conversion_table.year2021.table[score];
        const succ_count: number = ranks.filter((r) => r !== '0').length;
        return (
            <Card>
                <Card.Header as='h5'>Билет №{ticketData.id}
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
                                        <th>Тип</th>
                                        <th>Ваш ответ</th>
                                        <th>Правильный ответ</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {ticketData.problems.filter((problem) => !problem.is_detailed_answer).map((problem, idx) => (
                                        <tr>
                                            <td>
                                                {idx + 1}
                                            </td>
                                            <td>
                                                <Link to={'/problem/' + problem.id}>{problem.id}</Link>
                                            </td>
                                            <td>
                                                {problem.num}
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
                                    <thead>
                                    <tr>
                                        <th>№ п/п</th>
                                        <th>Номер в каталоге</th>
                                        <th>Тип</th>
                                        <th>Ваш балл</th>
                                        <th>Максимальный балл</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {ticketData.problems.filter((problem) => problem.is_detailed_answer).map((problem) => (
                                        <tr>
                                            <td>
                                                {ticketData.problems.indexOf(problem)}
                                            </td>
                                            <td>
                                                <Link to={'/problem/' + problem.id}>{problem.id}</Link>
                                            </td>
                                            <td>
                                                {problem.num}
                                            </td>
                                            <td style={{
                                                backgroundColor:
                                                    parseInt(ranks[ticketData.problems.indexOf(problem)]) > 0 &&
                                                    parseInt(ranks[ticketData.problems.indexOf(problem)]) < Math.max.apply(Math, problem.criteria!!.map((c) => c.score)) ?
                                                        '#ffffc0' : parseInt(ranks[ticketData.problems.indexOf(problem)]) !== 0 ?
                                                        '#c0ffc0' : '#ffc0c0'
                                            }}>
                                                {ranks[ticketData.problems.indexOf(problem)]}
                                            </td>
                                            <td>
                                                {Math.max.apply(Math, problem.criteria!!.map((c) => c.score))}
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
                                    {ticketData.is_full_exam_version &&
                                    <Alert variant='info'>
                                        Вы решили {succ_count} из {ranks.length} заданий и
                                        набрали {score} первичных баллов, что соответствует {converted_score} баллов по
                                        стобалльной шкале. Минимальный порог 2021 года
                                        составляет {conversion_table.year2021.min[1]} баллов,
                                        порог {conversion_table.year2021.min[1] > score ? 'не пройден' : 'пройден'}.
                                    </Alert>}
                                    {!ticketData.is_full_exam_version &&
                                    <Alert variant='info'>
                                        Вы решили {succ_count} из {ranks.length} заданий, набрали {score} первичных
                                        баллов. (Ваши баллы не переведены в стобалльную шкалу, поскольку решенный
                                        вариант не аналогичен экзаменационному варианту).
                                    </Alert>}
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
                                        {ticketData.problems.filter((problem) => !problem.is_detailed_answer).map((problem, idx) => (
                                            <ProblemCardDisplay problemData={problem}
                                                                solutionShowedByDefault={false}
                                                                showResultBadge={true}
                                                                isCorrectAnswer={ranks[idx] !== '0'}
                                                                userAnswer={answers[idx] === '' ? 'без ответа' : answers[idx]}/>
                                        ))}
                                    </Tab>
                                    <Tab eventKey="wrong" title="Неверно решенных заданий">
                                        {ticketData.problems.filter((problem) => !problem.is_detailed_answer).map((problem, idx) => (
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