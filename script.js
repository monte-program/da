let area = [
    ["*","*","*"],
    ["*","*","*"],
    ["*","*","*"],
]
let char = "x"
let turn = 1






document.querySelector(".table").onclick =  function(){
    let cell = event.target
    let row = cell.parentElement.rowIndex
    let column = cell.cellIndex
    if(area[row][column]!=="x" && area[row][column]!=="o"){
        area[row][column]=char
        cell.innerHTML=char
        
        if(char=="x"){
            cell.style.backgroundColor="gray"
            cell.style.color="red"
        }
        else if(char="o"){
            cell.style.backgroundColor="orange"
            cell.style.color="green"
        }

        turn=turn+1
        change()
        if(win()=="x"){
            win2("x-победили")
            document.querySelector(".span-xod").innerHTML="x-победили"
        }
        if(win()=="o"){
            win2("o-победили")
            document.querySelector(".span-xod").innerHTML="o-победили"
        }
    }
}

function win2(text){
    setTimeout(function(){
        alert(text) 
        newGame()
    },1000
    )
}





function newGame(){
    let rows = document.querySelectorAll("tr")
    for(let i=0; i<rows.length; i++){
        let row = rows[i]
        let cells = row.querySelectorAll("td")
        for(let y=0; y<cells.length; y++){
            cells[y].innerHTML=""
            cells[y].style.backgroundColor="white"
            cells[y].style.color="black"
            area[i][y]=""
        }
    }
    turn=1
    char="x"
    document.querySelector(".span-xod").innerHTML = char
}



function change(){
    if(turn%2==1){
    char="x"
    }
    else{
        char="o"
    }
    document.querySelector(".span-xod").innerHTML = char
}


function win(){
    if(area[0][0]=="x" && area[0][1]=="x" && area[0][2]=="x"){
        return "x"
    }
    if(area[1][0]=="x" && area[1][1]=="x" && area[1][2]=="x"){
        return "x"
    }
    if(area[2][0]=="x" && area[2][1]=="x" && area[2][2]=="x"){
        return "x"
    }

    if(area[0][1]=="x" && area[1][1]=="x" && area[2][1]=="x"){
        return "x"
    }
    if(area[1][0]=="x" && area[2][0]=="x" && area[0][0]=="x"){
        return "x"
    }
    if(area[0][2]=="x" && area[1][2]=="x" && area[2][2]=="x"){
        return "x"
    }

    if(area[0][0]=="x" && area[1][1]=="x" && area[2][2]=="x"){
        return "x"
    }
    if(area[0][2]=="x" && area[1][1]=="x" && area[2][0]=="x"){
        return "x"
    }

    if(area[0][0]=="o" && area[0][1]=="o" && area[0][2]=="o"){
        return "o"
    }
    if(area[1][0]=="o" && area[1][1]=="o" && area[1][2]=="o"){
        return "o"
    }
    if(area[2][0]=="o" && area[2][1]=="o" && area[2][2]=="o"){
        return "o"
    }

    if(area[0][1]=="o" && area[1][1]=="o" && area[2][1]=="o"){
        return "o"
    }
    if(area[1][0]=="o" && area[2][0]=="o" && area[0][0]=="o"){
        return "o"
    }
    if(area[0][2]=="o" && area[1][2]=="o" && area[2][2]=="o"){
        return "o"
    }

    if(area[0][0]=="o" && area[1][1]=="o" && area[2][2]=="o"){
        return "o"
    }
    if(area[0][2]=="o" && area[1][1]=="o" && area[2][0]=="o"){
        return "o"
    }
    return false
}