export type Person = {
  name: string,
  lastName: string
}

export const filterPeople = ({ p }: { p: Person }): Person[] => {
  return randomPeople.filter((person) =>
    person.name.toLocaleLowerCase().includes(p.name.toLocaleLowerCase()) &&
    person.lastName.toLocaleLowerCase().includes(p.lastName.toLocaleLowerCase())
  )
}

export const randomPeople: Person[] = [
  {
    name: "  Andrés",
    lastName: "Hernández"
  },
  {
    name: "Ana",
    lastName: "Hernández"
  },
  {
    name: "Sebastián",
    lastName: "Hernández"
  },
  {
    name: "Valentina",
    lastName: "Hernández"
  },
  {
    name: "Gabriel",
    lastName: "Hernández"
  },
  {
    name: "Carolina",
    lastName: "Hernández"
  },
  {
    name: "Francisco",
    lastName: "Hernández"
  },
  {
    name: "Isabella",
    lastName: "Hernández"
  },
  {
    name: "Juan",
    lastName: "Hernández"
  },
  {
    name: "Camila",
    lastName: "Hernández"
  },
  {
    name: "Alejandro",
    lastName: "Hernández"
  },
  {
    name: "Natalia",
    lastName: "Hernández"
  },
  {
    name: "David",
    lastName: "Hernández"
  },
  {
    name: "Gabriela",
    lastName: "Hernández"
  },
  {
    name: "Manuel",
    lastName: "Hernández"
  },
  {
    name: "Sofía",
    lastName: "Hernández"
  },
  {
    name: "Diego",
    lastName: "Hernández"
  },
  {
    name: "Mariana",
    lastName: "Hernández"
  },
  {
    name: "Javier",
    lastName: "Hernández"
  },
  {
    name: "Valeria",
    lastName: "Hernández"
  },
  {
    name: "Rosalinda",
    lastName: "Flores"
  },
  {
    name: "Violeta",
    lastName: "Flores"
  },
  {
    name: "Azucena",
    lastName: "Flores"
  },
  {
    name: "Margarita",
    lastName: "Flores"
  },
  {
    name: "Amaranta",
    lastName: "Flores"
  },
  {
    name: "Lirio",
    lastName: "Flores"
  },
  {
    name: "Jazmín",
    lastName: "Flores"
  },
  {
    name: "Orquídea",
    lastName: "Flores"
  },
  {
    name: "Magnolia",
    lastName: "Flores"
  },
  {
    name: "Camelia",
    lastName: "Flores"
  },
  {
    name: "Narciso",
    lastName: "Flores"
  },
  {
    name: "Amapola",
    lastName: "Flores"
  },
  {
    name: "Hortensia",
    lastName: "Flores"
  },
  {
    name: "Dalia",
    lastName: "Flores"
  },
  {
    name: "Petunia",
    lastName: "Flores"
  },
  {
    name: "Begonia",
    lastName: "Flores"
  },
  {
    name: "Tulipán",
    lastName: "Flores"
  },
  {
    name: "Geranio",
    lastName: "Flores"
  },
  {
    name: "Caléndula",
    lastName: "Flores"
  },
  {
    name: "Iris",
    lastName: "Flores"
  },
  {
    name: "Martín",
    lastName: "González"
  },

  {
    name: "Isabella",
    lastName: "González"
  },
  {
    name: "Juan",
    lastName: "González"
  },
  {
    name: "Camila",
    lastName: "González"
  },
  {
    name: "Francisco",
    lastName: "González"
  },
  {
    name: "Gabriela",
    lastName: "González"
  },
  {
    name: "Diego",
    lastName: "González"
  },
  {
    name: "Carolina",
    lastName: "González"
  },
  {
    name: "Gabriela",
    lastName: "Martínez"
  },
  {
    name: "Manuel",
    lastName: "Martínez"
  },
  {
    name: "Sofía",
    lastName: "Martínez"
  },
  {
    name: "Diego",
    lastName: "Martínez"
  },
  {
    name: "Victoria",
    lastName: "Rodríguez"
  }]