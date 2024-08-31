const quizData = [{
    question: "The minimum number of comparisons required to determine if an integer appears more than n/2 times in a sorted array of n integers is",
    a: "O(n)",
    b: "O(logn)",
    c: "O(n*logn)",
    d: "O(1)",
    correct: "b",
},
{
    question: "Consider an array consisting of –ve and +ve numbers. What would be the worst case time complexity of an algorithm to segregate the numbers having same sign altogether i.e all +ve on one side and then all -ve on the other ?",
    a: "O(n)",
    b: "0(logn)",
    c: "O(n*n)",
    d: "O(N Log Log N)",
    correct: "a",
},
{
    question: "Let A[1...n] be an array of n distinct numbers. If i < j and A[i] > A[j], then the pair (i, j) is called an inversion of A. What is the expected number of inversions in any permutation on n elements ?",
    a: "n(n-1)/2",
    b: "n(n-1)/4",
    c: "n(n+1)/4",
    d: "2n[logn]",
    correct: "b",
},
{
    question: "Consider a two dimensional array A[20][10]. Assume 4 words per memory cell, the base address of array A is 100, elements are stored in row-major order and first element is A[0][0]. What is the address of A[11][5] ?",
    a: "560",
    b: "460",
    c: "570",
    d: "575",
    correct: "a",
},
{
    question: "Which of the following is major part of time taken when accessing data on the disk?",
    a: "Settle Time",
    b: "Rotational Time",
    c: "Seek Time",
    d: "Waiting Time",
    correct: "c",
},
{
    question: "From amongst the following given scenarios determine the right one to justify interrupt mode of data-transfer:",
    a: "Bulk transfer of several kilo-byte",
    b: "Moderately large data transfer but more that 1 KB",
    c: "Short events like mouse action",
    d: "Programmed Mode ",
    correct: "c",
},
{
    question: "Put the following disk scheduling policies results in minimum amount of head movement.",
    a: "FCFS",
    b: "Elevator",
    c: "Round Robin",
    d: "Circular Scan",
    correct: "b",
},
{
    question: "A CPU generally handles an interrupt by executing an interrupt service routine",
    a: "By checking the interrupt register after finishing the execution of the current instruction",
    b: "By checking the interrupt register at the end of fetch cycle.",
    c: "As soon as an interrupt is raised",
    d: "By checking the interrupt register at fixed time interval",
    correct: "a",
},
{
    question: "What is called when a function is defined inside a class?",
    a: "Module",
    b: "Class",
    c: "Another Function",
    d: "Method",
    correct: "d",
},
{
    question: "Which of the following is the use of id() function in python?",
    a: "Every object doesn’t have a unique id",
    b: "Id returns the identity of the object",
    c: "All of the Mentioned",
    d: "None of the Mentioned",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
allInputs[4].nextElementSibling.innerText = data.e
allInputs[5].nextElementSibling.innerText = data.f
allInputs[6].nextElementSibling.innerText = data.g 
allInputs[7].nextElementSibling.innerText = data.h 
allInputs[8].nextElementSibling.innerText = data.i 
allInputs[9].nextElementSibling.innerText = data.j
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> You scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);