import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {tickets_list} from "../StaticData/Tickets";
import {RouteComponentProps} from "react-router";
import {TicketResults} from "../Components/TicketResults";

interface MatchParams {
    id: string;
    data: string;
    answersData: string;
}

export interface TicketResultsPageProps extends RouteComponentProps<MatchParams> {
}

export type TicketResultsPageState = {}

class TicketResultsPage extends Component<TicketResultsPageProps, TicketResultsPageState> {
    constructor(props: TicketResultsPageProps) {
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
                            <TicketResults ticketData={tickets_list.find((p) => p.id.toString() === id)!!}
                                           ranks={atob(this.props.match.params.data).split('@')}
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

export default TicketResultsPage;