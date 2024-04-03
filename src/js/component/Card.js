import React from "react";

const Card = (props) => {
    return (
        <div className="card m-4" style={{ width: "18rem", backgroundColor: "white" }}>
            <div className="card-body">
                <img src={props.url} className="card-img-top" alt=""></img>
                <h5 className="card-title mt-2">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <button type="button" class="btn btn-primary position-relative">Find Out More!</button>
            </div>
        </div>
    );
};

export default Card;