import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export class SearchForm extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Form onSubmit={this.props.MovieSearchByName} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Search </Form.Label>
                            <Form.Control onChange={this.props.getMovieName} type="text" placeholder="Search for a movie" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Search
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default SearchForm
