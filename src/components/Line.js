import React, { Component } from 'react';
import { Sparklines, SparklinesCurve } from 'react-sparklines';

class Line extends Component {
  render() {
    if (!this.props.occupied) {
      return null;
    }
    
    return (
      <div className="line">
        <Sparklines
          height={50}
          data={this.props.data}
          limit={20}
        >
          <SparklinesCurve 
            color="#fff"
            style={{fill: "none", stroke: "#fff", strokeWidth: 1}}/>
        </Sparklines>
      </div>
    );
    
  }
}

export default Line;