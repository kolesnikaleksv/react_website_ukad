

function services() {
    fetch('https://api.thedogapi.com/v1/breeds?limit=10&page=0')
    .then(response => response.json())
    .then(json =>  Object.entries(json).filter(item => item[0]));
}

export default services;