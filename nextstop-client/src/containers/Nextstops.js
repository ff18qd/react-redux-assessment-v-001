import React from 'react';
import './Nextstops.css';

const Nextstops = (props) => (
    <div>
        <h1>Nextstops</h1>
        { props.nextstops.map(n => 
            <div key={n.id} className="NextstopCard">
                <h3>{n.name}</h3>
                <img className="NextstopImage" src={n.img_url} alt={n.name} />
                <p>Budget: ${n.budget}</p>
                <p>Like: {n.like}</p>
                <p>Dislike: {n.dislike}</p>
            </div>
            )}
    </div>
)
    
export default Nextstops;
