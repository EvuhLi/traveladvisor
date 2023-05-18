import axios from 'axios';
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': '67b83cb49amsh1ad1625f2369ce7p141444jsn848577fe3f68',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

const getPlacesData = async () =>{
    try {
        const response = await axios.get(URL, options);
        //request
    } catch (error) {
        
    }
}