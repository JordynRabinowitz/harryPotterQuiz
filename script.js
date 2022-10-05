var harryPoints = 0;
var ronPoints = 0;
var hermionePoints = 0;
var dracoPoints = 0;
function submitForm(form){
  if(form.movies.checked && form.movies.value == 0){harryPoints+=5;}
  else if(form.movies.checked && form.movies.value == 1){dracoPoints+=5;}
  else if(form.movies.checked && form.movies.value == 2){ronPoints+=5;}
  else if(form.movies.checked && form.movies.value == 3){hermionePoints+=5;}

  if(form.mycheck1.checked){harryPoints+=5;}
  if(form.mycheck2.checked){ronPoints+=2;}
  if(form.mycheck3.checked){harryPoints+=2;}
  if(form.mycheck4.checked){dracoPoints+=2;}
  if(form.mycheck5.checked){hermionePoints+=10;}
  if(form.mycheck6.checked){ronPoints+=10;}
  if(form.mycheck7.checked){harryPoints+=2;}
  if(form.mycheck8.checked){dracoPoints+=10;}

  if(form.number.value == 1){hermionePoints+=1;}
  else if(form.number.value == 2){harryPoints+=1;}
  else if(form.number.value == 3){ronPoints+=1;}
  else if(form.number.value == 4){harryPoints+=1;}
  else if(form.number.value == 5){ronPoints+=1;}
  else if(form.number.value == 6){dracoPoints+=3;}
  else if(form.number.value == 7){hermionePoints+=3;}

  if(form.slider.value < 25){dracoPoints+=5;}
  else if(form.slider.value < 50){ronPoints+=5;}
  else if(form.slider.value < 75){hermionePoints+=5;}
  else if(form.slider.value <=100){harryPoints+=5;}

  let number = form.color.value;

  var answer = ""
  if(harryPoints >= ronPoints && harryPoints >= hermionePoints && harryPoints >= dracoPoints){answer = "Harry Potter";}
  else if(ronPoints >= harryPoints && ronPoints >= hermionePoints && ronPoints >= dracoPoints){answer = "Ron Weasley";}
  else if(hermionePoints >= harryPoints && hermionePoints >= ronPoints && hermionePoints >= dracoPoints){answer = "Hermione Granger";}
  else{answer = "Draco Malfoy";}


  document.getElementById("result").style.color = number;
  document.getElementById("result").innerText = `You are ${answer}`;

  event.preventDefault();
}