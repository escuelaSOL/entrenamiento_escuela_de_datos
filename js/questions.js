// Este archivo contiene los datos de las preguntas del quiz.
// Puedes modificar este array para añadir, eliminar o cambiar preguntas y opciones.

export const originalQuizData = [
	{
		question: "¿Cómo se genera un documento final (renderizado) en R Markdown o Quarto, y qué opciones de formato de salida existen?",
		options: {
			A: "Se utiliza el comando render() en la consola de R; solo se puede generar HTML por defecto.",
			B: "Se guarda el archivo y se utiliza el botón 'Knit' o 'Render'; solo se pueden generar PDF y Word.",
			C: "Se ejecuta el código R del documento; el formato de salida es siempre texto plano.",
			D: "Se guarda el archivo y se utiliza el icono de 'renderizado', pudiendo elegir formatos como HTML, PDF o Word (especificados en YAML), con PDF requiriendo LaTeX."
		},
		correctAnswer: "D",
		explanation: "Para generar el documento final, se guarda el archivo y se usa el icono de renderizado. El triángulo junto a él permite elegir formatos de salida como HTML, PDF o Word, siempre que estén definidos en el encabezado YAML. Es importante recordar que PDF requiere la instalación de LaTeX."
	},
	{
		question: "¿Qué es un chunk en R Markdown o Quarto y cuál es su propósito principal?",
		options: {
			A: "Es una sección de texto narrativo con formato especial.",
			B: "Es un bloque de configuración inicial del documento (YAML).",
			C: "Es un bloque de código R incrustado, delimitado por marcadores, cuyo propósito es ejecutar código y mostrar sus resultados en el documento.",
			D: "Es un enlace a un recurso externo o una imagen."
		}, re
		correctAnswer: "C",
		explanation: "Un chunk es la parte central de la reproducibilidad: un bloque de código R (u otro lenguaje en Quarto) delimitado por ```{r} y ``` que se ejecuta durante el renderizado para incluir los resultados (código, texto, tablas, gráficos) directamente en el documento final."
	},
	{
		question: "Menciona dos formas de insertar un nuevo chunk de código en el editor.",
		options: {
			A: "Copiar y pegar un chunk existente; usar el menú 'Edit'.",
			B: "Escribir manualmente los delimitadores ``` y {r}; usar la consola de R.",
			C: "Usar el atajo de teclado CTRL+ALT+I; hacer clic en el icono 'Insert a new code chunk' en la barra de herramientas.",
			D: "Usar el menú 'Tools'; arrastrar y soltar un script R."
		},
		correctAnswer: "C",
		explanation: "Las dos formas más directas y eficientes de insertar un chunk son mediante el atajo de teclado universal CTRL+ALT+I o haciendo clic en el icono dedicado ('Insert a new code chunk') en la barra de herramientas del editor."
	},
	{
		question: "¿Qué diferencia existe entre las opciones de chunk echo: false e include: false?",
		options: {
			A: "echo: false oculta los resultados del código, mientras que include: false oculta solo el código fuente.",
			B: "echo: false se usa para texto, include: false se usa para código.",
			C: "echo: false ejecuta el código pero oculta el código fuente en el documento final; include: false ejecuta el código pero oculta tanto el código fuente como sus resultados.",
			D: "echo: false detiene la ejecución del chunk, mientras que include: false la permite."
		},
		correctAnswer: "C",
		explanation: "La distinción es crucial para controlar qué se muestra en el documento. echo: false es útil cuando quieres mostrar solo el resultado de un cálculo o gráfico sin el código que lo generó. include: false oculta todo del chunk, útil para código que genera objetos que se usan más adelante pero no necesitas mostrar."
	},
	{
		"question": "¿Cómo se pueden insertar resultados de R de forma 'inline' dentro del texto en R Markdown o Quarto?",
		"options": {
			"A": "Usando el operador pipe (%>%).",
			"B": "Incluyendo el código entre `r` y tildes graves (```r expresion_de_R```).",
			"C": "Utilizando la sintaxis `r expresion_de_R` entre tildes graves.",
			"D": "Definiendo parámetros en el encabezado YAML."
		},
		"correctAnswer": "C",
		"explanation": "La inserción inline de resultados de R 'utilizando tildes graves, la letra r y una expresión de R imprimible como cadena de texto (r expresion_de_R)'."
	},
	{
		"question": "¿Cuál es la función inicial que se llama para comenzar a crear un gráfico con ggplot2, y qué se especifica en ella?",
		"options": {
			"A": "plot() y se especifica el tipo de gráfico.",
			"B": "create_plot() y se especifica el título.",
			"C": "ggplot() y se especifican los datos y las estéticas.",
			"D": "draw() y se especifican los colores."
		},
		"correctAnswer": "C",
		"explanation": "Según el texto 'R para Ciencia de Datos', 'Para comenzar a crear un gráfico con ggplot2, primero se llama a la función ggplot() y se especifican los datos y las estéticas (variables a usar en el gráfico)'."
	},
	{
		"question": "¿Qué operador se utiliza en ggplot2 para añadir más capas al gráfico (como geometrías o elementos de formato)?",
		"options": {
			"A": "|",
			"B": "%>%",
			"C": "+",
			"D": "-"
		},
		"correctAnswer": "C",
		"explanation": "El texto 'R para Ciencia de Datos', indica que 'Las instrucciones en ggplot2 suelen seguir con el operador + para añadir más capas al gráfico'."
	},

];
