const professeurs = [
    { 
        id: 1, 
        nom: "Wane", 
        prenom: "Baila", 

    },
    { 
        id: 2, 
        nom: "LO", 
        prenom: "Mahmadane", 
    },
    { 
        id: 3, 
        nom: "Sabaly", 
        prenom: "Adama", 

    },
];

/* Recuperation du formulaire par son id*/
const form = document.getElementById("createForm");
/* Recuperation des champs par leurs Ids*/
const nomElem = document.getElementById("nom");
const prenomElem = document.getElementById("prenom");

const formFields = [nomElem, prenomElem];

/* Application d'un ecouteur d'evenement sur le formulaire*/
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    for (const field of formFields) {
        if(isEmpty(field)){
            showErrorMessage(field);
            return; 
        }
        showSuccessMessage(field);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    genererDataProfesseur();
    activateFocus();
});

//const inputs = [nomElem, prenomElem];

const inputs = document.getElementsByClassName('form-control');

function activateFocus(){
    for (const input of inputs) {
        input.addEventListener('focus', () => {
            deleteClass(input, 'is-invalid', 'invalid-feedback');
            deleteClass(input, 'is-valid', 'valid-feedback');
        })
    }
}


// Les fonctions de validation

function isEmpty(champ){
    return champ.value == '';
}

// Fonction d'affichage des messages de succès ou d"erreur sur les champs

function showErrorMessage(champ){
    const champError = document.getElementById(`${champ.id}Error`);
    champ.classList.add('is-invalid');
    champError.classList.add('invalid-feedback');
    champError.textContent = "Ce champ est obligatoire";
}

function showSuccessMessage(champ){
    const champError = document.getElementById(`${champ.id}Error`);
    champ.classList.remove('is-invalid'); 
    champError.classList.remove('invalid-feedback');

    champ.classList.add('is-valid');
    champError.classList.add('valid-feedback');

    champError.textContent = '';
}

function deleteClass(champ, classInput, classError){
    const champError = document.getElementById(`${champ.id}Error`);
    if(nomElem.classList.contains(classInput)){
        champ.classList.remove(classInput); 
        champError.classList.remove(classError);
        champError.textContent = '';
    }
}




const tbody = document.getElementById("tbodyProfs");

document.getElementById("btnOpenForm").addEventListener("click", openForm);
document.getElementById("closeForm").addEventListener("click", closeForm);

function genererDataProfesseur() {
    tbody.innerHTML = "";
    professeurs.forEach((professeur) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${professeur.nom}</td>
            <td>${professeur.prenom}</td>
            <td>${professeur.specialite}</td>
            <td>
                <button class="btn btn-sm btn-warning">Modifier</button>
                <button class="btn btn-sm btn-danger">Supprimer</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}


function openForm() {
    form.style.display = "block";
}

function closeForm() {
    form.style.display = "none";
}
