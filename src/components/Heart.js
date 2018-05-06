import React, { Component } from 'react';
import { Motion, spring, presets } from 'react-motion';
import styled from 'styled-components';

const Circle = styled.div`
  border-radius: 50%;
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  opacity: ${(props) => props.opacity};
  margin: 0 auto;
  border: 2px solid palevioletred;
`

class Heart extends Component {
  render() {
    return(
      <div className="heart">
      
        <Circle
          width={200}
          height={200}
          opacity={1} />
        
        <Motion 
          key={this.props.data.hr}
          defaultStyle={{opacity: 0}} 
          style={{opacity: spring(1)}}>
          {values => (
            <h3 
              className="heartrate title is-3"
              style={{opacity: values.opacity}}>
                {this.props.data.hr}
            </h3>
          )}
        </Motion>
        <p className="is-size-7 heartrate-text">BEATS PER MINUTE</p>
      </div>
    );
    
  }
}

export default Heart;

// <Motion
      //   key={this.state.now}
      //   defaultStyle={{
      //     diameter: 0,
      //     opacity: 1,
      //   }}
      //   style={{
      //     diameter: spring(200, presets.gentle), 
      //     opacity: spring(0, presets.gentle),
      //   }}
      // >
      //   {(style) => (
      //     <Circle 
      //       key={this.props.now}
      //       width={style.diameter} 
      //       height={style.diameter} 
      //       opacity={style.opacity}/>
      //   )}
      // </Motion>