const body = document.querySelector("body");
const clock = document.querySelector("#clock");

function ntp(n)//numberToPath(n)
{
    // Parses the number and returns a string based on the correct coordinates to form the shape.

    n = parseInt(n);
    switch(n)
    {
        case 1: return ctp([[0,0],[1,0]]);
        case 2: return ctp([[0,1],[1,1]]);
        case 3: return ctp([[0,0],[1,1]]);
        case 4: return ctp([[0,1],[1,0]]);
        case 5: return ctp([[0,1],[1,0],[0,0]]);
        case 6: return ctp([[1,0],[1,1]]);
        case 7: return ctp([[1,1],[1,0],[0,0]]);
        case 8: return ctp([[0,1],[1,1],[1,0]]);
        case 9: return ctp([[0,0],[1,0],[1,1],[0,1]]);
        case 0: return ctp([[-0.5,0],[-0.5,1]]);
    }
}

function ctp(points) //coordsToPath(points)
{
    // d="M0 1 L1 1 L1 0" >> _|
    /*
        00-----10
        |    /  |
        |  /    |
        01-----11
    */
   let output = `M${points[0][0]} ${points[0][1]} `;
   for(let i = 1; i < points.length; i++)
   {
    output += `L${points[i][0]} ${points[i][1]} `
   }
   return output;
}
let homa = document.querySelector("#hourMajor");
let homi = document.querySelector("#hourMinor");
let mima = document.querySelector("#minuteMajor");
let mimi = document.querySelector("#minuteMinor");
let sema = document.querySelector("#secondMajor");
let semi = document.querySelector("#secondMinor");
function step()
{
    let time = Date.call()
    let hour = [time[16], time[17]];
    let minute = [time[19], time[20]];
    let second = [time[22], time[23]];

       // This changes the colour based on the current hour
    let hue = 360 / 24 * parseInt(hour[0]+hour[1]);
    document.documentElement.style.setProperty("--hue",hue);


    homa.attributes.d.nodeValue = ntp(hour[0]);
    homi.attributes.d.nodeValue = ntp(hour[1]);
    mima.attributes.d.nodeValue = ntp(minute[0]);
    mimi.attributes.d.nodeValue = ntp(minute[1]);
    sema.attributes.d.nodeValue = ntp(second[0]);
    semi.attributes.d.nodeValue = ntp(second[1]);
}

setInterval(step, 100)
