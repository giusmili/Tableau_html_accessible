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
    
    /* 
    structured data schema
    stat : [
        {
            "classement" : 1,
            "langage" : "Python",
            "Type" : "App web",
            "Score" : 100%
        },
        {
            "classement" : 2,
            "langage" : "Java",
            "Type" : "App web",
            "Score" : 95%
            
        },
    ]
    */
    let stat = [
        {
            classement : 1,
            langage : "Python",
            Type : "App web",
            Score : "100%"
        },

        {
            classement : 2,
            langage : "Java",
            Type : "App web",
            Score : "95%"
            
        }
    ]
    /* test table */
    for( data of stat){
        console.log("Classement "+data.classement+"\n langage "+data.langage+"\n type "+data.Type+"\n score "+data.Score)
    }
    console.table(stat)
        
})