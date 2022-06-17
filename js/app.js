console.log("aplicacion calculadora");

function dañoArma(){

    const forma = document.getElementById("forma");
    let Nivel = forma["Nivel"];
    let Skill = forma["Skill"];
    let Arma = forma["Arma"];
    let dañoArma = (parseInt(Skill.value)/5) + (1.2*(parseInt(Arma.value)*((parseInt(Nivel.value)+4)/28)));
    let dañoDist = (0.09*parseInt(Skill.value)*parseInt(Arma.value)+(parseInt(Nivel.value)/5)) ;
    let berserkMax = ((1.5*(parseInt(Skill.value)+(parseInt(Arma.value)))) + parseInt(Nivel.value)/5);
    let fierceBerserkMax = ((3*(parseInt(Skill.value)+(2*parseInt(Arma.value)))) + parseInt(Nivel.value)/5);
    let groundShake = ((1.1*(parseInt(Skill.value)+(parseInt(Arma.value)))) + parseInt(Nivel.value)/5);
    let whirlwindThrow = (parseInt(Skill.value) + parseInt(Arma.value) + parseInt(Nivel.value)/5);
    let etherealSpear = (parseInt(Skill.value) + 25 + (parseInt(Nivel.value)/5));
    let etherealSpearMin = (((parseInt(Skill.value) + 25)/3) + (parseInt(Nivel.value)/5));
    let sd = (parseInt(Nivel.value)*0.2) + (parseInt(Magic.value)*7.395) + 46;
    let ice = (parseInt(Nivel.value)*0.2) + (parseInt(Magic.value)*2) + 12;

    if(isNaN(dañoArma))
        dañoArma = "No puede esta vacio";
    document.getElementById("dañoArma").innerHTML = `Daño de Arma: ${Math.round(dañoArma)}`;
    console.log(`Resultado: ${dañoArma}`)

    if(isNaN(dañoDist))
        dañoArma = "No puede esta vacio";
    document.getElementById("dañoDist").innerHTML = `Daño de Distancia: ${Math.round(dañoDist)}`;

    if(isNaN(etherealSpear))
        etherealSpear = "No puede esta vacio";
    if(parseInt(Nivel.value) >= 23)
    document.getElementById("etherealSpear").innerHTML = `Ethereal Spear: ${Math.round(etherealSpear)} Max`;
    if(parseInt(Nivel.value) >= 23)
    document.getElementById("etherealSpearMin").innerHTML = `------------------ ${Math.round(etherealSpearMin)} Min`;

    if(isNaN(fierceBerserkMax))
        fierceBerserkMax = "No puede esta vacio";
    if(parseInt(Nivel.value) >= 90) 
    document.getElementById("fierceBerserkMax").innerHTML = `Fierce Berserk: ${fierceBerserkMax} Max`;

    if(isNaN(berserkMax))
        berserkMax = "No puede esta vacio";
    if(parseInt(Nivel.value) >= 35) 
    document.getElementById("berserkMax").innerHTML = `Berserk: ${berserkMax} Max`;

    if(isNaN(groundShake))
        groundShake = "No puede esta vacio";
    if(parseInt(Nivel.value) >= 33) 
    document.getElementById("groundShake").innerHTML = `GroundShaker: ${Math.round(groundShake)} Max`;
    
    if(isNaN(whirlwindThrow))
        whirlwindThrow = "No puede esta vacio";
    if(parseInt(Nivel.value) >= 28) 
    document.getElementById("whirlwindThrow").innerHTML = `Whirlwind Throw: ${Math.round(whirlwindThrow)} Max`;

    if(isNaN(sd)) 
        sd = "No puede esta vacio";
    if(parseInt(Magic.value) >= 15 && parseInt(Nivel.value) >= 45) 
    document.getElementById("sd").innerHTML = `Sudden Death: ${Math.round(sd)} Max`;
    
    if(isNaN(ice))
        ice = "No puede esta vacio";
    if(parseInt(Nivel.value) >= 15) 
    document.getElementById("ice").innerHTML = `Ice Strike: ${Math.round(ice)} Max`;
    
}

function limpiar(){
    location.reload()
}

function validar() {
    const botonActivo = document.getElementById("calcular");
    botonActivo.disabled = false;
}