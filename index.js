
function writeCards(nameArrays, eName){
    let cards = [];
  for (let i = 0; i < nameArrays.length; i++) {
      cards.push(`Thank you, ${nameArrays[i]}, for the wonderful ${eName} gift!`);
  }

    return cards;
}

function countDown(integer){
    for (let i = integer; i >= 0; i-- ) {
        console.log(i)
    }   
}