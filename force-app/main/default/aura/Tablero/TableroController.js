({
    Painting : function(component, event, helper) {

        var dato1 = event.getParam("data1");
        var dato2 = event.getParam("data2");
        var OpcionSeleccionada = event.getParam("OpcionSeleccionada");
        
        console.log(OpcionSeleccionada);

        component.get("v.mensaje");
        component.set("v.mensaje", "");

        if(OpcionSeleccionada == "DNI"){
            var numdni = parseInt(dato1);
            const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];

            if(dato2 == letras[numdni%23])
                component.set("v.mensaje", "Letra correcta");
            if( dato2 != letras[numdni%23])
                component.set("v.mensaje", "letra incorrecta");
        }

        if(OpcionSeleccionada == "IMC"){
            var IMC = parseFloat(dato1)/(parseFloat(dato2)*parseFloat(dato2));
            console.log(IMC);

            if(IMC > 30)
                component.set("v.mensaje", "OBESIDAD");
            if(IMC < 30 && IMC > 25)
                component.set("v.mensaje", "SOBREPESO");
            if(IMC < 18)
                component.set("v.mensaje", "POCO PESO");
            if(IMC < 25 && IMC > 18)
                component.set("v.mensaje", "NORMAL");
        }

        if(OpcionSeleccionada == "LEAPYEAR"){
            if(0 == (parseInt(dato1)%4)){
                component.set("v.mensaje", "El año SI es bisiesto");
            }else{
                component.set("v.mensaje", "El año NO es bisiesto")
            }
        }
    }

})
