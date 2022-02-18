import './card.css';

// external component for stars rating
//the moviedb rating is from 0 to 10
//the stars rating is from 0 to 5
//so I needed to divide the moviedb rating by 2
import { Rating } from 'react-simple-star-rating';

//framer motion for animation
import { motion } from 'framer-motion';

export default function Card({ moviesCards }: any) {
  return (
    <div className="container mx-auto p-10 md:p-20 grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-y-10 gap-x-10 transform duration-500  ">
      {moviesCards.map((movie: any) => (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          layout
          key={movie.id}
          className=" shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer bg-white rounded-lg overflow-hidden"
        >
          <div className="overflow-hidden" key={movie.id}>
            <img
              className="w-full h-25 object-cover"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="poster"
            />
          </div>
          <div className="p-5 my-auto pb-12 ">
            <h1 className="text-3xl font-semibold text-gray-700">
              {movie.title}
            </h1>
            <Rating
              className="m-3 align-left"
              ratingValue={0}
              initialValue={Math.round(movie.vote_average / 2)}
              readonly={true}
            />
            <p className="category flex flex-row">
              {/* buttons for genres( if x < 2 genres = true buttons = 1 otherwise 2 buttons) */}
              {movie.genre_ids.length <= 2 ? (
                <div className="flex flex-auto">
                  <button className="cursor-default text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {movie.genre_ids[0]}
                  </button>{' '}
                </div>
              ) : (
                <div className="flex flex-auto ">
                  <button className="cursor-default text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {movie.genre_ids[0]}
                  </button>
                  <button className="cursor-default text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {movie.genre_ids[1]}
                  </button>
                </div>
              )}
            </p>
            <p className="text-xl font-light leading-relaxed  ">
              {movie.overview.slice(0, 120)}...
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
