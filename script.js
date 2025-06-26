function calcula(){

    let a = parseFloat(document.getElementById('numero_a').value);
    let b = parseFloat(document.getElementById('numero_b').value);
    let c = parseFloat(document.getElementById('numero_c').value);
    
    if(a == 0){
        alert("não é função de segundo grau!");
        return;
    }

    let delta = (b*b)-(4*a*c);
    if(delta<0){
        alert("não tem raiz");
        return;
        
    }

    if(delta==0){
        let bhascara= -b/(2*a);
        document.getElementById('resultado').textContent =  + bhascara;
        return;
    }  
    let x1 = (-b + Math.sqrt(delta))/(2*a);
}   let x2 = (-b - Math.sqrt(delta))/(2*a);