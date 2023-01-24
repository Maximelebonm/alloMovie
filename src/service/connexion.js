import axios from "axios";

export const getList = async ()=> {
    return await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=6fb5d31357da6641ffd50c4cdb87b45f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
}

export const getdetail = async ()=> {
    const detailId = sessionStorage.getItem("detailStorage");
    return await axios.get(`https://api.themoviedb.org/3/movie/${detailId}?api_key=6fb5d31357da6641ffd50c4cdb87b45f&language=en-US`)
}

export const getdetailfav = async (props)=> {
    
    return await axios.get(`https://api.themoviedb.org/3/movie/${props}?api_key=6fb5d31357da6641ffd50c4cdb87b45f&language=en-US`)
}