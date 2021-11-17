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
            unite : "1 octet",
            abbreviation : "Aucune",
            taille : 1,
            exemple : "4 octets : Un caractère au format utf-8"
        },

        {
            unite : "1 kilooctet",
            abbreviation : "ko",
            taille : "10<sup>3</sup>",
            exemple : "20 ko : Mots prononcés par une personne, par jour"
        },
        {
            unite : "1 megaoctet",
            abbreviation : "Mo",
            taille : "10<sup>6</sup>",
            exemple : "3 Mo : Texte d'une édition quotidienne du New York Times"
        },
        {
            unite : "1 gigaoctet",
            abbreviation : "Go",
            taille : "10<sup>9</sup>",
            exemple : "1 Go : Mots prononcés par une personne durant une vie"
        },
        {
            unite : "1 téraoctet",
            abbreviation : "To",
            taille : "10<sup>12</sup>",
            exemple : "93 To : Mots prononcés par l'ensemble de la population mondiale, par jour"
        },
        {
            unite : "1 pétaoctet",
            abbreviation : "Po",
            taille : "10<sup>15</sup>",
            exemple : "4 Po : Données générées par Facebook, par jour"
        },
        {
            unite : "1 exaoctet",
            abbreviation : "Eo",
            taille : "10<sup>18</sup>",
            exemple : "605 Eo : Données générées par le téléscope SKA, par jour"
        },
        {
            unite : "1 zetaoctet",
            abbreviation : "Zo",
            taille : "10<sup>21</sup>",
            exemple : "40 Zo : Données générées par le web en 2020, par an"
        }

    ]
    /* test table */
    let elements = document.querySelector("tbody")
    for(data of stat){
        console.log("unité "+data.unite+"\n abbréviation "+data.abbreviation+"\n taille "+data.taille+"\n exemple "+data.exemple)
        elements.innerHTML+=`<tr>
            <td>${data.unite}</td>
            <td>${data.abbreviation}</td>
            <td>${data.taille}</td>
            <td>${data.exemple}</td>
        </tr>  
        `
    }
    console.table(stat)
    console.log(typeof stat)


    //exemple méthode split
    let myString = "Hello World. How are you doing?";
    let splits = myString.split(" ", 5); //3 mot dans une clé valeur séparés par une virgule

    console.table(splits)

    let outputstring = myString.split(" ");
    console.log(outputstring[4])//séléctionner le 4ème mot
    
    //méthode join
    
    console.log(splits.join(' / '))// séparateur sur du contenu d'un tableau
    /*
    java !=java
    script
    object
    notation
    class user{
        constructeur(nom, prenom, ville)
        getter,
        setter
    }
    App:{
        logiciel: "Discord",
        description: "décrire le produit",
        Date_de_sortie_initiale: "13 mai 2015"

    }
    */
   const app = ({
        logiciel: "Discord",
        description: "décrire le produit",
        Date_de_sortie_initiale: "13 mai 2015"
   })
   console.log(JSON.stringify(stat))
   console.table(app)




        
})