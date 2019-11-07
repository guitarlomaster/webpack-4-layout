import React from 'react';

const user = (props) => {
    return (
        <div className="user-card users__item">
            <div className="user-card__left users__item-l">
                <img src={props.avatar} alt={props.firstName}/>
            </div>
            <div className="user-card__right users__item-r">
                <h3>{props.firstName} {props.lastName}</h3>
                <p>Email: {props.email}</p>
            </div>
        </div>
    )
};
export default user;
