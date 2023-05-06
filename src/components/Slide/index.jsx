import { useEffect, useState } from 'react'
import './index.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Star from '../../assets/images/star.png'

const Slide = () => {

    const[featuredMovies, setFeaturedMovies] = useState([])
    
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_MOVIES_API_BASE_URL}/movies?page=4&limit=3`)
        .then( response => {
            if(response.ok){
                return response.json()
            }
            throw response
        })
        .then(data => setFeaturedMovies(data.data))

    },[])

    const settings = {
        dots: true,
        infinite: true,
        speed: 250,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return(
        <div className='slider'>
            <Slider {...settings}>
                {featuredMovies?.map((movie, index) => {
                    return(
                        <div className='item-slider' index={index}>
                            <div className="shadow"></div>
                            <img src={movie.image_url} className='movie-image' alt="" />
                            <div className="content-text">
                                <h3 className='movie-title'>{movie.title}</h3>
                                <div className='line-flex'>
                                    <div className='rating'>
                                        <span ><img src={Star} alt="" width="12px" height="12px"/>{movie.rating}</span>
                                    </div>
                                    <span className='crew'>{movie.crew}</span>
                                </div>
                            </div>
                           
                        </div>
                    )
                })}
                
            </Slider>
        </div>
    )
}

export default Slide;