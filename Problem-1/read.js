let display = document.getElementById("display");

let Buttons = Array.from(document.getElementsByClassName("Buttons"))

Buttons.map( Button => {
    Button.addEventListener('click',(e) => {
        switch(e.target.innerHTML){
            case 'C' :
                display.innerHTML = "";
                break;
            case '←':
                if (display.innerHTML){
                    display.innerHTML = display.innerHTML.slice(0,-1);
                }
                break;
            case "=":
                try{
                    display.innerHTML = eval(display.innerHTML);

                }catch{
                    display.innerHTML = " SYNTAX ERROR ! ! ! "
                }
                break;
                default:
                display.innerHTML += e.target.innerHTML ;
        }
        // console.log(e.target.innerText)
    })
})

