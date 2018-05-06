import React from 'react';
import Heart from './Heart';
import Details from './Details';

const Card = (props) => (
  <section className="section">
    <div className="container">
      <div className="card">
        <figure className="card-image">
          <Heart data={props.data} />
        </figure>
        <div className="card-body">
          <Details data={props.data}/>
        </div>
      </div>
    </div>
  </section>
);

export default Card;