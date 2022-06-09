console.log("aplicacion calculadora");

function dañoArma(){
    const forma = document.getElementById("forma");
    let Nivel = forma["Nivel"];
    let Skill = forma["Skill"];
    let Arma = forma["Arma"];
    let dañoArma = (parseInt(Skill.value)/5) + (1.2*(parseInt(Arma.value)*((parseInt(Nivel.value)+4)/28)));
    let berserkMax = ((1.5*(parseInt(Skill.value)+(parseInt(Arma.value)))) + parseInt(Nivel.value)/5);
    let fierceBerserkMax = ((3*(parseInt(Skill.value)+(2*parseInt(Arma.value)))) + parseInt(Nivel.value)/5);
    let groundShake = ((1.1*(parseInt(Skill.value)+(parseInt(Arma.value)))) + parseInt(Nivel.value)/5);
    let whirlwindThrow = (parseInt(Skill.value) + parseInt(Arma.value) + parseInt(Nivel.value)/5);
    let sd = (parseInt(Nivel.value)*0.2) + (parseInt(Magic.value)*7.395) + 46;
    let ice = (parseInt(Nivel.value)*0.2) + (parseInt(Magic.value)*2) + 12;

    if(isNaN(dañoArma))
        dañoArma = "No puede esta vacio";
    document.getElementById("dañoArma").innerHTML = `Daño de Arma: ${Math.round(dañoArma)}`;
    console.log(`Resultado: ${dañoArma}`)

    if(isNaN(fierceBerserkMax))
        fierceBerserkMax = "No puede esta vacio";
    document.getElementById("fierceBerserkMax").innerHTML = `Fierce Berserk: ${fierceBerserkMax} Max`;

    if(isNaN(berserkMax))
        berserkMax = "No puede esta vacio";
    document.getElementById("berserkMax").innerHTML = `Berserk: ${berserkMax} Max`;

    if(isNaN(groundShake))
        groundShake = "No puede esta vacio";;
    document.getElementById("groundShake").innerHTML = `GroundShaker: ${Math.round(groundShake)} Max`;
    
    if(isNaN(whirlwindThrow))
        whirlwindThrow = "No puede esta vacio";;
    document.getElementById("whirlwindThrow").innerHTML = `Whirlwind Throw: ${Math.round(whirlwindThrow)} Max`;

    if(isNaN(sd))
        sd = "No puede esta vacio";;
    document.getElementById("sd").innerHTML = `Sudden Death: ${Math.round(sd)} Max`;

    if(isNaN(ice))
        ice = "No puede esta vacio";;
    document.getElementById("ice").innerHTML = `Ice Strike: ${Math.round(ice)} Max`;
}