/* Punto 1 */

function palabraMayorQue(palabras, numero) {
  let contador = 0;

  for (const palabra of palabras) {
    if (palabra.length > numero) {
      contador++;
    }
  }
  return `Palabras con más de ${numero} letras: ${contador}`;
}

const magos = ["harry", "ron", "hermione", "snape"];

console.log(palabraMayorQue(magos, 4));

/* punto 2 */

function longitudStringsMedia(palabras) {
  let longitudTotal = 0;
  for (const palabra of palabras) {
    longitudTotal = longitudTotal + palabra.length;
  }
  const longitudMedia = longitudTotal / palabras.length;

  return `La longitud media de los strings de la array ${palabras} es ${longitudMedia}`;
}

const hobbits = ["frodo", "sam", "pippin", "merry"];

console.log(longitudStringsMedia(hobbits));

/* Punto 3 */

function transformaArrays(palabras) {
  let newArray = [];
  for (const palabra of palabras) {
    if (palabra.includes(" ")) {
      newArray.push(palabra.toUpperCase());
    }
  }
  return newArray;
}

const hechizos = [
  "wingardium leviosa",
  "cruciatus",
  "expecto patronum",
  "imperius",
];

console.log(transformaArrays(hechizos));

/* Punto 4 */

const personitas = [
  {
    nombre: "luis",
    edad: 23,
    sexo: "H",
  },
  {
    nombre: "Marta",
    edad: 30,
    sexo: "M",
  },
  {
    nombre: "Antoine",
    edad: 98,
    sexo: "H",
  },
];

function pasaArrayAObjeto(personas) {
  const personasMujer = personas.filter((persona) => persona.sexo === "M");
  const numTotalMujeres = personasMujer.length;

  const personasHombre = personas.filter((persona) => persona.sexo === "H");
  const numTotalHombres = personasHombre.length;

  const mayoresDeEdad = personas.filter((persona) => persona.edad >= 18);
  const numMayoresEdad = mayoresDeEdad.length;

  const objetoQueDevolver = {
    totalMujeres: numTotalMujeres,
    totalHombres: numTotalHombres,
    totalMayoresEdad: numMayoresEdad,
  };

  return objetoQueDevolver;
}

console.log(pasaArrayAObjeto(personitas));

/* Punto 5 INCOMPLETO

const empresas = [
  {
    empresa: "viva el vino",
    empleados: [
      {
        nombre: "Edu",
        edad: 40,
        sueldo: 23000,
      },
      {
        nombre: "Anacleto",
        edad: 80,
        sueldo: 54500,
      },
    ],
  },
  {
    empresa: "viva el cava",
    empleados: [
      {
        nombre: "Rosi",
        edad: 19,
        sueldo: 34000,
      },
      {
        nombre: "Dolores",
        edad: 48,
        sueldo: 16500,
      },
    ],
  },
];

function mediaSueldo(arrayEmpresas, nombre) {
  const empresaSeleccionada = arrayEmpresas.filter(
    (empresa) => empresa.empresa === nombre
  );

  const puretas = empresaSeleccionada.empleados.filter(
    (empleado) => empleado.edad > 30
  );

  return puretas;
}

console.log(mediaSueldo(empresas, "viva el cava")); */
