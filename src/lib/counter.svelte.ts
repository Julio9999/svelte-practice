export let counter = createCounter();

export function createCounter() {

let value = $state(0)

return {    
    multiply() {
        value *= 2
    },
    increment() {
        value += 1
    },
    decrement() {
        value -= 1  
    },
    reset() {   
        value = 0
    },  
    get() {
        return value        
    }
}

}