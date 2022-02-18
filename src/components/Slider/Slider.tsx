// Import Swiper React components
// I'm using Swiper for the slider component with Parallax effect
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import external Star component
import { Rating } from 'react-simple-star-rating';

//css perso
import './slider.css';

export interface ISliderProps {
  sliderMovies: any;
}

//need to make this more responsive

export default function Slider(props: ISliderProps) {
  return (
    // Swiper contains params for the animation of the slider and
    // act as container for the slides (SwiperSlide)
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      speed={900}
      parallax={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Parallax, Autoplay, Pagination, Navigation]}
      className="mySwiper bg-gray-50 px-10 md:px-20" 
    >
      {/* render a slide for each movie in the props sliderMovies */}
      {props.sliderMovies.map((movie: any) => (
        <SwiperSlide key={movie.id} className="sliderContainer  ">
          <div
            className="sliderImgC"
            data-swiper-parallax="-23%"
            slot="container-start"
          >
            <img
              className="sliderImg object-cover"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="poster"
              data-swiper-parallax="-500"
            />
            <div className="sliderTxt pl-80 ">
              <h1
                className="text-5xl text-left font-bold font-sans"
                data-swiper-parallax="-300"
              >
                {movie.title}
              </h1>
              {/* buttons for genres( if x < 2 genres = true buttons = 1 otherwise 2 buttons) */}
              <div className=" flex flex-row items-start justify-items-start content-center">
                {movie.genre_ids.length <= 2 ? (
                  <div className="flex flex-row ">
                    <button className="cursor-default text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-9">
                      {movie.genre_ids[0]}
                    </button>{' '}
                  </div>
                ) : (
                  <div className="flex flex-row ">
                    <button className="cursor-default text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-9">
                      {movie.genre_ids[0]}
                    </button>
                    <button className="cursor-default text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-9">
                      {movie.genre_ids[1]}
                    </button>
                  </div>
                )}
                <Rating
                  className="content-center mt-6"
                  ratingValue={0}
                  initialValue={Math.round(movie.vote_average / 2)}
                  readonly={true}
                />
              </div>
              <h2 data-swiper-parallax="-100" className=" text-xl text-left">
                {/* slice for 120 characters max */}
                {movie.overview.slice(0, 120)}...
              </h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
