import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DogService from './services/DogService';

const dogService = new DogService();

// dogService.getAllDogs().then(res => console.log(res));

dogService.getAllDogs().then(res => res.forEach(item => console.log(item.image.url)));
dogService.getDog(1).then(res => console.log(res));


ReactDOM.render(<App />,document.getElementById('root'));