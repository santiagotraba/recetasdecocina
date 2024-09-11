const recetas = [
    {
        nombre: "Pasta con salsa de tomate y albahaca",
        porciones: 4,
        tiempo: "40 minutos",
        ingredientes: "400 g de pasta (espaguetis, penne, fusilli, etc). 4 tomates maduros grandes. 2 dientes de ajo. 1 cebolla pequeña. 3 cucharadas de aceite de oliva. 10 hojas de albahaca fresca. Sal y pimienta al gusto. Queso parmesano rallado (opcional)",
        preparacion: "Picar finamente la cebolla y los ajos. Lavar y cortar los tomates en cubos pequeños. Lavar las hojas de albahaca y picarlas finamente. En una olla grande, hervir abundante agua con sal. Añadir la pasta y cocinar según las instrucciones del paquete, hasta que esté al dente. Escurrir y reservar, guardando un poco del agua de cocción. En una sartén grande, calentar el aceite de oliva a fuego medio. Agregar la cebolla y cocinar hasta que esté transparente. Añadir el ajo y cocinar por un minuto más, cuidando que no se queme. Incorporar los tomates cortados y cocinar a fuego medio durante unos 10-15 minutos, removiendo ocasionalmente, hasta que se forme una salsa espesa. Agregar sal y pimienta al gusto. Si la salsa queda demasiado espesa, añadir un poco del agua de cocción de la pasta para ajustarla. Añadir las hojas de albahaca a la salsa y remover bien. Agregar la pasta cocida a la sartén con la salsa y mezclar para que se impregne bien. Servir la pasta caliente en platos hondos. Espolvorear con queso parmesano rallado si se desea." 
    },

    {
        nombre: "Pollo al curry con arroz",
        porciones: 4,
        tiempo: "40 minutos",
        ingredientes: "500 g de pechuga de pollo (cortada en cubos). 1 cebolla grande (finamente picada). 2 dientes de ajo (picados). 1 trozo pequeño de jengibre fresco (rallado). 2 cucharadas de pasta de curry (o polvo de curry). 400 ml de leche de coco. 2 cucharadas de aceite de oliva. Sal y pimienta al gusto. Cilantro fresco (para decorar). 1 taza de arroz basmati. 2 tazas de agua. Sal al gusto",
        preparacion: "En una sartén grande, calienta las 2 cucharadas de aceite de oliva a fuego medio. Añade la cebolla, el ajo y el jengibre rallado. Cocina hasta que la cebolla esté dorada y suave, unos 5-7 minutos. Sube un poco el fuego y añade los cubos de pollo. Cocina hasta que estén dorados por todos lados, unos 5-6 minutos. Incorpora la pasta o el polvo de curry, mezclando bien para que el pollo quede cubierto por completo. Añade la leche de coco y lleva a ebullición. Una vez que hierva, reduce el fuego y deja que todo se cocine a fuego lento durante 15 minutos. Revuelve de vez en cuando. Agrega sal y pimienta al gusto. Lava el arroz basmati en agua fría y luego ponlo en una cacerola con las 2 tazas de agua y sal al gusto. Lleva a ebullición, baja el fuego, tapa la cacerola y deja que el arroz se cocine a fuego lento durante 10-12 minutos o hasta que el agua se haya absorbido. Una vez cocido, apaga el fuego y deja reposar el arroz tapado durante unos 5 minutos. Sirve el pollo al curry sobre una cama de arroz y decora con cilantro fresco. Puedes acompañar con pan naan o una ensalada fresca" 
    },

    {
        nombre: "Tacos de pescado",
        porciones: "4 a 6 ",
        tiempo: "Entre 30 y 45 minutos",
        ingredientes: "500 g de filetes de pescado (puede ser tilapia, merluza o el de tu preferencia). 1 taza de harina. 1 taza de pan rallado. 1 huevo. 1 taza de leche. Sal y pimienta al gusto. 1 cucharadita de pimentón dulce (paprika). Aceite para freír. Tortillas de maíz o harina. 1 taza de crema agria o yogur natural. 2 cucharadas de mayonesa. 1 cucharada de jugo de limón. 1 diente de ajo, finamente picado. 1 cucharadita de cilantro fresco picado. Sal y pimienta al gusto. 1 taza de repollo rallado. 1 zanahoria, rallada. 1 aguacate, en rodajas. Limones cortados en gajos",
        preparacion: "Lava y seca los filetes de pescado. Córtalos en tiras o trozos del tamaño de un bocado. En un bol, mezcla la harina con el pimentón, la sal y la pimienta. En otro bol, bate el huevo con la leche. En un tercer bol, coloca el pan rallado. Pasa cada trozo de pescado por la mezcla de harina, luego por la mezcla de huevo y finalmente por el pan rallado, asegurándote de que estén bien cubiertos. Calienta aceite en una sartén grande a fuego medio-alto. Fríe los trozos de pescado en el aceite caliente hasta que estén dorados y crujientes, aproximadamente 3-4 minutos por cada lado. Escurre el pescado en papel absorbente para eliminar el exceso de aceite. En un bol, mezcla la crema agria o el yogur con la mayonesa, el jugo de limón, el ajo picado y el cilantro. Sazona con sal y pimienta al gusto. Revuelve bien y ajusta el sazón si es necesario. En un bol, mezcla el repollo rallado con la zanahoria. Puedes añadir un poco de vinagre y sal al gusto si prefieres. Calienta las tortillas en una sartén o en el microondas. Coloca el pescado frito sobre las tortillas. Agrega la mezcla de repollo y zanahoria, unas rodajas de aguacate y una cucharada de la salsa de crema. Sirve los tacos con gajos de limón al lado para exprimir por encima si lo deseas" 
    },

    {
        nombre: "Pollo al horno con papas y romero",
        porciones: "4",
        tiempo: "entre 40 y 50 minutos",
        ingredientes: "4 piezas de muslos o pechugas de pollo. 4 papas medianas. 3 dientes de ajo. 1 ramita de romero fresco (o 1 cucharadita de romero seco). 2 cucharadas de aceite de oliva. 1 limón. Sal y pimienta al gusto. 1 cucharadita de pimentón dulce o paprika (opcional)",
        preparacion: "Precalienta el horno a 200°C (390°F). Prepara el pollo: Lava bien las piezas de pollo y sécalas con papel de cocina, coloca las piezas en una bandeja para horno, exprime el jugo del limón sobre el pollo y añade sal, pimienta y pimentón al gusto, masajea bien el pollo para que quede cubierto por los condimentos. Corta las papas: Pela las papas (o déjalas con cáscara si lo prefieres) y córtalas en rodajas o gajos medianos, coloca las papas en la bandeja junto al pollo. Prepara el aliño: En un pequeño recipiente, mezcla el aceite de oliva con los ajos picados finamente y las hojas de romero, vierte esta mezcla sobre el pollo y las papas, asegurándote de que todo quede bien cubierto. Hornea: Lleva la bandeja al horno y cocina durante unos 40-50 minutos, o hasta que el pollo esté dorado y cocido por dentro, y las papas estén tiernas, a mitad de la cocción, puedes voltear las papas para que se doren por ambos lados. Sirve y disfruta: Una vez listo, saca del horno y sirve el pollo con las papas, puedes acompañarlo con una ensalada fresca o algunas verduras al vapor" 
    },

    {
        nombre: "Pasta al pesto con pollo",
        porciones: "4",
        tiempo: "30-40 minutos",
        ingredientes: "400 g de pasta (fusilli, penne o espagueti). 2 pechugas de pollo. 1 taza de hojas frescas de albahaca. 1/2 taza de queso parmesano rallado. 1/4 taza de piñones (puedes sustituirlos por nueces o almendras). 2 dientes de ajo. 1/2 taza de aceite de oliva. Sal y pimienta al gusto. Jugo de 1/2 limón (opcional)",
        preparacion: "Cocina la pasta: En una olla grande, hierve agua con sal, añade la pasta y cocina según las instrucciones del paquete (normalmente entre 8 y 10 minutos) hasta que esté al dente, escúrrela y reserva. Cocina el pollo: Mientras la pasta se cocina, corta las pechugas de pollo en cubos o tiras, sazónalas con sal y pimienta, calienta un poco de aceite de oliva en una sartén grande y cocina el pollo a fuego medio hasta que esté dorado y bien cocido (unos 7-10 minutos), reserva. Prepara el pesto: En una licuadora o procesador de alimentos, agrega las hojas de albahaca, los piñones, los dientes de ajo, el queso parmesano y el jugo de limón, comienza a procesar y ve agregando el aceite de oliva poco a poco hasta obtener una mezcla suave y homogénea, prueba y ajusta la sal y pimienta si es necesario. Mezcla todo: En la sartén con el pollo, añade la pasta cocida y vierte el pesto casero, revuelve bien hasta que todo esté cubierto con la salsa. Sirve: Puedes servir la pasta al pesto con un poco de queso parmesano extra por encima y algunas hojas de albahaca fresca para decorar" 
    },

    {
        nombre: "Tacos de pescado",
        porciones: "4",
        tiempo: "25-30 minutos",
        ingredientes: "500 g de filetes de pescado blanco (tilapia, merluza o bacalao). 8 tortillas de maíz o harina. 1 taza de col morada rallada. 1 taza de zanahoria rallada. 1 aguacate en rodajas. 1/2 taza de crema agria o yogurt griego. 1/4 taza de mayonesa. Jugo de 1 limón. 1 cucharadita de comino. 1 cucharadita de pimentón dulce (paprika). 1 cucharadita de ajo en polvo. 1 cucharadita de chile en polvo o ají molido (opcional). Sal y pimienta al gusto. Aceite de oliva",
        preparacion: "Sazona el pescado: En un recipiente, mezcla el comino, pimentón, ajo en polvo, chile en polvo (si lo usas), sal y pimienta, unta los filetes de pescado con esta mezcla de especias. Cocina el pescado: Calienta una sartén grande a fuego medio-alto con un poco de aceite de oliva, cocina los filetes de pescado durante unos 3-4 minutos por cada lado, hasta que estén bien cocidos y dorados, una vez listos, retíralos de la sartén y córtalos en tiras o trozos pequeños. Prepara la salsa: En un tazón pequeño, mezcla la crema agria (o yogurt), la mayonesa y el jugo de limón, añade una pizca de sal y pimienta, esta salsa le dará un toque cremoso y fresco a los tacos. Calienta las tortillas: Puedes calentar las tortillas en una sartén caliente o en el horno durante unos minutos para que queden suaves y calientes. Arma los tacos: Coloca una porción de pescado en cada tortilla, agrega un poco de col rallada, zanahoria, rodajas de aguacate y un poco de la salsa por encima. Sirve y disfruta: Acompaña con un poco de limón extra si lo deseas, ¡y disfruta de tus tacos de pescado frescos y sabrosos!" 
    },

    {
        nombre: "Sopa de tomate y albahaca",
        porciones: "4",
        tiempo: "35-40 minutos",
        ingredientes: "1 kg de tomates maduros (pueden ser frescos o enlatados). 1 cebolla mediana, picada. 2 dientes de ajo, picados. 1 zanahoria, pelada y picada. 4 tazas de caldo de verduras o pollo. 1/2 taza de hojas frescas de albahaca. 2 cucharadas de aceite de oliva. 1 cucharadita de azúcar (opcional). Sal y pimienta al gusto. 1/2 taza de crema de leche o nata (opcional, para un toque más cremoso)",
        preparacion: "Prepara los ingredientes: Si usas tomates frescos, hazles un corte en cruz en la parte superior y colócalos en agua hirviendo durante unos 30 segundos, luego, retíralos y pélalos, si usas tomates enlatados, este paso no es necesario. Cocina la base de la sopa: En una olla grande, calienta el aceite de oliva a fuego medio, añade la cebolla y la zanahoria, y sofríe durante unos 5-7 minutos, hasta que estén tiernas, luego, agrega el ajo y cocina durante 1 minuto más, cuidando de que no se queme. Añade los tomates: Incorpora los tomates pelados y picados (o los enlatados), junto con el caldo de verduras o pollo, si lo deseas, añade una cucharadita de azúcar para reducir la acidez de los tomates, lleva la mezcla a ebullición y luego reduce el fuego para que hierva a fuego lento durante unos 15-20 minutos, hasta que los vegetales estén completamente cocidos. Licúa la sopa: Una vez que los ingredientes estén cocidos, retira del fuego y, usando una licuadora o una batidora de mano, tritura la mezcla hasta obtener una textura suave y cremosa, si prefieres una sopa más rústica, puedes dejar algunos trozos de tomate sin licuar. Añade la albahaca: Incorpora las hojas frescas de albahaca a la sopa y mezcla bien, si deseas una sopa más cremosa, este es el momento de añadir la crema de leche o nata. Rectifica la sazón: Prueba la sopa y ajusta con sal y pimienta al gusto. Sirve y disfruta: Sirve caliente con un chorrito de aceite de oliva por encima y algunas hojas de albahaca para decorar, puedes acompañarla con pan tostado o crutones." 
    },

    {
        nombre: "Enchiladas de pollo",
        porciones: "4-6",
        tiempo: "La receta de Enchiladas de pollo toma aproximadamente 45-55 minutos en total, Si usas salsa de enchilada comprada, el tiempo total se reduce a aproximadamente 30-35 minutos",
        ingredientes: "2 pechugas de pollo cocidas y desmenuzadas. 12 tortillas de maíz. 1 taza de queso rallado (cheddar o Monterrey Jack). 1 taza de cebolla picada. 2 tazas de salsa de enchilada (puedes usar comprada o casera). 1/2 taza de crema agria (opcional). Aceite vegetal para freír. Sal y pimienta al gusto. 1 lata de tomates (400 g). 1/2 taza de chiles secos (o en polvo, al gusto). 1 diente de ajo. 1/2 cebolla. 1 taza de caldo de pollo. Sal al gusto",
        preparacion: "Prepara la salsa de enchilada: Si decides hacerla casera, coloca los tomates, chiles secos (o en polvo), ajo, cebolla y caldo de pollo en una licuadora, mezcla hasta obtener una salsa suave, cocina la salsa en una sartén a fuego medio durante unos 10 minutos, hasta que espese, ajusta la sal al gusto. Precalienta el horno a 180°C (350°F). Calienta las tortillas: En una sartén grande, calienta un poco de aceite vegetal a fuego medio, fríe cada tortilla durante unos 10-15 segundos por cada lado, hasta que estén blandas, escúrrelas en papel absorbente para eliminar el exceso de aceite. Rellena las tortillas: En cada tortilla, coloca una porción de pollo desmenuzado, puedes añadir un poco de cebolla picada si lo deseas, enrolla las tortillas y colócalas en una fuente para horno, con la abertura hacia abajo. Añade la salsa: Vierte la salsa de enchilada sobre las tortillas enrolladas, asegurándote de cubrirlas bien, si prefieres una versión más cremosa, puedes agregar un poco de crema agria a la salsa o al servir. Hornea: Espolvorea el queso rallado sobre las enchiladas y hornea durante unos 20-25 minutos, hasta que el queso esté derretido y burbujeante. Sirve: Deja enfriar un poco antes de servir, puedes acompañar con guarniciones como guacamole, frijoles refritos, o una ensalada fresca." 
    },

    {
        nombre: "Frittata de verduras",
        porciones: "4",
        tiempo: "35-45 minutos",
        ingredientes: "6 huevos. 1 taza de leche. 1 taza de queso rallado (puede ser cheddar, feta, o el de tu preferencia). 1 pimiento rojo, picado. 1 calabacín (zucchini), picado. 1 cebolla, picada. 1 taza de espinacas frescas. 2 dientes de ajo, picados. 2 cucharadas de aceite de oliva. Sal y pimienta al gusto. Hierbas frescas o secas (opcional, como orégano o albahaca)",
        preparacion: "Precalienta el horno a 180°C (350°F). Saltea las verduras: En una sartén apta para horno (o en una sartén que luego puedas transferir al horno), calienta el aceite de oliva a fuego medio, añade la cebolla, el ajo, el pimiento y el calabacín, cocina durante unos 5-7 minutos, hasta que las verduras estén tiernas, agrega las espinacas y cocina por 1-2 minutos adicionales hasta que se marchiten. Prepara la mezcla de huevos: En un bol grande, bate los huevos con la leche, añade el queso rallado, sal, pimienta y las hierbas si estás usando, mezcla bien. Combina y cocina: Vierte la mezcla de huevos sobre las verduras salteadas en la sartén, cocina a fuego medio durante unos 5 minutos, hasta que los bordes comiencen a cuajar. Hornea: Transfiere la sartén al horno y hornea durante unos 15-20 minutos, o hasta que el centro esté completamente cuajado y la superficie esté dorada. Enfría y sirve: Deja enfriar un poco antes de cortar en porciones, puedes servir caliente o a temperatura ambiente, acompaña con una ensalada fresca o pan tostado si lo deseas." 
    },

    {
        nombre: "Chili con carne",
        porciones: "4-6",
        tiempo: "40-50 minutos",
        ingredientes: "500 g de carne molida de res. 1 cebolla grande, picada. 2 dientes de ajo, picados. 1 pimiento verde, picado. 1 zanahoria, pelada y picada. 1 lata (400 g) de tomates en cubos. 1 lata (400 g) de frijoles rojos, escurridos y enjuagados. 1 taza de caldo de carne. 2 cucharadas de pasta de tomate. 1 cucharada de comino en polvo. 1 cucharada de pimentón dulce (paprika). 1 cucharadita de chile en polvo (opcional, al gusto). 2 cucharadas de aceite de oliva. Sal y pimienta al gusto. 1 hoja de laurel (opcional)",
        preparacion: "Dorar la carne: En una olla grande, calienta el aceite de oliva a fuego medio-alto, añade la carne molida y cocina hasta que esté dorada y bien cocida, desmenuzándola con una cuchara de madera, retira el exceso de grasa si es necesario. Saltear las verduras: Agrega la cebolla, el ajo, el pimiento verde y la zanahoria a la olla con la carne, cocina durante unos 5-7 minutos, hasta que las verduras estén tiernas y la cebolla esté transparente. Añadir condimentos y líquidos: Incorpora la pasta de tomate, el comino, el pimentón dulce y el chile en polvo (si lo usas), cocina durante 1-2 minutos para que las especias liberen sus aromas, luego, agrega los tomates en cubos, los frijoles rojos y el caldo de carne, si usas hoja de laurel, añádela ahora. Cocinar a fuego lento: Lleva la mezcla a ebullición y luego reduce el fuego, cocina a fuego lento durante unos 20-30 minutos, revolviendo ocasionalmente, hasta que los sabores se mezclen bien y el chili haya espesado, ajusta la sal y pimienta al gusto. Servir: Sirve el chili caliente, acompañado de pan de maíz, arroz o con toppings como queso rallado, crema agria y cebollas verdes si lo deseas." 
    },
]

export { recetas };





