const API_KEY = '19f84e11932abbc79e6d83f82d6d1045';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFecth = async (endpoint) =>{
    return (await fetch(`${API_BASE}${endpoint}`)).json();
}

export default {
     getHomeList : async () =>{
        return [
            {
                slug: 'originals',
                title : "Netflix Originals",
                items : await basicFecth(`/discover/tv/?with_network=213&language=en-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title : "Recommended for You",
                items : await basicFecth(`/trending/all/week?language=en-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title : "Top Rated",
                items : await basicFecth(`/movie/top_rated?&language=en-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title : "Action",
                items : await basicFecth(`/discover/movie?with_genres=28&language=en-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title : "Xomedy",
                items : await basicFecth(`/discover/movie?with_genres=35&language=en-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title : "Horror",
                items : await basicFecth(`/discover/movie?with_genres=27&language=en-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title : "Romance",
                items : await basicFecth(`/discover/movie?with_genres=10749&language=en-BR&api_key=${API_KEY}`)
            },            
            {
                slug: 'documentary',
                title : "Documentary",
                items : await basicFecth(`/discover/movie?with_genres=99&language=en-BR&api_key=${API_KEY}`)
            },
        ]
     },

     getMovieInfo : async (movieId, type) =>{
        let info = {};
        if(movieId) {
            switch(type){
                case 'movei':
                    info = await basicFecth(`/movie/${movieId}?language=en-BR&api_key=${API_KEY}`);
                break;
                 case 'tv':
                    info = await basicFecth(`/tv/${movieId}?language=en-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }

         return info;
     }
}