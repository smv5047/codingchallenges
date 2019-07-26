// Don't modify this array of objects
let arcadeGames = [
    {
      'id': 1,
      'title': 'Arkanoid',
      'year': 1986,
      'manufacturer': 'Taito',
      'genre': 'breakout',
      'max_players': 2,
      'url': 'https://en.wikipedia.org/wiki/Arkanoid',
    },
    {
      'id': 2,
      'title': 'Asteroids',
      'year': 1979,
      'manufacturer': 'Atari',
      'genre': 'multi-directional shooter',
      'max_players': 2,
      'url': 'https://en.wikipedia.org/wiki/Asteroids_(video_game)',
    },
    {
      'id': 3,
      'title': 'Defender',
      'year': 1981,
      'manufacturer': 'Williams',
      'genre': 'scrolling shooter',
      'max_players': 2,
      'url': 'https://en.wikipedia.org/wiki/Defender_(video_game)',
    },
    {
      'id': 4,
      'title': 'Rush\'n\'Attack',
      'year': 1985,
      'manufacturer': 'Konami',
      'genre': 'run and gun',
      'max_players': 2,
      'url': 'https://en.wikipedia.org/wiki/Rush%27n_Attack',
    },
    {
      'id': 5,
      'title': 'Sinistar',
      'year': 1982,
      'manufacturer': 'Williams',
      'genre': 'scrolling shooter',
      'max_players': 2,
      'url': 'https://en.wikipedia.org/wiki/Sinistar',
    },
    {
      'id': 6,
      'title': 'Skate or Die!',
      'year': 1988,
      'manufacturer': 'Electronic Arts',
      'genre': 'skateboarding',
      'max_players': 1,
      'url': 'https://en.wikipedia.org/wiki/Skate_or_Die!',
    },
  ];
  
  // Don't modify this function
  function titleMfrYearString (arr, index) {
    return `${arr[index].title} was made by ${arr[index].manufacturer} in ${arr[index].year}`;
  }
  
  function whoMadeWhatWhen(arr, mfrStr, cb) {
    let placeHolder = [];
    for (let i=0; i < arr.length; i++) {
    if(arr[i].manufacturer === mfrStr) {
      placeHolder.push(cb(arr,i))
      }
    }
    if(placeHolder.length === 0) {
      return `We don't have anything by ${mfrStr} in our inventory`
    }
    return placeHolder;
  }
  
  console.log(whoMadeWhatWhen(arcadeGames, 'EA', titleMfrYearString));
  