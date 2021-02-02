document.querySelector(".hamburguer").addEventListener("click", () => 
    document.querySelector(".container").classList.toggle("show-menu")
)

document.querySelector("#amount").addEventListener("change", attPrize)
// document.querySelector("#js").addEventListener("change", attPrize)
document.querySelector("#layout-yes").addEventListener("change", attPrize)
document.querySelector("#layout-no").addEventListener("change", attPrize)
document.querySelector("#deadline").addEventListener("change", function(){
    const deadline = document.querySelector("#deadline").value
    document.querySelector("label[for=deadline").innerHTML = `Deadline: ${deadline} weeks`
    attPrize()
})

function attPrize(){
    const amount = document.querySelector("#amount").value
    // const haveJS = document.querySelector("#js").checked
    const includeLayout = document.querySelector("#layout-yes").checked
    const deadline = document.querySelector("#deadline").value


    let prize = amount *100;
    // if (haveJS) prize *= 1.1
    if (includeLayout) prize += 100
    let urgency = 1 - deadline*0.1; 
    prize *= 0.5 + urgency
    
    document.querySelector("#prize").innerHTML = `R$ ${prize.toFixed(2)}`
}

