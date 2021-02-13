try{
    const menu = document.querySelector(".menu-expand");

    menu.addEventListener("click",(event)=>{
        const aside = document.querySelector("aside");
        aside.classList.toggle("opened")
    })
}catch(e){
    console.log("")
}