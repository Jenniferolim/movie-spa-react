import { useState, useEffect } from "react"
import './index.css'
import Star from '../../assets/images/star.png'
import ButtonPaginationLeft from '../../assets/images/btn-pagination-left.png'
import ButtonPaginationRight from '../../assets/images/btn-pagination-right.png'
const Movies = () => {

    const[movies, setMovies] = useState([])
    const[page, setpage] = useState(1)
    const[pagination, setPagination] = useState([])

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_MOVIES_API_BASE_URL}/movies?page=${page}&limit=12`)
        .then( response => {
            if(response.ok){
                return response.json()
            }
            throw response
        })
        .then(data => { setMovies(data.data); setPagination(data.pagination)})

    },[page])

    const handleAnimation = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return(
        <>
            <div className="movies">
                {movies.map((item, index)=>{
                    return(
                        <div className="card-movie">
                            <img src={item.image_url} className="movie-card-image" alt="" />
                            <span className="movie-card-title">{item.title}</span>
                            <span className="movie-card-year">Ano de lançamento: {item.year}</span>
                            <span className="movie-card-crew">{item.crew}</span>
                            <div className='rating'>
                                <span style={{color:'white'}}><img src={Star} alt="" width="12px" height="12px"/>{item.rating}</span>
                            </div>
                        </div>
                    )
                })}
            
            </div>
            <div className="pagination">
                <img src={ButtonPaginationLeft} alt="" onClick={()=> { setpage(page - 1); handleAnimation()} }/>
                <span onClick={()=> { setpage(1); handleAnimation()}}>1</span>
                <span>{pagination.page}</span>
                <span onClick={()=> setpage(pagination.maxPage)}>{pagination.maxPage} </span>
                <img src={ButtonPaginationRight} alt="" onClick={()=> { setpage(page + 1); handleAnimation()}}/>
            </div>
        </>
    )
}

export default Movies