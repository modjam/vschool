var canvas = document.createElement("canvas");
    canvas.id = "canvas";
    var ctx = canvas.getContext("2d");

    canvas.width = 1280;
    canvas.height = 720;

    document.body.appendChild(canvas);
	
var bgReady = false;
var bgImage = new Image();

bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.bmp";

var inventory = new Array();
var map = new Array();
var T = 404;

var events = ["nothing","enemy","shop"];
var gamestate = "";
var lines = new Array();
var text = "";
var textposx =32;
var textposy = 33;

var playerx = 50;
var playery = 0;
var dead = false;
var weapon = new Array();
var armor = new Array();
var shield = new Array();

var mapsizex = 100;
var mapsizey = 100;
var finished = false;
var enemytypes = new Array();

player = new Object()
player.health = 300;
player.gold = 0;
player.xp = 0;
player.level = 0;

// weapon object
function item(I,wname,acc,dmg,cat,b1,b2) {
          I = I || {};
		  I.type = cat; // type 1 = weapon, 2 = armor, 3 = healing item, 4 = stat enchancements
		  I.name = wname;
		  I.catergory = cat;
		  I.rating = acc;
		  I.damage = dmg;
		  I.bonus = new Array(b1,b2); //defence bonus,armor bonus
		  return I;
		  }
		  
weapon.push(item(0,"short sword",100,60,"weapon",0,0));
armor.push(item(0,"leather armor",0,0,"armor",30,3));

//after adding a new stat, dont forget to edit the spawnMonster() function!
function enemy(I,ename,hp,acc,dmg,def,arm,exp,lvl){
  I = I || {};
  I.name = ename;
  I.health = hp;
  I.rating = acc;
  I.damage = dmg;
  I.defence = def;
  I.armor = arm;
  I.level = lvl;
  I.xp = exp;
  I.type = 1;
  return I;
}
//enemy database
//level 1 
enemytypes.push(enemy(0,"Thief",200,65,15,8,0,250,1));
enemytypes.push(enemy(0,"Zombie",250,60,10,15,0,300,1));
enemytypes.push(enemy(0,"Fallen",180,80,15,20,3,350,1));
enemytypes.push(enemy(0,"Yeti",325,70,10,10,0,450,1));
enemytypes.push(enemy(0,"Skeleton",150,60,10,10,0,200,1));
enemytypes.push(enemy(0,"Lion",125,120,25,10,0,300,1));


function randString()
{
    var rtext = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        rtext += possible.charAt(Math.floor(Math.random() * possible.length));

    return rtext;
}

function spawnMonster(place)
{
map[place]=new Array();
var x = Math.round(place/100);
var y = place%mapsizey;
var numgenmons = 1+Math.round(Math.random()*5);
for (var i = 0; i<numgenmons; i++){
var num = Math.round(Math.random()*5);
map[place].push(enemy(0,enemytypes[num].name,enemytypes[num].health,enemytypes[num].rating,enemytypes[num].damage,enemytypes[num].defence,enemytypes[num].armor,enemytypes[num].xp,enemytypes[num].level)); 
}
//name,hp,acc,dmg,def,arm,lvl
}

generate = function(){
for (var i = 0; i < (mapsizex*mapsizey); i++){
var r = Math.random();
if(r<0.5){
spawnMonster(i);
//50 % chance of encountering a monster/enemy
}

}
finished = true;


}
generate();

function eventCheck(){
var tempname = map[playerx*mapsizex+playery][0].name;
if(tempname!=undefined){
text = "you encountered a "+tempname+" !";
write();
gamestate = "enemy"; 
}

}

doShit = function(){

if(gamestate=="enemy"&&dead==false){
fight();
}
}

function targetCheck(){
T = 404;
for (var i=0;i<10;i++){
if(map[playerx*mapsizex+playery][i]!=undefined){
T = i;
return;
}
}

}

