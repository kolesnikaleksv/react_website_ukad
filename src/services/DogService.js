class DogService {
    getData = async (url) => { 
        let res = await fetch(url);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url} status: ${res.status}`);
        }
        return await res.json();
    }
    getAllDogs = () => {
        return this.getData('https://api.thedogapi.com/v1/breeds?limit=10&page=0');
    }
    getDog = (id) => {
        return this.getData(`https://api.thedogapi.com/v1/breeds/${id}?limit=10&page=0`);
    }
}

export default DogService;