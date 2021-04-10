import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {problems_list, tickets_list} from "../StaticData/Tickets";
import {RouteComponentProps} from "react-router";
import {TicketResults} from "../Components/TicketResults";
import {ProblemsResults} from "../Components/ProblemsResults";
import {info_list} from "../StaticData/ProblemsInfo";

interface MatchParams {
    type: string;
    problemsIds: string;
    answersData: string;
}

export interface ProblemsResultPageProps extends RouteComponentProps<MatchParams> {
}

export type ProblemsResultPageState = {}

class ProblemsResultPage extends Component<ProblemsResultPageProps, ProblemsResultPageState> {
    constructor(props: ProblemsResultPageProps) {
        super(props);
        this.state = {};
    }

    render() {
        const {type, problemsIds, answersData} = this.props.match.params;
        const problems = atob(problemsIds).split('@').map((id) => (
            problems_list.find((problem) => problem.id.toString() === id)!!
        ));

        return (
            <>
                <Container fluid='sm'>
                    <Row>
                        <Col className='text-center'>
                            <Button className='btn-top-home text-center' variant={'info'} href={process.env.PUBLIC_URL + '/#/'}>На главную</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='lvl-two-container'>
                            <ProblemsResults problemsInfo={info_list.find((info) => info.num === type)!!}
                                             problemsData={problems}
                                             answers={atob(this.props.match.params.answersData).split('@')}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-center'>
                            <Button className='btn-down-home text-center' variant={'info'} href={process.env.PUBLIC_URL + '/#/'}>На главную</Button>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default ProblemsResultPage;