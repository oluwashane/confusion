import React from "react";
import { Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap";


function RenderMenuItem({dishes, onClick}) {
    return (
        <Card  onClick={() => onClick(dishes.id)}>
            <CardImg width="100%" src={dishes.image} alt={dishes.name} />
            <CardImgOverlay>
                <CardTitle>{dishes.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

function Menu(props) {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dishes={dish} onClick={props.onClick}/>
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu
