let I=19;
let QS1= 0;
let QS2= 0;
//let end=4;
//The field of Massive arrays
let backgrounds =
  ['blank.png','Parlour.png','laundry.png','garden.png',
  'storeroom.png','dining room.png','kitchen.png',
  'game room.png', 'library.png', 'ghost room.png'];
let cvs =
  ['CV1.png', 'CV2.png', 'cv3.png', 'captcha.png'];

//Characters
let characterCopbot = {
  sprites:['copbot.png'],
  name:'Copbot',
  nameColour:'#18344a',
}
let characterPlayer = {
  sprites:['copbot.png'],
  name:'Detective',
  nameColour:'#3b3734',
}
let characterBrigitte = {
  sprites:['Brigitte.png', 'Brigitte sad.png'],
  name:'Brigitte',
  nameColour:'#4a4418',
}
let characterArion = {
  sprites:['arion.png', 'arion nervous.png', 'arion sigh.png'],
  name:'Arion',
  nameColour:'#4a1f18',
}
let characterA9gb = {
  sprites:['a9g-b.png', 'a9g-b angry.png'],
  name:'A9G-B',
  nameColour:'#2a184a',
}
let characterWaltham = {
  sprites:['waltham.png', 'waltham knife.png'],
  name:'Waltham',
  nameColour:'#18194a',
}
let characterAsutori = {
  sprites:['asutori.png', 'asutori worry.png', 'asutori human.png', 'asutori reveal.png'],
  name:'Asutori',
  nameColour:'#184a3b',
}
let characterIssac = {
  //sprites:['asutori.png', 'asutori worry.png', 'asutori human.png', 'asutori reveal.png'],
  name:'issac',
  nameColour:'#a9aad4',
}


//cv:0 - no cv, cv:1 - trigger endScene cv:2 - newscene CV: 3-7 cvs
let dialogue = [
  {'bg':0, 'c':false, 'char':characterPlayer, 'expression':0,'text':'It’s the year 2062, and I am one of the last human detectives in metroville city. There are lots of robots around.', 'cv':2},
  {'bg':0, 'c':true, 'char':characterPlayer, 'expression':0,'text':'Turns out Asimov was onto something, his three laws worked really well for keeping robots from killing us.', 'cv':0},
  {'bg':0, 'c':true, 'char':characterPlayer, 'expression':0,'text':'Teaching them what humans look like and how to anticipate the results of their actions was a pain, but there hasn’t been robot on human violence for the past 100 years, which is why this case is interesting enough they called in a human.', 'cv':0},
  {'bg':0, 'c':true, 'char':characterPlayer, 'expression':0,'text':'It’s a fairly fancily decorated parlour.', 'cv':1},
  {'bg':1, 'c':false, 'char':characterPlayer, 'expression':0,'text':'', 'cv':2},
  {'bg':1, 'c':true, 'char':characterCopbot, 'expression':0, 'text':'Hello! I’m the head of the Robot on Human crime division of the police!', 'cv':0},
  {'bg':1, 'c':true, 'char':characterPlayer, 'expression':0, 'text':'They let a robot head that division?', 'cv':0},
  {'bg':1, 'c':true, 'char':characterCopbot, 'expression':0, 'text':'I’ve been sitting there for the past 946,684,800 seconds. They decided it would be inhumane to ask a human to do it!', 'cv':0},
  {'bg':1, 'c':true, 'char':characterPlayer, 'expression':0, 'text':'', 'cv':0},
  {'bg':1, 'c':true, 'char':characterCopbot, 'expression':0, 'text':'The victim’s name is Issac!', 'cv':0},
  {'bg':1, 'c':true, 'char':characterPlayer, 'expression':0, 'text':'...', 'cv':0},
  {'bg':1, 'c':true, 'char':characterPlayer, 'expression':0, 'text':'Anything else?', 'cv':0},
  {'bg':1, 'c':true, 'char':characterCopbot, 'expression':0, 'text':'Nope!', 'cv':0},
  {'bg':1, 'c':true, 'char':characterCopbot, 'expression':0, 'text':'', 'cv':0},
  {'bg':1, 'c':true, 'char':characterCopbot, 'expression':0, 'text':'No, What’s that?', 'cv':0},
  {'bg':1, 'c':true, 'char':characterCopbot, 'expression':0, 'text':'', 'cv':0},
  {'bg':1, 'c':true, 'char':characterCopbot, 'expression':0, 'text':'I didn’t find the body! But it was found in the trash!', 'cv':0},
  {'bg':1, 'c':true, 'char':characterPlayer, 'expression':0, 'text':'', 'cv':0},
  {'bg':1, 'c':true, 'char':characterPlayer, 'expression':0, 'text':'I think I’m done here.', 'cv':0},
  {'bg':1, 'c':true, 'char':characterPlayer, 'expression':0, 'text':'', 'cv':1},
  {'bg':2, 'c':false, 'char':characterPlayer, 'expression':0, 'text':'It’s a laundry room with a washer and dryer, a wash basin and a large garbage can.', 'cv':2},
  {'bg':2, 'c':false, 'char':characterPlayer, 'expression':0, 'text':'', 'cv':0},
  {'bg':2, 'c':false, 'char':characterPlayer, 'expression':0, 'text':'The floor is surprisingly clean for a laundry room, it looks like there’s no blood on the ground.', 'cv':0},
  {'bg':2, 'c':false, 'char':characterPlayer, 'expression':0, 'text':'', 'cv':0},
  {'bg':2, 'c':false, 'char':characterPlayer, 'expression':0, 'text':'It looks like the victim was stabbed in the chest. The time of death is 4:15.', 'cv':0},
  {'bg':2, 'c':false, 'char':characterPlayer, 'expression':0, 'text':'', 'cv':0},
  {'bg':2, 'c':false, 'char':characterPlayer, 'expression':0, 'text':'It’s a normal trash can, there’s dust, papers and a full salmon. There’s also a light smear of blood on the inside.', 'cv':0},
  {'bg':2, 'c':false, 'char':characterPlayer, 'expression':0, 'text':'', 'cv':0},
  {'bg':2, 'c':false, 'char':characterPlayer, 'expression':0, 'text':'The washer has a few clothing pieces in it, this guy liked sparkly and shiny stuff.', 'cv':0},
  {'bg':2, 'c':false, 'char':characterPlayer, 'expression':0, 'text':'', 'cv':0},
  {'bg':2, 'c':false, 'char':characterPlayer, 'expression':0, 'text':'The dryer is empty.', 'cv':0},
  {'bg':2, 'c':false, 'char':characterPlayer, 'expression':0, 'text':'', 'cv':0},
  {'bg':2, 'c':false, 'char':characterPlayer, 'expression':0, 'text':'I think I’m done here', 'cv':0},


]

