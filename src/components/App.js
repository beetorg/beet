import React, { Component } from 'react';
import losant from 'losant-rest';

import Header from './Header';
import Card from './Card';
import Line from './Line';
import Api from 'losant-rest';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statuses: [
        'low',
        'ok',
        'high',
        'overload',
        'max',
      ],
      hArray: [],
      hr: 0,
      now: 't' + 0,
      occupants: 1,
      updateInterval: 0,
      respirationRate: 0,
      heartRateVariation: 0,
      signalStrength: 0,
      signalStatus: 'ok',
    }
  }

  componentDidMount() {
    this.callForUpdate();
    this.setState({
      updateInterval: 5000,
    });
  }

  fudge(min, max) {
    return Math.random() * (max - min) + min;
  }

  callForUpdate() {
    setTimeout(() => {
      const client = losant.createClient();
      client.auth.authenticateDevice({ 
        credentials: {
          deviceId: '5aedf95eb107570008305734',
          key: '7472a9c2-dc4f-4d10-964c-0fbb2f7a9ca9',
          secret: '85f7ee26e81e4f1e0ab3fbd70adc5f07305e68e4c5fea88d047e21b2f1151167'
      }}).then((res) => {
        client.setOption('accessToken', res.token);
        const params = {
          applicationId: res.applicationId,
          deviceId: res.deviceId
        }

        client.device.getState(params).then(res => {
          const data = res[0].data;
          console.log(data);
          this.setState({
            hArray: [...this.state.hArray, data.hr],
            hr: data.hr,

          });
          this.callForUpdate();
        });
      });
    }, this.state.updateInterval,);
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <Card data={{...this.state}}/>
        <Line data={this.state.hArray}/>
      </div>
    );
  }
}

export default App;
