// const makeRequest = (browser) => {
//     return new Promise((resolveBrowser, rejectBrowser) => {
//         console.log(`Checking request from the user that the we will work with ${browser}`)
//         if(browser == 'Google') {
//             resolveBrowser("Request was");
//         } else {
//             rejectBrowser("We only contact with Google")
//         }
//     })
// }


// makeRequest('edge').then((msg) => {
//     console.log(`${msg} successfull`);
// }).catch((msg)=> {
//     console.log(msg)
// })



const askUserName = (name, terms) => {
    console.log(`Hello ${name}, please say yes or no for our terms`);
    return new Promise((resolve, reject) => {
        if(terms.toLowerCase() === 'yes' ){
            resolve({
                term : terms,
                process : 'Success'
            })
        } else if (terms.toLowerCase() === 'no') {
            reject('We cannot process before not accepting the terms')
        } else {
            reject('Please enter only yes or no')
        }
    })
}

const termsAceepted = (acceptance, age) => {
    console.log(acceptance)
    return new Promise((resolve, reject) => {
        if(acceptance === 'Success') {
            resolve({
                msag : 'Wait for our conformation',
                value : age
            })
        } else {
            reject('We cannot process your request')
        }
    })
}

const conformation = (age) => {
    return new Promise((resolve, reject) => {
        if(age >= 18) {
            resolve(`You're Successfully Joined`)
        } else {
            reject(`We cannot join you now because you're ${age}`)
        }
    })
}

// termsAceepted('Raj', 19).then((m) => {
//     console.log(m.value)
// })

askUserName('Rajesh', "yes").then((msg) => {
    console.log(msg.term)
    termsAceepted((msg.process)).then((check) => {
        console.log(check.msag)
        conformation(17).then((msg) => {
            console.log(msg)
        }).catch(msg => {
            console.log(msg)
        })
    }).catch((msg) => {
        console.log(msg)
    }) 
}).catch((msg) => {
    console.log(msg)
})