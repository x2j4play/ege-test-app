import React, {Component} from 'react';
import {ProblemType} from "../Types/ProblemType";
import {Accordion, Alert, Button, Card, FormControl, InputGroup} from "react-bootstrap";
import '../app.css'
import {Link} from "react-router-dom";

export interface ProblemCardTestingProps {
    problemData: ProblemType;
    problemIDX: number;
    changeAnswerCallback: Function;
}

export type ProblemCardTestingState = {
    answerInput: string;
}

export class ProblemCardTesting extends Component<ProblemCardTestingProps, ProblemCardTestingState> {
    constructor(props: ProblemCardTestingProps) {
        super(props);
        this.state = {
            answerInput: '',
        };
    }

    componentDidMount(): void {
    }

    render(): React.ReactNode {
        const {problemData} = this.props;
        const {} = this.state;
        return (
            <Card>
                <Card.Header><b>Задание {problemData.num} <Link
                    to={'/problem/' + problemData.id}>№{problemData.id}</Link></b></Card.Header>
                <Card.Body>
                    <Card.Subtitle>Задача:</Card.Subtitle>
                    <div className='problem-task-block' dangerouslySetInnerHTML={{__html: problemData.task_content}}/>
                    {!problemData.is_detailed_answer &&
                    <InputGroup className="mb-0">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="answer-addon">Ответ</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Введите ответ на задачу"
                            aria-label="answer"
                            aria-describedby="answer-addon"
                            onChange={(e) => this.setState(
                                {answerInput: e.target.value},
                                () => this.props.changeAnswerCallback(
                                    this.props.problemIDX,
                                    e.target.value
                                        .replaceAll('.', ',')
                                        .replaceAll(' ', '')
                                        .replaceAll('@', '')))}
                        />
                    </InputGroup>}
                    {problemData.is_detailed_answer &&
                    <Accordion defaultActiveKey="1">
                        <Accordion.Toggle as={Button} variant='info' eventKey="0">
                            Информация
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Alert variant='info'>Решения заданий с развернутым ответом не проверяются
                                автоматически. <br/>Решите это задание в тетради. После завершения теста вы увидите
                                разбор для самопроверки.</Alert>
                        </Accordion.Collapse>
                    </Accordion>

                    }
                </Card.Body>
            </Card>
        );
    }
}