import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import '../app.css'
import {RouteComponentProps} from "react-router";
import {ProblemCardDisplay} from "../Components/ProblemCardDisplay";
import {problems_list} from "../StaticData/Tickets";

interface MatchParams {
    id: string;
}

export interface ProblemPageProps extends RouteComponentProps<MatchParams> {
}

export type ProblemPageState = {}

export class ProblemPage extends Component<ProblemPageProps, ProblemPageState> {
    constructor(props: ProblemPageProps) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {
    }

    render() {
        const {id} = this.props.match.params
        return (
            <Container  fluid='sm'>
                <Row>
                    <Col className='text-center'>
                        <Button className='btn-top-home text-center' variant={'info'} href={process.env.PUBLIC_URL + '/#/'}>На главную</Button>
                    </Col>
                </Row>
                <Row>
                    <Col style={{paddingRight: 0, paddingLeft: 0}}>
                        <ProblemCardDisplay problemData={problems_list.find((p) => p.id.toString() === id)!!}
                                            solutionShowedByDefault={true}
                                            showResultBadge={false}/>
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