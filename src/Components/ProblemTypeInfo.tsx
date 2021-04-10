import React, {Component} from 'react';
import {ProblemType} from "../Types/ProblemType";
import {Badge, Button, Card, Collapse} from "react-bootstrap";
import '../app.css'
import {Link} from "react-router-dom";

export interface ProblemCardDisplayProps {
    problemData: ProblemType;
    solutionShowedByDefault: boolean;
    showResultBadge: boolean;
    isCorrectAnswer?: boolean;
    userAnswer?: string;
}

export type ProblemCardDisplayState = {
    solutionShowed: boolean;
}

export class ProblemCardDisplay extends Component<ProblemCardDisplayProps, ProblemCardDisplayState> {
    constructor(props: ProblemCardDisplayProps) {
        super(props);
        this.state = {
            solutionShowed: props.solutionShowedByDefault,
        };
    }

    componentDidMount(): void {
    }

    render(): React.ReactNode {
        const {problemData, showResultBadge, isCorrectAnswer, userAnswer} = this.props;
        const {solutionShowed} = this.state;
        return (
            <Card>
                <Card.Header>
                    <b>Задание {problemData.num} <Link to={'/problem/' + problemData.id}>№{problemData.id}</Link></b>
                    {showResultBadge &&
                    <>
                        &nbsp;
                        <Badge variant={isCorrectAnswer ? 'success' : 'danger'}>
                            {isCorrectAnswer ? 'Решено верно' : 'Решено неверно или не решено'}
                        </Badge>
                    </>}
                </Card.Header>
                <Card.Body>
                    <Card.Title>Задача:</Card.Title>
                    <div className='problem-task-block' dangerouslySetInnerHTML={{__html: problemData.task_content}}/>
                    <Collapse  in={solutionShowed}>
                        <div>
                            <Card.Title>Решение:</Card.Title>
                            <div className='problem-solution-block'
                                 dangerouslySetInnerHTML={{__html: problemData.solution_content}}/>

                            {showResultBadge &&
                            <Card.Title>
                                <Badge variant='info'>Ваш ответ: <Badge pill variant='light'>{userAnswer}</Badge></Badge>
                            </Card.Title>}
                            <br/>
                        </div>
                    </Collapse>
                    <Button className='show-solution-btn'
                            variant="primary"
                            onClick={() => this.setState({solutionShowed: !solutionShowed})}>
                        {solutionShowed ? 'Скрыть решение' : 'Показать решение'}
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}