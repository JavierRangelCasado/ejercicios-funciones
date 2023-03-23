function descuento(a,b){
    if(a==1){
    return(b)
    }
    
    if(2<=a && a<=4){
    return(b-(b*0.1))
    }
    
    if(5<=a && a<=10){
    return(b-(b*0.2))
    }
    
    else{
    return(b-(b*0.3))
    }
}
/*
== Igual , si lo de la izquierda y la derecha es igual , devuelve true
&& AND , si ambas izquierda y derecha son true
|| OR , si algunos de los lados es true 
! NOT , invierte el booleano true--> false --> true
*/