import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button'

export class OverViewTab extends Component {
    render() {
        const { isAuthenticated } = this.props.auth0;

        return (
            <div>
                <h3>{this.props.original_title}</h3>
                <p>{this.props.vote_average}</p>
                <p>{this.props.release_date}</p>
                <p>{this.props.overview}</p>
                {isAuthenticated &&
                    <div style={{ float: 'right' }}>
                        <Button onClick={(e) => this.props.addFavorite(e)} variant="secondary">Add To Favorite</Button>
                        <Button onClick={(e) => this.props.addToWatch(e)} variant="secondary">Add To Watch List</Button>
                    </div>
                }
            </div>
        )
    }
}

export default withAuth0(OverViewTab)
