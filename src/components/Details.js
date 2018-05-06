import React from 'react';

const Details = (props) => (
  <section className="section">
    <div className="level is-mobile">
      <div className="level-left">
        <p className="is-size-7 is-uppercase">Respiration Rate</p>
      </div>
      <div className="level-right">
        <p>
          {props.data.respirationRate}
          <span className="is-size-7 is-uppercase">/min</span>
        </p>
      </div>
    </div>
    <hr/>

    <div className="level is-mobile">
      <div className="level-left">
        <p className="is-size-7 is-uppercase">Heart Rate Variability</p>
      </div>
      <div className="level-right">
        <p>{props.data.hr}</p>
        <span className="is-size-7 is-uppercase">&nbsp;ms</span>
      </div>
    </div>
    <hr/>

    <div className="level is-mobile">
      <div className="level-left">
        <p className="is-size-7 is-uppercase">Air Quality</p>
      </div>
      <div className="level-right">
        <p className="is-size-7 has-text-success">{props.data.air}</p>
      </div>
    </div>
    <hr/>

    <div className="level is-mobile">
      <div className="level-left">
        <p className="is-size-7 is-uppercase">Bed Occupied?</p>
      </div>
      <div className="level-right">
        <p className={`is-size-7 is-uppercase ${props.data.occupied ? 'has-text-success' : 'has-text-danger'}`}>
          {props.data.occupants === 1 ? 'No' : 'Yes'}
        </p>
      </div>
    </div>
    <hr/>

    <div className="level is-mobile">
      <div className="level-left">
        <p className="is-size-7 is-uppercase">Signal Strength</p>
      </div>
      <div className="level-right">
        <p className="is-size-7">{(props.data.signalStrength / 30).toFixed()}</p>
        <span className="is-size-7 is-uppercase">%</span>
      </div>
    </div>
  </section>
);

export default Details;