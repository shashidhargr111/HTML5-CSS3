var d, h, m ,s,clock,color;

function cloky(){
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    dd = d.getDate();
    mm = d.getMonth();
    yy = d.getFullYear();



if(h <=9){
    h ='0' + h;
} 
if(m <=9){
    m ='0' + m;
}
if(s <=9){
    s ='0' + s;
}
if(dd <=9){
    dd ='0' + dd;
}
if(mm <=9){
    mm ='0' + mm;
}
// if(s <=9){
//     s ='0 ' + s;
// }

clock = h + ":" + m +":" + s + "<br>" + dd+ "-"+ mm +"-"+ yy ;

color = "#" + h + m + s; 

document.getElementById("clock").innerHTML = clock

document.body.style.background = color;



setTimeout(cloky,1000);
}

cloky();