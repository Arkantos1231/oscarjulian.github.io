// function that applies the 'selected' style to the pressed button
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //We make the responsive menu disapear once an option was selected
    var x = document.getElementById("nav");
    x.className = "";
}

// Responsive menu function

function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className ==="") {
        x.className = "responsive"
    } else {
        x.className = "";
    }
}


//we detect th scolling to apply the animation of the skillbars
window.onscroll = function(){
    efectoHabilidades()
};

//Function that applies aniumation to skillbars

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}


document.getElementById("contact-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    // Validar captcha
    const captchaToken = hcaptcha.getResponse();
    if (!captchaToken) {
        document.querySelector("#form-result").innerHTML = "❗ Please complete the CAPTCHA.";
        return;
    }

    const form = this;
    const formData = new FormData(form);
    formData.append("h-captcha-response", captchaToken);

    const response = await fetch("https://formsubmit.co/ajax/julian0877@hotmail.com", {
        method: "POST",
        body: formData
    });

    if (response.ok) {
        document.querySelector("#form-result").innerHTML = "✅ Your message has been sent!";
        form.reset();
        hcaptcha.reset();
        document.querySelector("#contact-form").style.display = "none";
    } else {
        document.querySelector("#form-result").innerHTML = "❌ Error sending message. Try again later.";
    }
});
