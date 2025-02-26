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
textTyper(" Track Save and Control","track",0)
textTyper(" Your Finances","finances",1)


const carCreator = (elementId,arr)=>{
    let element = document.querySelector(`#${elementId}`)

    arr.forEach((item)=>{

    })

}


const features = [
    {
        img:"img/feature1-01.png",
        text:"Expense Tacking"
    },{
        img:"img/feature-01.png",
        text:"Budget Management"
    },{
        img:"img/feature2-01.png",
        text:"Insights and Reports"
    },{
        img:"img/4.jpg",
        text:"Data Security"
    }
]

features.map((feature)=>{
    document.querySelector("#features").innerHTML += `
        <div class="p-3 shadow">
            <div class="img border">
                <img src="${feature.img}" alt="">
            </div>
            <div class="font-bold mt-3 py-2 text-center md:text-xl text-md bg-[#0a4e5c] text-white">${feature.text}</div>
        </div>
    `
})


const testmonials=[
    {
        style:"md:top-[20%] top-[10%] left-[63%]  hover:md:left-[63%]",
        img:"img/3.jpg",
        name:"Muse Ali",
        type:"Customer",
        speech:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et iusto explicabo ducimus magnam fugit dolore eum, architecto hic nesciunt veniam incidunt, velit laboriosam. Minus, quod."
    },
    {
        style:"top-[7%] left-[45%]  hover:md:left-[45%]",
        img:"img/3.jpg",
        name:"Muse Ali",
        type:"Customer",
        speech:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et iusto explicabo ducimus magnam fugit dolore eum, architecto hic nesciunt veniam incidunt, velit laboriosam. Minus, quod."
    },
    {
        style:"top-[25%] left-[25%]  hover:md:left-[25%]",
        img:"img/3.jpg",
        name:"Muse Ali",
        type:"Customer",
        speech:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et iusto explicabo ducimus magnam fugit dolore eum, architecto hic nesciunt veniam incidunt, velit laboriosam. Minus, quod."
    },
    {
        style:"md:top-[25%] top-[50%] left-[55%]  hover:md:left-[55%]",
        img:"img/3.jpg",
        name:"Muse Ali",
        type:"Customer",
        speech:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et iusto explicabo ducimus magnam fugit dolore eum, architecto hic nesciunt veniam incidunt, velit laboriosam. Minus, quod."
    },
    {
        style:"top-[60%] left-[20%]  hover:md:left-[20%]",
        img:"img/3.jpg",
        name:"Muse Ali",
        type:"Customer",
        speech:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et iusto explicabo ducimus magnam fugit dolore eum, architecto hic nesciunt veniam incidunt, velit laboriosam. Minus, quod."
    },
    {
        style:"top-[30%] left-[70%]  hover:md:left-[70%]",
        img:"img/3.jpg",
        name:"Muse Ali",
        type:"Customer",
        speech:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et iusto explicabo ducimus magnam fugit dolore eum, architecto hic nesciunt veniam incidunt, velit laboriosam. Minus, quod."
    },
    {
        style:"top-[20%] md:left-[10%]",
        img:"img/3.jpg",
        name:"Muse Ali",
        type:"Customer",
        speech:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et iusto explicabo ducimus magnam fugit dolore eum, architecto hic nesciunt veniam incidunt, velit laboriosam. Minus, quod."
    },
    {
        style:"md:top-[20%] top-[10%] left-[63%]  hover:md:left-[63%]",
        img:"img/3.jpg",
        name:"Muse Ali",
        type:"Customer",
        speech:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et iusto explicabo ducimus magnam fugit dolore eum, architecto hic nesciunt veniam incidunt, velit laboriosam. Minus, quod."
    }
]