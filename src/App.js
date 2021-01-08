import './App.css';
import React from 'react';
import * as tf from '@tensorflow/tfjs';
import * as toxicity from '@tensorflow-models/toxicity';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      predictions: null,
      sentence: 'you suck'
    };
  }

  async resolveModel() {
    const threshold = 0.9;
    // create model
    return await toxicity.load(threshold);
    // console.log(model)
  }
  
  async predict(sentence) {
    const model = await this.resolveModel()
    const classifying = await model.classify([sentence])
    this.setState({
      predictions: classifying[6].results[0].probabilities[0]
    })
    return classifying[6].results[0].probabilities[0]
  }

  render() {
    return (
      <div className="App">
      <p>What is your terrible sentence?</p>
      <input 
        type="text" 
        value={this.state.sentence} 
        onChange={(e) => this.setState({sentence: e.target.value})} 
      />
      <button onClick={() => this.predict(this.state.sentence)}>Submit</button>
      Toxicity likelihood: {this.state.predictions}
    </div>
    );
  }
}

export default App;
