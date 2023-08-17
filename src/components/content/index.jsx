import React from 'react';

const Content = () => {
  function perguntaerespota() {
    fetch('https://opentdb.com/api.php?amount=30&category=15')  
      .then(response => response.json())  
      .then(data => {
        var pergunta = document.querySelector("#pergunta"); 
        pergunta.innerHTML = `${data.results.question}`;  

        var resposta = document.querySelector("#resposta"); 
        resposta.innerHTML = `${data.results.correct_answer}`;  
      });
  }
  return (
    <div>
        <div id="pergunta"></div>
        <div id="resposta"></div>
        <button onClick={perguntaerespota}>clica</button>
    </div>
  );
};

export default Content;