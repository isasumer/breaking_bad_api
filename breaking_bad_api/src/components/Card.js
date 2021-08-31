import React from 'react'

const Card = ( {item}) => {
    return (
        <div className="card">
            <img src={item.img} alt="img" />
            <div className="card-info">
                <h1>{item.name}</h1>
                <h3>{item.nickname}</h3>
                <p>{item.birthday}</p>
                <p>{item.status}</p>
            </div>


            
        </div>
    );
};

export default Card
