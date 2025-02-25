let menu = document.querySelector("#menu")
let menuIcon = document.querySelector("#menu-icon")
menuIcon.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
    menuIcon.children[0].classList.toggle("hidden")
    menuIcon.children[1].classList.toggle("hidden")
})



const textTyper = (text,elementId,repeat)=>{
    let element = document.querySelector(`#${elementId}`)
    element.innerHTML = ""
    text.split("").forEach((letter,index)=>{
        setTimeout(()=>{
            element.innerHTML +=letter
            if(index === text.length -1){
               if( repeat === 1){
                    setTimeout(textTyper(text,elementId,repeat),1000)
               }
            }
        },index * 400)
    })
    
}
// textTyper(" Track Save and Control","track",0)
// textTyper(" Your Finances","finances",1)


const carCreator = (elementId,arr)=>{
    let element = document.querySelector(`#${elementId}`)

    arr.forEach((item)=>{

    })

}