import React from 'react';
import { Card, CardBody, CardImg, CardText, CardSubtitle, CardTitle } from 'reactstrap';
import { Loading } from './loadingComponent'
import { baseUrl } from '../shared/baseUrl'

function RenderCard({item, isLoading, errormessage}) {
    if (isLoading) {
        return (
            <Loading />
        )
    } else if (errormessage) {
        return (
            <h4>{errormessage}</h4>
        )
    } else {
        return (
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name}/>
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>: null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        )
    }
}

function Home(props) {
    console.log(props)
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errormessage={props.dishesErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading={props.promosLoading} errormessage={props.promosErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    )
}

export default Home
