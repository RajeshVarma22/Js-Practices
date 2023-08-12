let sum = (a, b) => {
    return a + b;
};

let mul = (a, b) => {
    return a * b;
};

let calculate = (a, b, callback) => {
    return callback(a, b);
};

let output = calculate(10, 20, sum);
console.log(output);

output = calculate(10, 20, mul);
console.log(output);

let res = calculate(10, 5, callback = (a, b) => {
    return a - b;
})
console.log(res);



// Callback like promises by webdev Simplified
const imInJs = false;
const imInReact = true;

let callBackFun = (callback, learningCallback) => {
    if (imInJs) {
        learningCallback({
            course: 'JavaScript',
            message: 'Iam Learning JavaScript'
        })
    } else if (imInReact) {
        learningCallback({
            course: 'ReactJs',
            message: 'Iam Learning ReactJs'
        })
    } else {
        callback('Iam not learning anything')
    }
}


callBackFun((message) => {
    console.log(`This from last else part (Final Callback) ${message}`)
}, (learning) => {
    console.log(`${learning.course}  ${learning.message}`)
})




const do1 = true
const do2 = false

let callbackForDone = (para1, para2, errorPara) => {
    if (do1) {
        para1((message) => {
            console.log(`${message}`)
        })
    } else if (do2) {
        para2((message) => {
            console.log(`${message}`)
        })
    } else {
        errorPara('Nothing was completely done')
    }
}

callbackForDone((thisForPara1 = (msg) => {
    console.log(`This is for inner msg ${msg}`)
    }) => {
        console.log(`This is for para1 where both are functions ${thisForPara1}`)
})