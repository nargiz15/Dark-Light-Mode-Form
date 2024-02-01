const darkmood = document.querySelector(".checkbox")
const title = document.querySelector(".title")

darkmood.addEventListener("click", function(){
      // document.body.classList.toggle("dark")
            if( document.body.classList.toggle("dark")){
              title.textContent=("Dark Theme")
              
            }
            else(
                  title.textContent=("Light Theme") 
            )
})