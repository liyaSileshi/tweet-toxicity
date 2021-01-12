import './App.css';
import './styles.css';
import './Tweet.css';
import React from 'react';
import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
import * as toxicity from '@tensorflow-models/toxicity';


class Tweet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // predictions: null,
      predictObj : {},
      sentence: '',
      barData : [],
      toxicity: 0,
      identityAttack: 0,
      insult: 0,
      obscene: 0,
      severeToxicity: 0,
      sexualExplicit: 0,
      threat: 0
    };

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
      identityAttack: classifying[0].results[0].probabilities[1].toFixed(3),
      insult: classifying[1].results[0].probabilities[1].toFixed(3),
      obscene: classifying[2].results[0].probabilities[1].toFixed(3),
      severeToxicity: classifying[3].results[0].probabilities[1].toFixed(3),
      sexualExplicit: classifying[4].results[0].probabilities[1].toFixed(3),
      threat: classifying[5].results[0].probabilities[1].toFixed(3),
      toxicity: classifying[6].results[0].probabilities[1].toFixed(3),
      predictObj: classifying
    })
    console.log(classifying)
    return classifying[6].results[0].probabilities[1]
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
          console.log(predictObj[key].results[0].probabilities[1])
          //append object to output array
          outputArr.push({index: predictObj[key]['label'], value: predictObj[key].results[0].probabilities[1]})
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
      <p className='h1'>What is your tweet? 🐦</p>
      <input 
        placeholder='type something here...'
        type="text" 
        value={this.state.sentence} 
        onChange={(e) => this.setState({sentence: e.target.value})} 
      />
      
      <button 
        type='submit'
        onClick={() => 
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


      <button 
        className='success'
        onClick={() => 
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
      <div className='data'>
        <p>Identity attack likelihood: {this.state.identityAttack}</p>
        <p>Insult likelihood: {this.state.insult}</p>
        <p>Obscene likelihood: {this.state.obscene}</p>
        <p>Severe toxicity likelihood: {this.state.severeToxicity}</p>
        <p>Sexual explicit likelihood: {this.state.sexualExplicit}</p>
        <p>Threat likelihood: {this.state.threat}</p>
        <p>Toxicity likelihood: {this.state.toxicity}</p>
      </div>
      
      {/* render the visualization */}
      {/* {this.solveViz()} */}
      
    
    </div>
    );
  }
}

export default Tweet;
