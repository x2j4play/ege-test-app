import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {tickets_list} from "../StaticData/Tickets";
import {TicketChecking} from "../Components/TicketChecking";
import {RouteComponentProps} from "react-router";

interface MatchParams {
    id: string;
    data: string;
}

export interface TicketCheckPageProps extends RouteComponentProps<MatchParams> {
}

export type TicketCheckPageState = {}

class TicketCheckPage extends Component<TicketCheckPageProps, TicketCheckPageState> {
    constructor(props: TicketCheckPageProps) {
        super(props);
        this.state = {};
    }

    render() {
        const {id} = this.props.match.params
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
                            <TicketChecking ticketData={tickets_list.find((p) => p.id.toString() === id)!!}
                                            answers={atob(this.props.match.params.data).split('@')}/>
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

export default TicketCheckPage;