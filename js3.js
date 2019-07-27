const pets = [
    {
      'name': 'Tinkerbell',
      'species': 'cat',
      'age': 2
    },
    {
      'name': 'Lucy',
      'species': 'dog',
      'age': 12
    },
    {
      'name': 'Chloe',
      'species': 'cat',
      'age': 18
    },
    {
      'name': 'Mojo',
      'species': 'dog',
      'age': 6
    },
    {
      'name': 'Olivia',
      'species': 'parakeet',
      'age': 4
    },
    {
      'name': 'Shadow',
      'species': 'cat',
      'age': 8
    },
    {
      'name': 'Oreo',
      'species': 'cat',
      'age': 5
    },
    {
      'name': 'Molly',
      'species': 'dog',
      'age': 4
    },
    {
      'name': 'Freddie Prinze Jr.',
      'species': 'parakeet',
      'age': 9
    }
  ];
  
  function sumPetYears(arr, kind, multiply) {
    let filteredPets = arr.filter(pet => {
      return pet.species.includes(kind);
    })
    let petAge = filteredPets.map(pet => pet.age * multiply);
    let combinedAge = petAge.reduce((total, pet) => {
      return total+=pet;
    },0)
    return `The combined ${kind}s\' ages: ${combinedAge}`
  }
  
  
  
  
  console.log(sumPetYears(pets, 'dog', 7));
  // The combined dogs' ages: 154
  console.log(sumPetYears(pets, 'cat', 4));
  // The combined cats' ages: 132
  console.log(sumPetYears(pets, 'parakeet', 5));
  // The combined parakeets' ages: 65
  
  console.log(pets);