import React, { Component } from 'react';

class Heart extends Component {
  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    const width = this.refs.canvas.width;
    const height = this.refs.canvas.height;

    // clear canvas
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, width, height);

    this.drawMainCircle(ctx);
  }

  drawMainCircle(ctx) {
    ctx.beginPath();

    const radius = (Math.random * 100).toFixed();
    ctx.arc(150, 150, radius, 0, Math.PI * 2, false);
    ctx.closePath();

    ctx.fillStyle = '#E63946';
    ctx.fill();
  }

  render() {
    return(
      <figure className="card-image">
        <canvas ref="canvas" width={300} height={300} />
      </figure>
    );
  }
}

export default Heart;