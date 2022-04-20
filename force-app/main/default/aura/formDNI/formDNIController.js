({
    myAction : function(component, event, helper) {

    },
    
    formEvent: function(component, event, helper) {
        var primerDato = component.find("dato1").getElement().value;
        var segundoDato = component.find("dato2").getElement().value;
        var OpcionSeleccionada = component.find("OpcionSeleccionada").getElement().value;

        var appevent = $A.get("e.c:formEvent");
        appevent.setParams({"data1":primerDato, "data2":segundoDato,"OpcionSeleccionada":OpcionSeleccionada});

        appevent.fire();
        
    }
})
