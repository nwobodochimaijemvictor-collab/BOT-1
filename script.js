let memory = 0;

function appendValue(value){
  document.getElementById("display").value += value;
}

function clearDisplay(){
  document.getElementById("display").value = "";
}

function deleteLast(){
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate(){
  try{
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  }catch{
    document.getElementById("display").value = "Error";
  }
}

/* Memory Functions */
function memoryAdd(){
  memory += Number(document.getElementById("display").value) || 0;
}

function memoryRecall(){
  document.getElementById("display").value += memory;
}

function memoryClear(){
  memory = 0;
}

/* Keyboard Support */
document.addEventListener("keydown", function(e){
  if("0123456789+-*/().".includes(e.key)){
    appendValue(e.key);
  }else if(e.key === "Enter"){
    calculate();
  }else if(e.key === "Backspace"){
    deleteLast();
  }
});