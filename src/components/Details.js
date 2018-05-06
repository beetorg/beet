import React from 'react';

const Details = (props) => (
  <section className="section">
    <div className="level is-mobile">
      <div className="level-left">
        <p>Chance of pregnancy</p>
      </div>
      <div className="level-right">
        <p>{props.data.hr}%</p>
      </div>
    </div>
    <hr/>

    <div className="level is-mobile">
      <div className="level-left">
        <p>Diabetes?</p>
      </div>
      <div className="level-right">
        <p>{props.data.refreshRate}/1500</p>
      </div>
    </div>
    <hr/>

    <div className="level is-mobile">
      <div className="level-left">
        <p>Bed Buddy?</p>
      </div>
      <div className="level-right">
        <p>{props.data.occupants === 1 ? 'No' : 'Yes'}</p>
      </div>
    </div>
    <hr/>

    <div className="level is-mobile">
      <div className="level-left">
        <p>Stroke?</p>
      </div>
      <div className="level-right">
        <p>Happening</p>
      </div>
    </div>
    <hr/>
  </section>
);

export default Details;