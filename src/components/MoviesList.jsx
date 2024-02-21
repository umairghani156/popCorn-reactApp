import { Col, Row } from "antd";
import "./movies.css";
import { useState } from "react";
import WatchedMovies from "./WatchedMovies";
const MoviesList = ({ moviesData, setMoviesData, renderMovies, setRenderMovies, inputValue ,setInputValue}) => {
  const [ratingCount, setRatingCount] = useState(0);
  const [showDes, setShowDes] = useState(true);
  const [specificMovie, setSpecificMovie] = useState({});
  const [showBtn, setShowBtn] = useState(false);
  const [ratingStar1, setRatingStar1] = useState("");
  const [ratingStar2, setRatingStar2] = useState("");
  const [watchedMin, setWatchedMin]  = useState("");
  const [count, setCount] = useState(0);
  const [minute, setMinute] = useState("0")

  console.log(moviesData);
  const randomMin =Math.floor(Math.random() * 10)
  
  console.log(randomMin);
  const addMovies = () => {
    let mint;
    if(randomMin <= 4){
      console.log("120");
      mint = "120 min"
    }else if(randomMin > 4){
      console.log("156");
      mint ="156 min"
    }
    else if(randomMin > 7){
      console.log("148");
      mint ="148 min"
    }
    const dublicateRenderMovies = [...renderMovies]
    console.log("hello wolrd", specificMovie);
    dublicateRenderMovies.push({
      ...specificMovie,
      min: mint,
      ratingStar1: ratingStar1,
      ratingStar2:ratingStar2,
    })
    setMinute(mint)
    setWatchedMin(mint)
    setRenderMovies(dublicateRenderMovies)
    console.log("hello world 2", dublicateRenderMovies);
    setShowDes(true)
    setCount(count + 1)

  }
  return (
    <Row
      style={{ display: "flex", justifyContent: "center", marginTop: "20px",gap:"15px" }}
    >
      <Col
        lg={7}
        md={10}
        xs={10}
        sm={12}
        style={{
          borderRadius: "10px",
          backgroundColor: "#24292c",
          paddingTop: "5px",
        }}
      >
        <p style={{position:"absolute",right:"7px",top:"0", backgroundColor:"#121516", width:"15px", height:"15px", borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center"}}>-</p>
        {moviesData &&
          moviesData?.map((movies, index) => (
            <SingleMovies movies={movies} key={index} moviesData={moviesData} setShowDes={setShowDes} specificMovie={specificMovie} setSpecificMovie={setSpecificMovie} showBtn={showBtn} setShowBtn={setShowBtn}/>
          ))}
      </Col>
      <Col
        lg={7}
        md={10}
        xs={10}
        sm={12}
        style={{ backgroundColor: "#24292c", borderRadius:"10px" }}
      >
                 <p style={{position:"absolute",right:"7px",top:"0", backgroundColor:"#121516", width:"15px", height:"15px", borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center"}}>-</p>

      { showDes ? <div>
        <div className="moviesShowing">
          <p style={{fontFamily:"sans-serif", fontWeight:"500"}}>MOVIES YOU WATCHED</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "85%",
              marginTop: "5px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://www.emojiall.com/images/120/joypixels/0023-20e3.png"
                width={"15px"}
                alt=""
              />
              <p style={{marginLeft:"5px"}}>{count ? count : "0"} movies</p>
            </div>
            <div>
              <p>⭐ {ratingStar1 > 10? "9.8": ratingStar1 }</p>
            </div>
            <div>
              <p>🌟 {ratingStar2? ratingStar2 + ".0" : "0.0"}</p>
            </div>
            <div>
              <p>⌛{watchedMin? watchedMin : "0"}</p>
            </div>
          </div>
          </div>
          <div >
            {
              renderMovies.map((render, ind)=> <WatchedMovies index={ind} render={render} renderMovies={renderMovies} setRenderMovies={setRenderMovies} watchedMin={watchedMin} ratingStar1={ratingStar1} ratingStar2={ratingStar2} count={count} setCount={setCount}/>) 
            }
          </div>
        </div> : <div>
          <p style={{position:"absolute",left:"20px",top:"0px", backgroundColor:"#fff", width:"20px", fontSize:"20px", height:"20px", display:"flex", justifyContent:"center", alignItems:"center", color:'black', borderRadius:"50%"}}>←</p>
          <div className="movieCategory">
          <div>
            <img width={"100px"} src={specificMovie.Poster} alt="" />
          </div>
          <div>
            <p>{specificMovie?.Title}</p>
            <p>16 July {specificMovie?.Year}- 148 min</p>
            <p>Action, Adventure, Sci-Fi</p>
            <p>⭐8.8 IMDb rating</p>
          </div>
          </div>
          <div className="starsPar1">
            <div className="starsPar2">
              <div style={{color:'#907209', fontSize:"25px", display:"flex", alignItems:"center"}}> <RatingStars setRatingCount={setRatingCount} ratingCount={ratingCount} setShowBtn={setShowBtn} specificMovie={specificMovie} setRatingStar1={setRatingStar1} setRatingStar2={setRatingStar2} setWatchedMin={setWatchedMin}/><p style={{marginBottom:"15px", fontSize:"18px", fontWeight:"500"}}>{ratingCount}</p></div>
               
              {showBtn === false ? null : <button onClick={()=> addMovies()} style={{padding:"7px", border:"none", borderRadius:"15px", fontWeight:"600", cursor:"pointer", margin:"10px", backgroundColor:"#6e45f1", color:"#fff"}}>+ Add to list</button>}
            </div>
            <div>
              <p style={{fontSize:'12px'}}><i>A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.</i></p>
              <p>Starring Leonardo DiCaprio, Joseph Gordon-Levitt, Eliot Page</p>
              <p>Directed by Christopher Marlon</p>
            </div>
          </div>
        </div>
}
      </Col>
    </Row>
  );
};

const SingleMovies = ({ movies, moviesData, setShowDes , setSpecificMovie, specificMovie, setShowBtn}) => {
   //console.log("specificMovie", specificMovie);
  const singleDataHandler = (uid) => {
    const makingDuplicate = [...moviesData];
    const filteredSingleMovie = makingDuplicate.find(
      (val) => val.imdbID === uid
    );
    console.log("Hello", filteredSingleMovie);
    setSpecificMovie(filteredSingleMovie)
    console.log("specificMovie",specificMovie);
    setShowDes(false)
  };
  return (
    <div
      onClick={() => singleDataHandler(movies.imdbID)}
      style={{ display: "flex", alignItems: "center" }}
      className="descript"
    >
      <img width={"30px"} src={movies?.Poster} alt="moviePic" />
      <div>
        <p className="para">{movies?.Title}</p>
        <p className="para">
          <span style={{ marginRight: "4px" }}>📅</span>
          {movies?.Year}
        </p>
      </div>
    </div>
  );
};

const RatingStars = ({ratingCount, setRatingCount, setShowBtn, setRatingStar1 ,setRatingStar2 ,setWatchedMin, setCount, count}) => {
  const [stars, setStars] = useState(["☆","☆","☆","☆","☆","☆","☆","☆","☆","☆"])
  const [opac , setOpac] = useState(false)
  const updataStar = (index) =>{
    console.log("hello bhai", index);
    const cvrtDup = [...stars]
    const hello = []
    const check = cvrtDup.filter((val, ind)=> {
    if(ind <= index){

    return hello.unshift(val = "★") };
    })
      const slicingLeftStar =cvrtDup.slice(index+ 1);
      const joinBothArray = hello.concat(slicingLeftStar);
      console.log("check3", joinBothArray);
      console.log("check2", slicingLeftStar);
      console.log(hello);
      const userRating = `${index+1}.${index}`
      setRatingCount(index + 1)
      setStars(joinBothArray)
      setShowBtn(true)
      setRatingStar1(userRating)
      setRatingStar2(index + 1)
      
  }
  return (
    <div>
      {
        stars.map((star, ind)=> <span  style={{fontSize:"27px", cursor:"pointer"}} key={ind}  onClick={()=> updataStar(ind)}>{star}</span>)
      }
    </div>
  )
}
export default MoviesList;
