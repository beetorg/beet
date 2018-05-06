import React from 'react';
import Heart from './Heart';
import Details from './Details';
import { Motion } from 'react-motion';

const Card = (props) => {
  if (props.data.occupied) {
    return (
      <section className="section main-card">
        <div className="container">
          <div className="card">
            <figure className="card-image heart">
              <span className={`signal is-size-8 is-rounded is-uppercase tag ${props.data.signalStatus === 1 || props.data.signalStatus === 2 ? 'is-success' : 'is-danger'}`}>
                Signal: {props.data.statuses[props.data.signalStatus]}
              </span>
              <Heart data={props.data} />
              <h3 className="heartrate title is-4 has-text-light">
                <span className="has-text-grey-dark">0</span>
                {props.data.hr}
              </h3>
              <p className="is-size-7 heartrate-text">BEATS PER MINUTE</p>
            </figure>
            <div className="card-body">
              <Details data={props.data}/>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="section">
      <div className="container">
        <div className="box not-occupied"
          style={{backgroundImage: "url('./sleep.gif')"}}>
          <p className="has-text-light has-text-centered is-size-6 is-upp">Please get in bed to begin tracking.</p>
        </div>
      </div>
    </section>
  );
};

export default Card;