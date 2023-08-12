let readJs = new Promise((resolve , reject) => {
    let read = true;
    if (read) {
        resolve('You successfully completed');
    }
    else {
        reject('You have pending');
    }
});

readJs.then((msg) => {
    document.querySelector('#task').innerHTML = msg;
}) .catch ((msg) => {
    document.querySelector('#task').innerText = msg;
});



/*
Real time use of promises 
*/

let buildProject = new Promise( (resolove , reject) => {
    isDone = true;
    if (isDone) {
        resolove('Project Completed');
    }
    else {
        reject('Project Incomplete');
    }
});
let technicalRound = new Promise( (resolove , reject) => {
    isDone = true;
    if (isDone) {
        resolove('TR Completed');
    }
    else {
        reject('TR Incomplete');
    }
});
let mangerRound = new Promise( (resolove , reject) => {
    isDone = false;
    if (isDone) {
        resolove('Manager round Completed');
    }
    else {
        reject('Manager round Incomplete');
    }
});

let hrRound = new Promise( (resolve , reject) => {
    isDone = true;
    if(isDone) {
        resolve('Completed HR Round');
    }
    else {
        reject('HR Round incomplete ')
    }
});
let job = new Promise( (resolve , reject) => {
    isDone = true;
    if(isDone) {
        resolve('You got Job');
    }
    else {
        reject("You didn't got job")
    };
});

buildProject.then((msg) => {
    let result = `${msg} ==> `;
    technicalRound.then((msg) => {
        result += `${msg} ==> `;
        mangerRound.then( (msg) => {
            result += `${msg} ==> `;
            hrRound.then( (msg) => {
                result += `${msg} ==> `;
                job.then( (msg) => {
                    result += `${msg}.`;
                    console.log(result)
                    document.querySelector('#job').innerHTML = result;
                }).catch( (ms) => {
                    console.log(ms);
                });
            }).catch( (ms) => {
                console.log(ms);
            });
        }).catch( (ms) => {
            console.log(ms);
        });
    }).catch( (ms) => {
        console.log(ms);
    });
}).catch( (ms) => {
    console.log(ms);
});


let workDone = new Promise( (resolove , reject) => {
    let isDone = true;
    if(isDone){
        resolove("You have sccessfully completed the work");
    }
    else {
        reject("Do your work");
    }
})

let bonusWork = new Promise( (resolve , reject) => {
    let isDone = true;
    if(isDone) {
        resolve("You will get bonus for the work");
    }
    else {
        reject("You dont get the bonus for the work");
    }
});

workDone.then( (ms) => {
    let res = '';
    res += `${ms}-->`;
    bonusWork.then( (ms) => {
        res += `${ms}-->`;
        console.log(res);
    }) .catch ( () => {

    });
}) .catch( () => {

});

let count = 1;
for (let i = 1; i <= 5; i++){
    document.querySelector('#cardInner').innerHTML = `<h1>Hi${i}</h1> ${count}`
    console.log(count);
    count++;
}


// Real Use of promises

const render1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Completed at 4 secs')
    },4000)
})

const render2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Completed at 3 secs')
    },3000)
})

const render3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Completed at 2 secs')
    },2000)
})


Promise.all([render1, render2, render3]).then((msgs) => {
    console.log(msgs)
} )