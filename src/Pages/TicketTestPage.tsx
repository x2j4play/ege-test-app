import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import TicketTesting from "../Components/TicketTesting";
import {tickets_list} from "../StaticData/Tickets";
import {TicketChecking} from "../Components/TicketChecking";
import {RouteComponentProps} from "react-router";
import TicketDisplay from "../Components/TicketDisplay";

interface MatchParams {
    id: string;
}

export interface TicketTestPageProps extends RouteComponentProps<MatchParams> {
}

export type TicketTestPageState = {}

class TicketTestPage extends Component<TicketTestPageProps, TicketTestPageState> {
    constructor(props: TicketTestPageProps) {
        super(props);
        this.state = {};
    }

    render() {
        const {id} = this.props.match.params
        return (
            <Container fluid='sm'>
                <Row>
                    <Col className='text-center'>
                        <Button className='btn-top-home text-center' variant={'info'} href={process.env.PUBLIC_URL + '/#/'}>На главную</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className='lvl-two-container'>
                        <TicketTesting ticketData={tickets_list.find((p) => p.id.toString() === id)!!}/>
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

export default TicketTestPage;