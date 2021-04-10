import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import TicketTesting from "../Components/TicketTesting";
import {problems_list, tickets_list} from "../StaticData/Tickets";
import {TicketChecking} from "../Components/TicketChecking";
import {RouteComponentProps} from "react-router";
import TicketDisplay from "../Components/TicketDisplay";
import ProblemsRandomTesting from "../Components/ProblemsRandomTesting";
import {info_list} from "../StaticData/ProblemsInfo";

interface MatchParams {
    type: string;
}

export interface ProblemsTestingPageProps extends RouteComponentProps<MatchParams> {
}

export type ProblemsTestingPageState = {}

class ProblemsTestingPage extends Component<ProblemsTestingPageProps, ProblemsTestingPageState> {
    constructor(props: ProblemsTestingPageProps) {
        super(props);
        this.state = {};
    }

    render() {
        const {type} = this.props.match.params
        return (
            <Container fluid='sm'>
                <Row>
                    <Col className='text-center'>
                        <Button className='btn-top-home text-center' variant={'info'} href={process.env.PUBLIC_URL + '/#/'}>На главную</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className='lvl-two-container'>
                        <ProblemsRandomTesting problemsInfo={info_list.find((info) => info.num === type)!!} problems_list={problems_list.filter((p) => p.num === type).sort( () => .5 - Math.random()).slice(0,10)}/>
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

export default ProblemsTestingPage;