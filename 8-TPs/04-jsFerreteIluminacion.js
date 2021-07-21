/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let lampara = 35;
    let marca;
    let cantidadDeLamparas;
    let descuento;
    let precioFinalConDescuento;
    let IIBB;

    cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    //document.getElementById("txtIdprecioDescuento").value = precioFinalConDescuento;

        if (cantidadDeLamparas >=6) {
             precioFinalConDescuento = (lampara*cantidadDeLamparas)/2;          
            //alert("Su precio final es " + precioFinalConDescuento); 
            document.getElementById("txtIdprecioDescuento").value = precioFinalConDescuento.toFixed(2);
        }
     switch (cantidadDeLamparas) {
        /*case 6:
            precioFinalConDescuento = (lampara*cantidadDeLamparas)/2;          
            //alert("Su precio final es " + precioFinalConDescuento); 
            document.getElementById("txtIdprecioDescuento").value = precioFinalConDescuento.toFixed(2);
            break;*/
        case 5:
            if (marca == "ArgentinaLuz") {
                precioFinalConDescuento = (lampara*cantidadDeLamparas)/1.40;   
                document.getElementById("txtIdprecioDescuento").value = precioFinalConDescuento.toFixed(2);
            } else {
                precioFinalConDescuento = (lampara*cantidadDeLamparas)/1.30;   
                document.getElementById("txtIdprecioDescuento").value = precioFinalConDescuento.toFixed(2);
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                precioFinalConDescuento = (lampara*cantidadDeLamparas)/1.25;   
                document.getElementById("txtIdprecioDescuento").value = precioFinalConDescuento.toFixed(2);
            } else {
                precioFinalConDescuento = (lampara*cantidadDeLamparas)/1.20;   
                document.getElementById("txtIdprecioDescuento").value = precioFinalConDescuento.toFixed(2);
            }
            break;
        case 3:
            if (marca == "ArgentinaLuz") {
                precioFinalConDescuento = (lampara*cantidadDeLamparas)/1.15;   
                document.getElementById("txtIdprecioDescuento").value = precioFinalConDescuento.toFixed(2);
            } else if (marca == "FelipeLamparas") {
                precioFinalConDescuento = (lampara*cantidadDeLamparas)/1.10;   
                document.getElementById("txtIdprecioDescuento").value = precioFinalConDescuento.toFixed(2);
            } else {
                precioFinalConDescuento = (lampara*cantidadDeLamparas)/1.05;   
                document.getElementById("txtIdprecioDescuento").value = precioFinalConDescuento.toFixed(2);
            }
            break;
    }
    if (precioFinalConDescuento >= 120) {
            IIBB = precioFinalConDescuento * 1.20;
            alert("Usted paga " + IIBB + " de Ingresos Brutos");
        
    }

    /*
    switch(cantidad){
        case 1:
        case 2:
        break;
        case 3:
            if(marca =="ArgentinaLuz"){
                porcDescuento = 0.15;
            } else if (marca == "FelipeLampra"){
                porcDescuento = 0.10
            } else {
                porcDescuento = 0.05
            }

    }


    */
}