//Functions for switching things, stuff like that
function name(character){
  const N=document.getElementById("Name");
  N.textContent =character.name;
  N.style.color = character.nameColour;
}
function changeDialogue(D){
  const N=document.getElementById("box");
  N.textContent=dialogue[D].text;
  document.getElementById("box").style.visibility = 'visible';
}
function changeScene(newBG){
  document.getElementById("Name").style.visibility = 'visible';
  document.getElementById("char").style.visibility = 'visible';
  document.getElementById("textbox").style.visibility = 'visible';
  document.getElementById("box").style.visibility = 'visible';
  document.getElementById("bg").src='images/background/'+backgrounds[newBG];
}
function endScene(){
  document.getElementById("Name").style.visibility = 'hidden';
  document.getElementById("char").style.visibility = 'hidden';
  document.getElementById("textbox").style.visibility = 'hidden';
  document.getElementById("box").style.visibility = 'hidden';
}
function questionVis1(B){
  if(B){
    if(document.getElementById("Q1")!=null){
      document.getElementById("Q1").style.visibility = 'visible';
    }
    if(document.getElementById("Q2")!=null){
      document.getElementById("Q2").style.visibility = 'visible';
    }
    if(document.getElementById("Q3")!=null){
      document.getElementById("Q3").style.visibility = 'visible';
    }
    document.getElementById("test").style.visibility = 'hidden';
  }
  else{
    if(document.getElementById("Q1")!=null){
      document.getElementById("Q1").style.visibility = 'hidden';
    }
    if(document.getElementById("Q2")!=null){
      document.getElementById("Q2").style.visibility = 'hidden';
    }
    if(document.getElementById("Q3")!=null){
      document.getElementById("Q3").style.visibility = 'hidden';
    }
    document.getElementById("test").style.visibility = 'visible';
  }
}
function questionVis2(B){
  if(B){
    if(document.getElementById("Q4")!=null){
      document.getElementById("Q4").style.visibility = 'visible';
    }
    if(document.getElementById("Q5")!=null){
      document.getElementById("Q5").style.visibility = 'visible';
    }
    if(document.getElementById("Q6")!=null){
      document.getElementById("Q6").style.visibility = 'visible';
    }
    if(document.getElementById("Q7")!=null){
      document.getElementById("Q7").style.visibility = 'visible';
    }
    if(document.getElementById("Q8")!=null){
      document.getElementById("Q8").style.visibility = 'visible';
    }

    document.getElementById("test").style.visibility = 'hidden';
  }
  else{
    if(document.getElementById("Q4")!=null){
      document.getElementById("Q4").style.visibility = 'hidden';
    }
    if(document.getElementById("Q5")!=null){
      document.getElementById("Q5").style.visibility = 'hidden';
    }
    if(document.getElementById("Q6")!=null){
      document.getElementById("Q6").style.visibility = 'hidden';
    }
    if(document.getElementById("Q7")!=null){
      document.getElementById("Q7").style.visibility = 'hidden';
    }
    if(document.getElementById("Q8")!=null){
      document.getElementById("Q8").style.visibility = 'hidden';
    }
    document.getElementById("test").style.visibility = 'visible';
  }
}


