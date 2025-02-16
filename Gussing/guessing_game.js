let name=prompt("Enter your name");

const max=prompt("Enter maximum number");

let random= Math.floor(Math.random() * max +1);

let guess=prompt(`Guess your number mr ${name}`);

while(true){
    if(guess=="quit"){
        console.log(`${name}lose the game`);
        break;
    }
    if(guess==random){
        console.log(`🥰Congratulation ${name}🙂.you won the Game🥰`);
      break;
    }


    else if(guess>random){
          guess=prompt("Hint:your number is larger,please try again😞😞");
    }
    else if(guess<random){
          guess=prompt("Hint:your number is smaller,please try again😞😞");
    }
}
