let firstAnswer  = window.prompt('Do you head left or right?')
if(firstAnswer === 'left'){
    let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you follow it, or continue on your path?`)
if (secondAnswer === 'follow'){
    window.prompt('you live hapily with the cats')
}
else if (secondAnswer === 'leave'){
    window.prompt('you fall and die')
}

} else if(firstAnswer === 'right') {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Which path do you take?`)
if (secondAnswer === 'take'){
    window.prompt('you die')
}
else if(secondAnswer ==='leave'){
    window.prompt('you still die')
}
}