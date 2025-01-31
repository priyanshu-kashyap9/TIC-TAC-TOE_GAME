// TIC TAC TOE JAVASCRIPT

let trun ="X"
let gameover =false;


//Function to change the trun 

const changeTrun = ()=>{
    return trun ==="X"?"0": "X"
}


//function to check for a win 

const checkWin = () =>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2, 0 , 5 , 0 ],
        [3,4,5, 0 , 15 , 0 ],
        [6,7,8, 0, 25 , 0 ],
        [0,3,6 , -10, 15 , 90], 
        [1,4,7 ,0, 15 , 90],
        [2,5,8 ,10, 15 , 90],
        [0,4,8, 0, 15, 45],
        [2,4,6, 0, 15, 135],
    ]

    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText =boxtext[e[0]].innerText + "won";
            gameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="195px"
            document.querySelector('.line').style.width = "30vw"
            document.querySelector('.line').style.transform =`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`

        }
    })
}


//Game logic 

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',(e) =>{
        if(boxtext.innerText === ''){
            boxtext.innerText = trun;
            trun = changeTrun();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText =" Trun for " + trun;
            }
        }
    })
})


// add on click listner to reset button 

reset.addEventListener("click", () =>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });

    trun ="X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText =" Trun for  " + trun;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="0px";
})