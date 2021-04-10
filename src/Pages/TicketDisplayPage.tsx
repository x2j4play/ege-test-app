import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {tickets_list} from "../StaticData/Tickets";
import TicketDisplay from "../Components/TicketDisplay";
import {RouteComponentProps} from "react-router";

interface MatchParams {
    id: string;
}

export interface TicketDisplayPageProps extends RouteComponentProps<MatchParams> {
}

export type TicketDisplayPageState = {}

class TicketDisplayPage extends Component<TicketDisplayPageProps, TicketDisplayPageState> {
    constructor(props: TicketDisplayPageProps) {
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
                        <TicketDisplay ticketData={tickets_list.find((p) => p.id.toString() === id)!!}/>
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

export default TicketDisplayPage;