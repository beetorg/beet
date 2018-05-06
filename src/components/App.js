import React, { Component } from 'react';
import losant from 'losant-rest';
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';

import Header from './Header';
import Card from './Card';
import Line from './Line';

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
      occupied: false,
      updateInterval: 0,
      respirationRate: 0,
      heartRateVariation: 0,
      signalStrength: 0,
      signalStatus: 1,
      apiStatus: {},
      hrSent: false,
      rrSent: false,
      sdSent: false,
      air: 'GOOD',
      pulseOximetry: 99,
    }
  }

  componentDidMount() {
    this.deviceUpdate();
    this.serverUpdate();
    this.setState({
      updateInterval: 2000,
    });
  }

  checkStatuses() {
    if (this.state.apiStatus.hrSent && !this.state.hrSent) {
      notify.show('Abnormal HR sent to physician', 'error');
      this.setState({hrSent: true});
    }

    if (this.state.apiStatus.rrSent && !this.state.rrSent) {
      notify.show('Abnormal RR sent to physician', 'error');
      this.setState({rrSent: true});
    }

    if (this.state.apiStatus.sleepDataSent && !this.state.sdSent) {
      notify.show('Sleep data sent to physician', 'success');
      this.setState({sdSent: true});
    } 
  }

  fudge(min, max) {
    return Math.random() * (max - min) + min;
  }

  serverUpdate() {
    setTimeout(() => {
      axios.get('http://localhost:5000/apiStatus').then(res => {
        this.setState({
          apiStatus: res.data,
        })
        this.serverUpdate();
        this.checkStatuses();
      });
    }, this.state.updateInterval); 
  }

  deviceUpdate() {
    setTimeout(() => {
      const client = losant.createClient();
      client.auth.authenticateDevice({ 
        credentials: {
          deviceId: '5aef11baa427070008722a63',
          key: '315af937-7996-4f8e-86a3-fec56e87c2e8',
          secret: '6c03e2bc262c6be6e09996a740897378a2cd40ab486812b80863a01a2706d765'
      }}).then((res) => {
        client.setOption('accessToken', res.token);
        const params = {
          applicationId: res.applicationId,
          deviceId: res.deviceId
        }

        client.device.getState(params).then(res => {
          const data = res[0].data;
          console.log(data);
          const oldHr = this.state.hr;
          this.setState({
            hArray: [...this.state.hArray, data.hr || 0],
            hr: data.hr,
            occupied: true,
            signalStrength: data.ss,
            signalStatus: data.status,
            respirationRate: data.rr,
            heartRateVariation: data.hrv
          });
        });
      });
      this.deviceUpdate();
      this.checkStatuses();
    }, this.state.updateInterval,);
  }

  render() {
    return (
      <div className="app">
        <Notifications />
        <Header/>
        <Card data={{...this.state}}/>
        <Line data={this.state.hArray}/>
      </div>
    );
  }
}

export default App;
