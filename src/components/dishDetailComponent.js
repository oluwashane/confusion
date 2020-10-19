import React from 'react';
import CommentForm from './CommentForm';
import {Card, CardTitle, CardText, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './loadingComponent'
import { baseUrl } from '../shared/baseUrl'
import { FadeTransform, Fade, Stagger } from 'react-animation-components'

function RenderDish({dish}) {
    return (
        <div className="col-12 col-md-5 m-1">
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5 translateY(-50%)'
                }}>
            <Card>
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </Card>
            </FadeTransform>
        </div>
    )
}

function RenderComment({comments, postComment, dishId}) {
    if (comments != null) {
        const comment = comments.map((comment) => {
            return (
                <Fade in>
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, { new Intl.DateTimeFormat('en-Us', { year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                </Fade>
            )
        })
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    <Stagger in >
                        {comment}
                    </Stagger>
                </ul>
                <CommentForm dishId={dishId} postComment={postComment} />
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
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        ); 
    } else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        ); 
    }
    else if (props.dish != null) {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComment comments={props.comments} postComment={props.postComment} dishId={props.dish.id} />
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
