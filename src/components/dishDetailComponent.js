import React from 'react';
import {Card, CardTitle, CardText, CardImg } from 'reactstrap'


function RenderDish({dish}) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </Card>
        </div>
    )
}

function RenderComment(comments) {
    if (comments != null) {
        console.log(comments)
        const comment = comments.comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author}, { new Intl.DateTimeFormat('en-Us', { year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            )
                        })
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comment}
                </ul>
            </div>
        )
    } else {
        return(
            <div></div>
        )
    }
}
function DishDetail(props) {
    console.log(props.dish)
    if (props.dish != null) {
        return(
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComment comments={props.dish.comments} />
                </div>
            </div>
        )
    } else {
        return(
            <div></div>
        )
    }
}

export default DishDetail
