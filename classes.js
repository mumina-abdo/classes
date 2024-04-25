class car{
    constructor(make,model,year,isAvailable){
        this.make = make;
        this.medel = model;
        this.year = year;
        this.isAvailable = true;
    }
    toggleAvailability(){
        this.isAvailable=!this.isAvailable
    }
};

class RentalInfo{
    constructor(car,customerName,rentDuration){
        this.car = car;
        this.customerName = customerName;
        this.rentDuration = rentDuration;
    }
};

// quizb
class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
        this.car = car;
        this.renterName = renterName;
        this.rentalStartDate = rentalStartDate;
        this.rentalEndDate = rentalEndDate;
    }
}
const rentedCar = new Car('Toyota', 'Camry');
const rentalInfo = new Rental(rentedCar, 'John Doe', new Date('2022-01-01'), new Date('2022-01-10'));

console.log(rentalInfo);


// quiz c
class Rental {
    constructor(car, startDate, endDate) {
        this.car = car;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    calculateRentalDuration() {
        const start = new Date(this.startDate);
        const end = new Date(this.endDate);
        const duration = Math.abs(end - start);
        return Math.ceil(duration / (1000 * 60 * 60 * 24));
    }
};


// Questuon2

class Question {
    constructor(text, options, correctAnswer) {
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
    checkAnswer(userAnswer) {
        return userAnswer === this.correctAnswer;
    }
}
const sampleQuestion = new Question(
    "What is the capital of France?",
    ["Paris", "London", "Berlin", "Madrid"],
    "Paris"
);
console.log(sampleQuestion.checkAnswer("Paris"));
console.log(sampleQuestion.checkAnswer("London"));
class Quiz {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
    }
    addQuestion(question) {
        this.questions.push(question);
    }
    nextQuestion() {
        this.currentQuestionIndex++;
    }
    submitAnswer(userAnswer) {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if (currentQuestion.checkAnswer(userAnswer)) {
            this.score++;
        }
        this.nextQuestion();
    }
}
const quiz = new Quiz();
const question1 = new Question("What is 2 + 2?", ["3", "4", "5"], "4");
const question2 = new Question("Who wrote 'Romeo and Juliet'?", ["Shakespeare", "Hemingway", "Tolstoy"], "Shakespeare");
quiz.addQuestion(question1);
quiz.addQuestion(question2);
quiz.submitAnswer("4");
quiz.submitAnswer("Shakespeare");
console.log("Score:", quiz.score);