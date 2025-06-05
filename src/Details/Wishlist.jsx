import React, { useContext } from 'react'
import { myContext } from '../Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

const Wishlist = () => {
  const { TBDeal } = useContext(myContext);
  
  return (
    <div className='flex flex-col gap-5'>
      <div>
        <h1 className='text-3xl font-bold ml-2'>My <span className='text-[#002482]'>Wishlist</span></h1>
      </div>
      <div>
          <div className="flex flex-wrap gap-5 md:justify-start justify-center">
            {TBDeal.length > 0 && TBDeal ? (
              TBDeal.map((item) => (
                <div
                  className="bg-white w-80 rounded-xl relative scale-95 hover:scale-100 transition-all duration-500 cursor-pointer drop-shadow-lg hover:drop-shadow-2xl"
                  key={item.id}
                >
                  <img
                    src={item.img}
                    alt="Title"
                    className="w-48 p-2 object-cover mx-auto"
                  />
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`text-2xl justify-center absolute top-3 right-5 ${
                      item.heart ? "text-red-600" : "text-gray-500"
                    }`}
                  />
                  <div className="card-body p-2">
                    <h4 className="text-sm">{item.title}</h4>
                    <div className="flex gap-3 items-center text-sm mt-2">
                      <p className="text-white bg-yellow-500 p-1 rounded-sm">
                        {item.rating} <FontAwesomeIcon icon={faStar} />
                      </p>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>

                    <div className="font-bold pt-5 flex items-center gap-3">
                      <h1 className="text-xl">{item.price}</h1>
                      <p className="text-sm line-through text-gray-500">
                        {item.tprice}
                      </p>
                      <p className="text-sm text-[#009DE0]">{item.discount}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-red-600 font-bold text-3xl">
                Items not found
              </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default Wishlist