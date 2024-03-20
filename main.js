
// task 1



const delay=(ms) =>{
    return new Promise((resolve) => setTimeout (resolve,ms))
        }
    const iterateWithAsyncAwait = async (arr) =>{
        for (const value of arr){
            console.log (value)
            await delay(1000)
        }
    }

    

    // task 2


    const awaitCall =async()=>{
try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data =await response.json()
    console.log(data)
}
catch(error){
    console.error("error fetching data", error)
}
    }
    awaitCall()


// task 3

const fetchData=()=>{
    return new Promise((resolve, reject) => {
        setTimeout (()=>{
            reject(new Error('API call failed'))
        },1000)
    })
}

const awaitCalll =async()=>{
 try {
    const response =await fetchData()
    console.log(response.data)
 }
 catch(error){
    console.error('oops,something went wrong',error.message)
 }
}

awaitCalll()