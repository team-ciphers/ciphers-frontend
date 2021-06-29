import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withAuth0 } from "@auth0/auth0-react";

export class Reviews extends Component {
    render() {
        const { isAuthenticated } = this.props.auth0;

        return (
            <div>
                {
                isAuthenticated?
                <Form onSubmit={(e)=>this.props.createReview(e)}>
                    <Form.Group className="mb-3" controlId="review">
                        <Form.Label>write you stupid review</Form.Label>
                        <Form.Control type="text" placeholder="write you stupid review" />
                    </Form.Group>
                    < Button  type="submit">submit</Button>
                </Form>
                :
                <p>please</p>
    }
                {
                    this.props.reviewsList.map((item) => {
                        return (
                            <ListGroup>
                                <ListGroup.Item variant="danger">{item.email}<br />{item.text}</ListGroup.Item>
                            </ListGroup>
                        )
                    })

                }

            </div>
        )
    }
}

export default withAuth0(Reviews)