function fight(){

targetCheck();
if(T==404||map[playerx*mapsizex+playery][T].health<0){
alert("Target not found/dead!");
}

// player attacks enemy
var c = Math.random()*weapon[0].rating;
var d =  map[playerx*mapsizex+playery][T].defence;
//comparing your attack rating to enemies' defence rating
if(c>d){
map[playerx*mapsizex+playery][T].health-=(weapon[0].damage-map[playerx*mapsizex+playery][T].armor);
text = "You succesfully attacked the enemy with "+(weapon[0].damage-map[playerx*mapsizex+playery][T].armor)+".";
write();
}else{
text = "You tried to attack the enemy, but failed to inflict any damage.";
write();
//alert(c+" : "+d);
}
if(map[playerx*mapsizex+playery][T].health <= 0){
text = "You killed the "+map[playerx*mapsizex+playery][T].name+" !";
write();
player.xp+=map[playerx*mapsizex+playery][T].xp;
if(player.xp>Math.pow((player.level+1)*10,2)){
player.level++;
}
//50% chance of loot drop
if(Math.random()<0.5){
dropLoot(map[playerx*mapsizex+playery][T].level);
}
delete map[playerx*mapsizex+playery][T];
targetCheck();
if(T==404){
text = "There are no enemies left. You won the battle!";
write();
gamestate="";
}else{
text = "You encountered a "+map[playerx*mapsizex+playery][T].name+".";
write();
}
return;
}

//enemy attacks player
var c2 = Math.random()*map[playerx*mapsizex+playery][T].rating;
var d2 =  armor[0].bonus[0];
//comparing your defence rating to enemies' attack rating
if(c2>d2){
player.health-=(map[playerx*mapsizex+playery][T].damage-armor[0].bonus[1]);
text = "The enemy succesfully attacked you with "+(map[playerx*mapsizex+playery][T].damage-armor[0].bonus[1])+" damage.";
write();
if(player.health <= 1){dead = true,text="You died!",write()};
}else{
text = "The enemy failed to attack you.";
write();
//alert(c+" : "+d);
}

}

function dropLoot(level)
{
var kaas = Math.round(Math.pow((Math.random()*level*30),1.2));
player.gold+=kaas;
text = "You found "+kaas+" gold!";
write();
}

move = function(n){
if(gamestate==""&&dead==false){

if(n==3){
if(playerx<mapsizex){
playerx++;
text = "You moved east!";
}
}

if(n==2){
if(playerx>0){
playerx--;
text = "You moved west!";
}
}

if(n==1){
if(playery<mapsizey){
playery++;
text = "You moved north!";
}

}

write();
eventCheck();
}
}


function switchWeapon(){

}

write = function(){
//error was ~= instead of !=

if(textposy<650&text!=""){
lines.push(text);
}

}
function updateText()
{
ctx.fillText("\n \n",textposx, textposy); 
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.font = "24px Helvetica";
ctx.textAlign = "left";
ctx.textBaseline = "top"; //top
	
textposy = 10;
textposx = 33;
if(lines.length<30){var scroll = 0}else{var scroll = lines.length-30};
for (var i=scroll; i<lines.length; i++)
{
textposy += 20;
ctx.fillText(lines[i],textposx,textposy); 
}
ctx.fillText("Your health: "+player.health,850,20); 
ctx.fillText("Your gold: "+player.gold,850,50); 
ctx.fillText("Your experience: "+player.xp + " / "+Math.pow((player.level+1)*10,2),850,80); 
ctx.fillText("Your level: "+player.level,850,110); 
}

setup = function() {
  
 
ctx.clearRect(300,0,1000,1000);
if (bgReady&&finished) {
		ctx.drawImage(bgImage,0,0); //draw background first
	}  
  	updateText(); // after that, draw text
//alert(map[400][0].name);
 
}

//setInterval(setup,250);
//setTimeout(setup,1500);
setInterval(setup,250);