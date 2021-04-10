import React, {Component} from 'react';
import {Badge, Button, Card, Col, Container, Row} from "react-bootstrap";
import {ProblemCardTesting} from "./ProblemCardTesting";
import {TicketType} from "../Types/TicketType";
import '../app.css'
import {ProblemType} from "../Types/ProblemType";
import {ProblemsInfoType} from "../StaticData/ProblemsInfo";

export interface ProblemsRandomTestingProps {
    problemsInfo: ProblemsInfoType;
    problems_list: ProblemType[];

}

export type ProblemsRandomTestingState = {
    answers: string[];
}

class ProblemsRandomTesting extends Component<ProblemsRandomTestingProps, ProblemsRandomTestingState> {
    constructor(props: ProblemsRandomTestingProps) {
        super(props);
        this.state = {
            answers: this.props.problems_list.map(() => ''),
        };

    }

    render() {
        const {problems_list, problemsInfo} = this.props;
        const {answers} = this.state;
        return (
            <Card>
                <Card.Header as='h5'>
                    Задания {problemsInfo.num}-го типа. {problemsInfo.name}
                    <br/>
                    <Badge variant='info'>Тестирование</Badge>
                </Card.Header>
                <Card.Body>
                    {problemsInfo.description}
                    <Container className='lvl-two-container'>
                        {problems_list.map((problem, idx) => (
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
                                        href={process.env.PUBLIC_URL + '/#/problemsResults/' + problemsInfo.num + '/' + btoa(problems_list.map((p) => p.id).join('@')) + '/' + btoa(answers.join('@'))}>
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

export default ProblemsRandomTesting;