const quizDB = [
    {
        question : 'Sleep is considered a necessary vital function because it',
        a : 'Helps people recover from stress',
        b : 'Builds up a persons resistance to infection',
        c : 'Maintains the brains proper functioning',
        d : 'Does all of the above',//ans
        ans : 'd'
    }, 
    {
        question : 'Biofeedback has been used to successfully treat',
        a : 'High blood pressure',  //ans
        b : 'Cancer',
        c : 'Eating disorders',
        d : 'All of the above',
        ans : 'a'
    }, 
    {
        question : 'Spread love everywhere you go. Let no one ever come to you without leaving happier.', 
        a : 'Mother Teresa',  //ans
        b : 'Marilyn Monroe',
        c : 'Princess Diana',
        d : 'Rosa Parks',
        ans : 'a'
    },
    {
        question : 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        a : 'Nelson Mandela',  //ans
        b : 'Ingrid Bergman',
        c : 'Plato',
        d : 'Amelia Earhart' ,
        ans : 'a'
    },
    {
        question : 'Our lives begin to end the day we become silent about things that matter.',
        a : 'Prince Charles',
        b : 'Sigmund Freud',
        c : 'Martin Luther King Jr.',  //ans
        d : 'Elon Musk',
        ans : 'c'
    }
]

const question = document.querySelector('.question')
const option1 = document.querySelector('.A')
const option2 = document.querySelector('.B')
const option3 = document.querySelector('.C')
const option4 = document.querySelector('.D')
const next = document.querySelector('.next')

const answers = document.querySelectorAll('.radio')

let queNo = document.querySelector('#index')
let showScore = document.querySelector('.score')
let queCount = 0;
let currScore = 0;

const loadQue = () => {
    const queList = quizDB[queCount]

    showScore.innerHTML = `Score: ${currScore}`
    queNo.innerHTML = queCount+1
    question.innerHTML = queList.question
    option1.innerHTML = queList.a
    option2.innerHTML = queList.b
    option3.innerHTML = queList.c
    option4.innerHTML = queList.d
}

loadQue()

const getCheckAns = () => {
    let ans;

    answers.forEach((i)=>{
        if(i.checked){
            ans = i.id
        }
    })
    return ans
}
const deSelectOpt = () =>{
    answers.forEach((i)=> i.checked = false)
}

next.addEventListener('click', () => {
    const checkAnswer = getCheckAns()
    // console.log(checkAnswer);

    if(checkAnswer === quizDB[queCount].ans){
        currScore++;
    }
    deSelectOpt()
    queCount++
    if(queCount < quizDB.length){
        loadQue()
    }
    else{
        document.querySelector('.showScore p').innerHTML = `Prev score : ${currScore}/${quizDB.length}`
        queCount = 0
        currScore = 0
        loadQue()
    }
})