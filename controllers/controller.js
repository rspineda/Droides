exports.saludo = (req, res) => {
    try{
        res.json('Hola Camarada!!, Vamos a bombardear unos cuantos objetivos!!! Por favor envía tu post request a:  /radar');
    }catch(e){
        console.log(e);
    }
};

exports.radar = (req, res) => {
    try{

        //1. ELIMINAR LAS COORDENADAS QUE SE DISTANCIA MAS DE 100 M TANTO DE LA COORDENADA X COMO DE LA Y.

        //esta coordenada realmente estaría alamacenada en memoria o en alguna BD a partir de la respuesta previa
        const coordenadaPrevia = [5, 7];
        const xPrevia = coordenadaPrevia[0];
        const yPrevia = coordenadaPrevia[1];

        const objetivosVisualizados = req.body;
        const arrayCoordenadas =  objetivosVisualizados.scan.map((o) => Object.values(o.coordinates));
        const xPositions = arrayCoordenadas.map((e) => e[0]);
        const yPositions = arrayCoordenadas.map((e) => e[1]);
        console.log('xPositions: ',xPositions);
        console.log('yPositions: ',yPositions);

        //xPosition: mapeo de xPositions
        //yPositions: mapeo de yPositions

        // if((xPrevia - xPosition) > 100 || (xPrevia - xPosition) < -100) {
        //     //eliminar elemento del array y guardar en memoria el inidice borrado
        // };

        // if((yPrevia - yPosition) > 100 || (yPrevia - yPosition) < -100) {
        //     //eliminar elemento del array y guardar en memoria el inidice borrado
        // };

        //volver a juntar el array unicamente con los indices que no han sido borrados.


        //2. APLICAR EL PROTOCOLO QUE PIDA.
        
        //Una posibilidad podría ser aplicar un switch para los protocolos que vienen en la llamada y apartir de ello filtrar el tipo de enemigo

        //3. FILTRAR el TIPO DE ENEMIGO

        //4. SELECCIONAR LA COORDENADA QUE CUMPLA TODOS LOS PASOS PREVIOS

        //5. DEVOLVERÍA EN JSON LAS COORDENADAS DEL OBJETO QUE CUMPLA TODOS LOS 4 PASOS PREVIOS.
        res.json(objetivosVisualizados.scan[0].coordinates); //Aquí sólo devuelvo esto para probar que funciona bien la api.

    }catch(e) {
        console.log(e);
    } 
};