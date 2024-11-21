class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions; // esto es un array de objetos ( objeto basados en la clase question)
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }
  shuffleChoices() {
    for (let i = this.choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.choices[i], this.choices[j]] = [this.choices[j], this.choices[i]];
    }
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex]
  }

  moveToNextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1){
        this.currentQuestionIndex += 1
    }else {
    
    }
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
  }
}

  checkAnswer(answer) {
    
if (answer === this.questions[this.currentQuestionIndex].answer ){

    this.correctAnswers++
    }
    
    }
  

  hasEnded() {
    if ( this.currentQuestionIndex < this.questions.length){
        return false
    }else if ( this.currentQuestionIndex === this.questions.length){
        return true

  }
}
filterQuestionsByDifficulty(difficulty){
    if(difficulty < 1 || difficulty > 3 || typeof difficulty !== "number") {
        return this.questions
    }
    this.questions = this.questions.filter((eachQuestion)=>{
        if(eachQuestion.difficulty === difficulty){
            return true
        }

    })

    
}
averageDifficulty(){
    let sumaDeDificultades = this.questions.reduce((acc, eachQuestion)=>{
return acc + eachQuestion.difficulty

},0)
return sumaDeDificultades / this.questions.length
}

}