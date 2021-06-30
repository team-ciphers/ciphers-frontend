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
                {isAuthenticated && (!this.props.buttonHideFlag ?
                    < div style={{ float: 'right' }}>
                        <Button style={{ margin: "0 20px 0 0" }} onClick={(e) => this.props.addFavorite(e)} variant="secondary" >Add To Favorite</Button>
                        <Button style={{ margin: "0 20px 0 0" }} onClick={(e) => this.props.addToWatch(e)} variant="secondary" >Add To Watch List</Button>
                    </div>
                    :
                    <Button style={{ float: 'right', margin: "10px 20px 10px 0" }} variant="secondary" >Already added to your list</Button>
                )
                }
            </div>
        )
    }
}

export default withAuth0(OverViewTab)
