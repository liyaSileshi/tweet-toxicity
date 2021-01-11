import './App.css';
import React from 'react';
import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
import * as toxicity from '@tensorflow-models/toxicity';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      predictions: null,
      predictObj : {},
      sentence: 'you suck',
      barData : []
    };

     const series1 = Array(100).fill(0)
   .map(y => Math.random() * 100 + 50)
   .map((y, x) => ({ x, y, }));

   
   console.log(series1)
    // Render to visor
    this.surface = { name: 'Bar chart', tab: 'Charts' };
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
      predictions: classifying[6].results[0].probabilities[0],
      predictObj: classifying
    })
    
    console.log(classifying)
    return classifying[6].results[0].probabilities[0]
  }

  //render the visualization
  async solveViz() {
    return await tfvis.render.barchart(this.surface, this.state.barData)
  }

  // get the values for the bar chart from the predictions
  getBarValue() {
    const predictObj = this.state.predictObj
    let outputArr = []
    for (let key in predictObj) {
      if (predictObj.hasOwnProperty(key)) {
          console.log(key + " -> " + predictObj[key]['label']);
          console.log(predictObj[key].results[0].probabilities[0])
          //append object to output array
          outputArr.push({index: predictObj[key]['label'], value: predictObj[key].results[0].probabilities[0]})
      }
    }
    this.setState({barData: outputArr})
    console.log('bar data',this.state.barData)
  }

  render() {
    
    // console.log(tfvis.render.barchart(surface, data))
    // render the visualization 
    // console.log(this.solveViz())
    console.log('prediction',this.state.predictions)
    console.log('predict obj',this.state.predictObj)
    console.log('bar data',this.state.barData)
    return (
      <div className="App">
      <p>What is your terrible sentence?</p>
      <input 
        type="text" 
        value={this.state.sentence} 
        onChange={(e) => this.setState({sentence: e.target.value})} 
      />
      <button onClick={() => 
        {
          this.predict(this.state.sentence)
          //get the value for the bar graph
          this.getBarValue()
          // re render the visuals
          // this.solveViz()
          console.log('bar data',this.state.barData)
          // tfvis.render.barchart(this.surface, this.state.barData)
        }}
      >
        Submit
      </button>


      <button onClick={() => 
        {
          //get the value for the bar graph
          this.getBarValue()
          // re render the visuals
          this.solveViz()
          console.log('bar data',this.state.barData)
        }}
      >
        Click for Viz
      </button>
      Toxicity likelihood: {this.state.predictions}
      
      {/* render the visualization */}
      {/* {this.solveViz()} */}
      
    
    </div>
    );
  }
}

export default App;
