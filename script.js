var check = true;
var table = [];
function buttonCklick(id) {

    let btnText = document.querySelector("#"+id).textContent;
    const Player_One = "X";
    const Player_Two = "O";
    
    /* 
    this condition for check if button empty or full
    and write X or O if button empty
    else we alert msg to user
    */
    if (!(btnText == Player_One) && !(btnText == Player_Two)) 
    {
        /*  
        this condition for writing X and O alternately
        if check == true we write X and change X to false
        if check == false we write O and change X to true
        */
        if (check)
        {
            document.querySelector("#"+id).innerHTML = Player_One;
            check = false;
        }
        else
        {
            document.querySelector("#"+id).innerHTML = Player_Two;
            check = true;
        }
    }
    else 
    {
        alert("The cell is full");
    }

    /*
    we use this for loop to fill a table (table) with the text of the buttons. 
    */
    for(let i = 1; i <=9 ; i++)
    {
        table[i] = document.getElementById( 'button-'+ i ).innerHTML;
    }

    const bntTable = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    /*
    we use this for loop to check if any player is win
    */
    for (let i = 0; i <= 7; i++) 
    {
        let tbl = bntTable[i];
        let a = tbl[0];
        let b = tbl[1];
        let c = tbl[2];

        /*
        this conditional statement is to check if player 1 or player 2 is a winner, if so,
        we change the color of the buttons and write the winner player and then exit this for loop.
        */
        if(table[a] == Player_One && table[b] == Player_One && table[c] == Player_One)
        {
            ChangeColor(Player_One,"button-"+a,"button-"+b,"button-"+c);
            disableEmptybtn();
            disableRefreshbtn();
            return;
        }
        else if (table[a] == Player_Two && table[b] == Player_Two && table[c] == Player_Two) 
        {
            ChangeColor(Player_Two,"button-"+a,"button-"+b,"button-"+c);
            disableEmptybtn();
            disableRefreshbtn();
            return;
        }
    }

    //this for check drow status
    let checkFull = 0;
    for (let i = 1; i <= 9; i++) {
        if (table[i] != "") {
            checkFull ++;
        }
        console.log("sssssss:  "+checkFull);
    }
    if (checkFull == 9) {
        document.querySelector("#player-win").innerHTML = "The result is a draw.";
        disableEmptybtn();
        disableRefreshbtn();
        return;
    }
}

// this function changes the color of the matching buttons and writes the winning player.
function ChangeColor(player, btn1, btn2, btn3)
{
    document.querySelector("#"+btn1).style.backgroundColor = "rgb(255, 211, 66)";
    document.querySelector("#"+btn2).style.backgroundColor = "rgb(255, 211, 66)";
    document.querySelector("#"+btn3).style.backgroundColor = "rgb(255, 211, 66)";
    document.querySelector("#"+btn1).style.color = "#fff";
    document.querySelector("#"+btn2).style.color = "#fff";
    document.querySelector("#"+btn3).style.color = "#fff";
    document.querySelector("#player-win").innerHTML = "Player : " + player + " Winner";
}

// this function changes the color of the matching buttons and writes the winning player.
function disableEmptybtn()
{
    for (let i = 1; i <=9 ; i++) {
        let button = document.getElementById("button-" + i);
        button.style.pointerEvents = "none";
    }
}

/*
this function is to check the display status of the refresh button
if it none we make it block
if it block we make it none
*/
function disableRefreshbtn()
{
    const refreshbtn = document.querySelector('.refresh-btn');
    refreshbtn.style.display = 'none';
    if (refreshbtn.style.display === 'none') {
        refreshbtn.style.display = 'block';
    } else {
        refreshbtn.style.display = 'none';
    }
}

/*
this function is to check the display status of the refresh button
if it none we make it block
if it block we make it none
*/
function RefreshbtnClick()
{
    table = [];
    for (let i = 1; i <= 9; i++) {
        let button = document.getElementById( 'button-'+ i );
        button.innerHTML = "";
        button.style.backgroundColor = "#fff";
        button.style.color = "rgb(255, 211, 66)";
        button.style.pointerEvents = "auto";

        // this for add mouseover event listener for hover effect
        button.addEventListener('mouseover', function() {
            button.style.backgroundColor = "rgb(255, 211, 66)";
            button.style.color = '#fff';  
            button.style.border = '1px solid #fff'
        });

        // this for add mouseout event listener to revert back the styles
        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = '#fff';
            button.style.color = "rgb(255, 211, 66)";
            button.style.border = '1px solid rgb(255, 211, 66)'
        });

    }
    document.querySelector("#player-win").innerHTML = "";
    const refreshbtn = document.querySelector('.refresh-btn');
    refreshbtn.style.display = 'none';
}
