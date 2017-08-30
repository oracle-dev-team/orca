import React, {Component} from 'react';
import styles from './InfluenceMap.css'
import vis from 'vis';

export default class InfluenceMap extends Component {
  constructor (props) {
    super(props);



  }
  // initialize your network!
  componentDidMount() {
    // create an array with nodes
    let nodes = new vis.DataSet([
      {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'}
    ]);

    // create an array with edges
    let edges = new vis.DataSet([
      {from: 1, to: 3},
      {from: 1, to: 2},
      {from: 2, to: 4},
      {from: 2, to: 5}
    ]);

    // create a network

    // provide the data in the vis format
    let data = {
      nodes: nodes,
      edges: edges
    };
    let options = {};
    let container = document.getElementById('influence');
    let network = new vis.Network(container, data, options);
  }


  render() {
    return (
      <div id="influence"></div>
    )
  }
}
