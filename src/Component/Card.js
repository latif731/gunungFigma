import React from 'react';
import  Gunung from '../aset/img/Rectangle3.png'

const Card = () => {
    return(
        <div className="card">
            <div className="card-image">
                <img src={Gunung} alt=""/>
            </div>
            <div className="card-main">
            <div className="card-body">
             <h3>An Above Average Experience</h3>
             <p>Travel to the premiere mountain tops of New Zealand with our guided tours. Take in the majestic scenary and witness beauty.</p>
            </div>
            <div>
            <i className="button-link fa fa-external-link"/>
            </div>
            </div>
            

        </div>
    )
}

export default Card