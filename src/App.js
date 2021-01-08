import './App.css';
import React, { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as toxicity from '@tensorflow-models/toxicity';



async function resolveModel() {
  const threshold = 0.9;
  // create model
  return await toxicity.load(threshold);
  // console.log(model)
}

async function predict(sentence) {
  const model = await resolveModel()
  const classifying = await model.classify([sentence])
  // console.log(classifying)
  return classifying
}


function App() {
  const [predictions, setPredictions] = useState(null);
  const [sentence, setSentence] = useState('you suck');
  // The minimum prediction confidence.
  // const threshold = 0.9;
  // let model = toxicity.load(threshold);

  const predicts = predict(sentence).then(pre =>
    // console.log(pre)
    setPredictions(pre)
  )

  console.log(predicts)
  
   
  return (
    <div className="App">
      <p>What is your terrible sentence?</p>
      <input 
        type="text" 
        value={sentence} 
        onChange={(e) => setSentence(e.target.value)} 
      />
      <button onClick={predict}>Submit</button>
      Toxicity likelihood: 0
    </div>
  );
}

export default App;