// create random character
let ch = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 
'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c',
 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let ran = Math.floor(Math.random() * 100)


document.querySelector('.btn').addEventListener('click', function () {
    let r = Math.floor(Math.random() * 1000000)
    let color = '#' + r
    console.log(color)
    document.querySelector('.container').style.backgroundColor = color
    this.style.backgroundColor=color
})

// document.querySelector('.btn').addEventListener('keyup', function (e) {
//     console.log(e.key)
//     if(e.key=="Enter"){
//         let r = Math.floor(Math.random() * 1000000)
//         let color = '#' + r
//         console.log(color)
//         document.querySelector('.container').style.backgroundColor = color
//     }
// })