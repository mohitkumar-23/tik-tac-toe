let currentplay= "X";
// let arr=Array(9).fill(null);
// let arr=[null,null,null,null,null,null,null,null,null];
let arr=[" "," "," "," "," "," "," "," "," "];
let display=document.querySelector("p");
function checkWinner()
{
    if( (arr[0]!=" " && arr[0]==arr[1] && arr[1]==arr[2])||
        (arr[3]!=" " && arr[3]==arr[4] && arr[4]==arr[5])||
        (arr[6]!=" " && arr[6]==arr[7] && arr[7]==arr[8])||
        (arr[0]!=" " && arr[0]==arr[3] && arr[3]==arr[6])||
        (arr[1]!=" " && arr[1]==arr[4] && arr[4]==arr[7])||
        (arr[2]!=" " && arr[2]==arr[5] && arr[5]==arr[8])||
        (arr[0]!=" " && arr[0]==arr[4] && arr[4]==arr[8])||
        (arr[2]!=" " && arr[2]==arr[4] && arr[4]==arr[6])   )
        {
        // document.write(`Winner is ${currentplay}`); 
        display.innerHTML=`WINNER ! WINNER ! Musa Dinner   ${currentplay}`;
        return;
        }
        if(!arr.some((e) => e=== " ")){
            // document.write(`Draw!!`);
            display.innerHTML=`DRAW !!`;
            return;
        }
}
function handleclick(ele){
    const id=Number(ele.id);
    // if(arr[id] !== null) return;
    if(arr[id] !== " ") return;
    arr[id]=currentplay;
    ele.innerText=currentplay;
    checkWinner();
    // currentplay = currentplay === "X" ? "O" : "X" ;
    if(currentplay=="X")
        currentplay="O";
    else currentplay="X";
    // checkWinner();
    // console.log(arr);
    
}
let reset=document.querySelector("button");
reset.addEventListener("click",function()
{
    // if(arr=[" "," "," "," "," "," "," "," "," "])
    // {
    //     display.innerHTML=`PLAY GAME`;
    // }
arr=[" "," "," "," "," "," "," "," "," "];
const boxes=document.querySelectorAll(".col");
boxes.forEach(box=>{
    box.innerHTML="";
});
display.innerHTML="";
currentplay="X";
});
