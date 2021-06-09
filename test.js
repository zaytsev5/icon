const emojis = require('./icon.js')
const emoji =  process.argv[2]


let keys = Object.getOwnPropertyNames(emojis)

//console.log(keys)
//print('sad')
console.log(e(emoji))
function e(tag){
    
    for(let i = 0 ; i < keys.length ; i++){
        let match = emojis[keys[i]]['tags'].some(e => e.includes(tag))
        if(match){
            return keys[i]
            break;
        }

        if(i == keys.length -1 )
            return 'oops'   
    }
}




