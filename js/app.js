document.addEventListener("DOMContentLoaded",()=>{
    let el = document.querySelector(".inner-table-large")

    let user = ({
        copy_years: new Date().getFullYear(),
        el: document.querySelector("footer > p"),
        title: document.querySelector("footer p:nth-of-type(2) data")
    })
    user.el.innerText+= `${user.copy_years}`

    /* 
    détecter automatiquement le 
    changement de largeur de la 
    fenêtre du navigateur Web 
    */

     window.addEventListener("resize", (e) => {
         e.preventDefault();
            console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
            user.title.innerText= ` wide by  ${document.body.clientWidth}`
            document.body.clientWidth < 800 ? el.classList.add("inner-table-small") : el.classList.remove("inner-table-small");
            
    })
        
})