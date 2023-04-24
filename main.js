let validator={
    btnSubmit:(e)=>{
       e.preventDefault()
      
       let send= true

       let inputs= form.querySelectorAll('input')

        validator.clearError();


       for(let i=0; i< inputs.length;i++){
           let input=inputs[i]

          let check= validator.checkInput(input)

          if(check !== true){
              send=false
              validator.showError(input,check)
          }
       }

       if(send){
           form.submit()
       }
    },
    checkInput:(input)=>{
        let req = input.getAttribute('data-req')

        if(req !== null){
            req= req.split('|')

            for(let item in req){
                let detail= req[item].split('=')

                switch(detail[0]){
                    case 'required':
                        if(input.value == ''){
                            return 'Field cannot be empty'
                        }
                    break;

                     case 'min':
                         if(input.value.length < detail[1]){
                             return 'Field must have at least '+detail[1]+' characters'
                         }
                   break;

                   case 'email':
                       if(input.value !=''){
                       let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if(!regex.test(input.value.toLowerCase())){
                            return 'Email is not valid!'
                        }
                    }
                       break
                
                }
            }

        }

        return true
    },
    showError:(input , error)=>{
        input.style.borderColor='red'

        let errorEl= document.createElement('div')
        errorEl.classList.add('error')
        errorEl.innerHTML=error

        input.parentElement.insertBefore(errorEl,input.ElementSibling)
    },
    clearError:()=>{
        let colorInput= form.querySelectorAll('input')
         for(let i= 0; i < colorInput.length; i++){
            colorInput[i].style=''
        }

        let elementError= document.querySelectorAll('.error')

        for(let i= 0; i < elementError.length; i++){
            elementError[i].remove()
        }
    }
}


var form= document.querySelector('.form')

form.addEventListener('submit',validator.btnSubmit)








fetch('https://api.github.com/users/nelson3design/repos?page=2&per_page=18')
.then(response=>response.json())
.then(response=>{
    console.log(response)
   
    console.log(response[12].html_url)
   var studion=document.querySelector('.studion')
   studion.href=response[12].html_url


})

fetch('https://api.github.com/users/nelson3design/repos')
.then(response=>response.json())
.then(response=>{
    console.log(response)
    console.log(response[17].html_url)
    console.log(response[18].html_url)
    console.log(response[19].html_url)
    console.log(response[13].html_url)
   var magic=document.querySelector('.magic')
   magic.href=response[17].html_url

   var desafio=document.querySelector('.desafio')
   desafio.href=response[18].html_url

   var imagi=document.querySelector('.imagi')
   imagi.href=response[19].html_url


   var nintendo=document.querySelector('.nintendo')
   nintendo.href=response[13].html_url
})

var btnDoubleBase = document.getElementById("btnDoubleBase")
var btnDoubleBase2 = document.getElementById("btnDoubleBase2")
var btnDouble = document.getElementById("btnDouble")
var btnDouble2 = document.getElementById("btnDouble2")

btnDouble.addEventListener('click',()=>{
    btnDoubleBase.classList.toggle('show')
    btnDoubleBase2.style.display = "none"
})
btnDouble2.addEventListener('click', () => {
    btnDoubleBase2.classList.toggle('show')
    btnDoubleBase.style.display = "none"
})


var btn_see = document.querySelector('.btn_see')

var see_more_text = document.querySelector('.see_more_text')
btn_see.addEventListener("click",()=>{
    see_more_text.classList.toggle('show_text')
})