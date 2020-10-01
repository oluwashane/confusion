import React from "react";
import { Card, CardImg, CardTitle, CardImgOverlay, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
import { Loading } from './loadingComponent'
import { baseUrl } from '../shared/baseUrl'


function RenderMenuItem({dishes}) {
    return (
        <Card>
            <Link to={`/menu/${dishes.id}`}>
                <CardImg width="100%" src={baseUrl + dishes.image} alt={dishes.name} />
                <CardImgOverlay>
                    <CardTitle>{dishes.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    )
}

function Menu(props) {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dishes={dish}/>
            </div>
        );
    })

    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    } else if (props.errormessage) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errormessage}</h4>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu
