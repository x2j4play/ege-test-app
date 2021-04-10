import React, {Component} from 'react';
import {ProblemType} from "../Types/ProblemType";
import {Card, Collapse, Table} from "react-bootstrap";
import '../app.css'
import {Link} from "react-router-dom";

export interface ProblemCardCheckingProps {
    problemData: ProblemType;
    solutionShowedByDefault: boolean;
    problemIDX: number;
    changeRankCallback: Function;
}

export type ProblemCardCheckingState = {
    solutionShowed: boolean;
    solutionRateRadioValue: string;
}


export class ProblemCardChecking extends Component<ProblemCardCheckingProps, ProblemCardCheckingState> {
    constructor(props: ProblemCardCheckingProps) {
        super(props);
        this.state = {
            solutionShowed: true,
            solutionRateRadioValue: '0'
        };
    }

    componentDidMount(): void {
    }

    render(): React.ReactNode {
        const {problemData, problemIDX} = this.props;
        const {solutionShowed, solutionRateRadioValue} = this.state;
        return (
            <Card>
                <Card.Header><b>Задание {problemData.num} <Link
                    to={'/problem/' + problemData.id}>№{problemData.id}</Link></b></Card.Header>
                <Card.Body>
                    <Card.Subtitle>Задача:</Card.Subtitle>
                    <div className='problem-task-block' dangerouslySetInnerHTML={{__html: problemData.task_content}}/>
                    <Collapse in={solutionShowed}>
                        <div>
                            <Card.Subtitle>Решение:</Card.Subtitle>
                            <div className='problem-solution-block'
                                 dangerouslySetInnerHTML={{__html: problemData.solution_content}}/>
                        </div>
                    </Collapse>
                    <div>
                        <Table bordered size="sm">
                            <thead>
                            <tr>
                                <th>Баллы</th>
                                <th>Критерии оценивания выполнения задания</th>
                            </tr>
                            </thead>
                            <tbody>
                            {problemData.criteria!!.map((criterion, idx) => (
                                <tr>
                                    <td>
                                        <label style={{marginLeft: '0.5em'}}>
                                            <input type="radio"
                                                   value={criterion.score}
                                                   checked={solutionRateRadioValue === criterion.score.toString()}
                                                   onChange={(e) => this.setState({solutionRateRadioValue: e.currentTarget.value},
                                                       () => this.props.changeRankCallback(
                                                           problemIDX,
                                                           parseInt(e.target.value)
                                                       ))}/>
                                            <span style={{marginLeft: '0.3em'}}><b>{criterion.score}</b></span>
                                        </label>
                                    </td>
                                    <td>{criterion.text}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}