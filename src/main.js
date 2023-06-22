const navBtn = document.querySelector('#navBtn')

const menuPopUp = document.querySelector('#menuPopUP')

const closeBtn = document.querySelector('#closeBtn')

function displayPopUp(){
    // menuPopUp.classList.remove('hide')
    // menuPopUp.classList.add('active')
    menuPopUp.style.display = "block"
}


function closePopUp(e){
    // menuPopUp.classList.remove('active')
    // menuPopUp.classList.add('hide')
    console.log(!e.target.closest(".active"));
    if(e.target.matches("#closeBtn") || !e.target.closest(".active")){
    menuPopUp.style.display = "none"
}
}

navBtn.addEventListener('click',displayPopUp)
document.addEventListener('click',closePopUp,true)



// add inputs //
const addInputBtn = document.querySelector('#inputBtn')

const inputForm = document.querySelectorAll('.inputForm')

const inputText = document.querySelector('#inputText')

function addInputs(e) {
  e.preventDefault();
  const container = document.createElement("div")
  container.setAttribute('class','flex')

   /// create label ////
   const label = document.createElement('label')
    label.setAttribute('class','addInput')
    label.innerText=inputForm[0].children.length


    const cloneInput = inputText.cloneNode(true);
    

    container.appendChild(label)
    container.appendChild(cloneInput)

  const btnDiv = document.querySelector("#btnDiv");
 
  
  inputForm[0].insertBefore(container, btnDiv);

  console.log(inputForm[0].children.length);
}



addInputBtn.addEventListener('click',addInputs)