//main functions for game
function draw(D){
  if(D==8){
    questionVis1(true);
    document.getElementById("box").style.visibility = 'hidden';
    document.getElementById("test").style.visibility = 'hidden';
    name(dialogue[D].char);
  }
  else if(D==13||D==15||D==17){
    if(QS1==3){
      I=18
      draw(I);
    }
    else
    I=8;
    draw(I);
  }
  else if(D==21){
    questionVis2(true);
    document.getElementById("box").style.visibility = 'hidden';
    document.getElementById("test").style.visibility = 'hidden';
    name(dialogue[D].char);
  }
  else if(D==(23||25||29||31||32)){
    if(QS2==5){
      I==31;
    }
    else{
      I=21;
      draw(I);
    }
  }
  else{
    if(dialogue[D].cv==0||dialogue[D].cv==2){
      if(dialogue[D].cv==2){
        changeScene(dialogue[D].bg);
      }
      if(dialogue[D].char!=characterPlayer){
        let x=dialogue[D].char.sprites[dialogue[D].expression];
        document.getElementById("char").src='images/Sprites/'+ x;
        document.getElementById("char").style.visibility = 'visible';
      }
      else if(!dialogue[D].c){
        document.getElementById("char").style.visibility = 'hidden';
      }
      name(dialogue[D].char);
      changeDialogue(D);
      document.getElementById("cv").style.visibility = 'hidden';
    }
    else if(dialogue[D].cv==1){
      endScene();
    }
  }

  console.log(D);
}

document.getElementById("test").onclick = function(){
  draw(I);
  I+=1;
};
document.getElementById("Q1").onclick = function(){
  questionVis1(false);
  I=9;
  draw(I);
  I+=1;
  document.getElementById("Q1").remove();
  QS1+=1;
};
document.getElementById("Q2").onclick = function(){
  questionVis1(false);
  I = 14;
  draw(I);
  I+=1;
  document.getElementById("Q2").remove();
  QS1+=1;
};
document.getElementById("Q3").onclick = function(){
  questionVis1(false);
  I = 16;
  draw(I);
  I+=1;
  document.getElementById("Q3").remove();
  QS1+=1;
};
document.getElementById("Q4").onclick = function(){
  questionVis2(false);
  I = 22;
  draw(I);
  I+=1;
  document.getElementById("Q4").remove();
  QS2+=1;
};
document.getElementById("Q5").onclick = function(){
  questionVis2(false);
  I = 22;
  draw(I);
  I+=1;
  document.getElementById("Q5").remove();
  QS2+=1;
};
document.getElementById("Q6").onclick = function(){
  questionVis2(false);
  I = 22;
  draw(I);
  I+=1;
  document.getElementById("Q6").remove();
  QS2+=1;
};
document.getElementById("Q7").onclick = function(){
  questionVis2(false);
  I = 22;
  draw(I);
  I+=1;
  document.getElementById("Q7").remove();
  QS2+=1;
};
document.getElementById("Q8").onclick = function(){
  questionVis2(false);
  I = 22;
  draw(I);
  I+=1;
  document.getElementById("Q8").remove();
  QS2+=1;
};
