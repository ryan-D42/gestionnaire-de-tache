//crée une variable est récupère sa valeur par l'id
let init = document.getElementById("tache");
let formulaire = document.getElementById("formulaire");

// crée un evènement
formulaire.addEventListener("submit", function (e) {

    //empeche la soumission du formulaire
    e.preventDefault();

    //recup le ul par l'id
    let liste = document.getElementById("liste");

    //recup l'input tache
    let tache = init.value;

    //créer un li avec createElement
    let newLi = document.createElement("li");

    //textContent la valeur de l'input tache dans ton li
    newLi.textContent = tache;

    //appendChild le li dans le ul.
    liste.appendChild(newLi);

    //crée un newbouton dans le li
    let newBouton = document.createElement("button")
    newBouton.textContent = "Supprimé"
    newLi.appendChild(newBouton)

    //crée le bouton modifié
    let newBoutonModif = document.createElement("button")
    newBoutonModif.textContent = "modification"
    newLi.appendChild(newBoutonModif)


    //ajoute un évènement au click de supprimé
    newBouton.addEventListener("click", function () {
        liste.removeChild(newLi)
    })

    //ajoute un évènement au click de modifié
    newBoutonModif.addEventListener("click", function () {
        let newForm = document.createElement("form")
        //crée un input
        let newinput = document.createElement("input")
        //crée un bouton sauvegarde
        let newboutonSauv = document.createElement("button")

        newboutonSauv.textContent = "sauvegarder"

        //crée dans un formulaire un input et un bouton
        newLi.appendChild(newForm)
        newForm.appendChild(newinput)
        newForm.appendChild(newboutonSauv)
        newBoutonModif.remove()

        //ajoute un évènement a la soumision du formulaire
        newForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let bert= newinput.value
            newLi.textContent=bert
            console.log(bert);
            
            //recrée les boutons
            newLi.appendChild(newBouton)
            newLi.appendChild(newBoutonModif)



        })

    })

})
