const firstPromise= () => (new Promise((resolve,reject) =>{
    setTimeout(() => { resolve(console.log('first Promise'))},1000)
}))

const secondPromise= () => (new Promise((resolve,reject) =>{
    setTimeout(() =>{resolve(console.log('second Promise'))},1000)
}))

const thirdPromise= () => (new Promise((resolve,reject) =>{
    setTimeout(() => {resolve(console.log('third Promise'))},1000)
}))

async function asyncParalel(){
    let a = firstPromise()
    let b = secondPromise()
    let c = thirdPromise()
    console.log('paralel')
}
asyncParalel()
async function asyncSerial(){
    let a = await firstPromise()
    let b = await secondPromise()
    let c = await thirdPromise()
    console.log('serial')
}
asyncSerial()