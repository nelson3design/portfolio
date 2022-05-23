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