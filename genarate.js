var submit=document.getElementById("sub");

var teamakan=[];

for(i=1;i<=22;i++){
    var logo_source="images/"+i+".png";
    teamakan.push(logo_source);
}
setInterval(mytimer,100);

function mytimer(){



    var team1=Math.floor(Math.random()*22);
    var team2=Math.floor(Math.random()*22);
    
    if(team1==team2){
        team2+1;
    }
    
    var team11=document.getElementById("team1");
    var team22=document.getElementById("team2");
    
    team11.setAttribute("src",teamakan[team1]);
    team22.setAttribute("src",teamakan[team2]);
    
    
}



submit.onclick=function(){



var team1=Math.floor(Math.random()*22);
var team2=Math.floor(Math.random()*22);

if(team1==team2){
    ++team2;
}

var team11=document.getElementById("team1");
var team22=document.getElementById("team2");

team11.setAttribute("src",teamakan[team1]);
team22.setAttribute("src",teamakan[team2]);

}
