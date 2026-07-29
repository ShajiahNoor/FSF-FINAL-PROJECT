
const form = document.getElementById("profileForm");

const preview = document.getElementById("previewSection");

const cardName = document.getElementById("cardName");

const cardRole = document.getElementById("cardRole");

const cardSkill = document.getElementById("cardSkill");

const downloadBtn = document.getElementById("downloadBtn");


form.addEventListener("submit", function(e){

    e.preventDefault();


    const name = document.getElementById("fullName").value;

    const role = document.getElementById("role").value;

    const skill = document.getElementById("skill").value;


    cardName.textContent = name;

    cardRole.textContent = role;

    cardSkill.textContent = "#" + skill.toUpperCase();


    preview.classList.remove("hidden");

});


downloadBtn.addEventListener("click", () => {
        window.print();

});
