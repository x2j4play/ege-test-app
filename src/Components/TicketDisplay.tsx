import React, {Component} from 'react';
import {Badge, Button, Card, Col, Container, Row} from "react-bootstrap";
import {ProblemCardTesting} from "./ProblemCardTesting";
import {TicketType} from "../Types/TicketType";
import '../app.css'
import {ProblemCardDisplay} from "./ProblemCardDisplay";

export interface TicketDisplayProps {
    ticketData: TicketType;
}

export type TicketDisplayState = {}

class TicketDisplay extends Component<TicketDisplayProps, TicketDisplayState> {
    constructor(props: TicketDisplayProps) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {
    }

    render() {
        const {ticketData} = this.props;
        return (
            <Card>
                <Card.Header as='h5'>
                    Билет №{ticketData.id}
                    <br/>
                    <Badge variant='info'>Просмотр билета</Badge>
                </Card.Header>
                <Card.Body>
                    {ticketData.description_content !== undefined &&
                    <Card.Text>
                        <div dangerouslySetInnerHTML={{__html: ticketData.description_content}}/>
                    </Card.Text>}
                    <Container className='lvl-two-container'>
                        {ticketData.problems.map((problem) => (
                            <Row>
                                <Col>
                                    <ProblemCardDisplay problemData={problem} solutionShowedByDefault={false} showResultBadge={false}/>
                                </Col>
                            </Row>
                        ))}
                    </Container>
                </Card.Body>
            </Card>
        );
    }
}

export default TicketDisplay;