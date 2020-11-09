import React from 'react';
import './styles.css';

export default ({item}) => {

    let firstDate = new Date(item.first_air_date);

    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    let descr = item.overview;
    if(descr.length > 200){
        descr = descr.substring(0, 200)  + '...';
     }


    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} ratings</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} season{item.number_of_season !== 1 ? 's' : ''}</div>
                    </div>
                        <div className="featured--description">{descr}</div>
                        <div className="featured--buttons">
                            <a href={`/watch/${item.id}`} className="featured--watchbutton">► Watch</a>
                            <a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ My list</a>
                        </div>
                        <div className="featured--genres">Genres: <strong> {genres.join(', ')} </strong></div>

                </div>
            </div>
       
        </section>
    )
}
