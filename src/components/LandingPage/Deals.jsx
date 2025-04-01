import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import market from '../../assets/market.jpg';
import potatoes from '../../assets/potato-farm.jpg';
import onion from '../../assets/onion.jpg';
import pepper from '../../assets/pepper.jpg';
import vegetables from '../../assets/vegetables.jpg';
import egg from '../../assets/egg.png';
import tomato from '../../assets/tomato.jpg';
import potato from '../../assets/potatoes.jpg'
import crayfish from "../../assets/crayfish.png"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Deals() {
  const navigate = useNavigate()
  const [recentProducts, setRecentProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  };

  useEffect(() => {
    const getLatestProducts = async () => {
      const url = `${import.meta.env.VITE_API_BASE_URL}/product/list_20_product`

      try {
        const response = await axios.get(url)
        setRecentProducts(response.data.data)
      } catch (error) {
        console.error('Product Error', error)
      }
    }
    getLatestProducts();
  }, [])

  setTimeout(() => {
    setLoading(true)
  }, 2500)

  console.log(recentProducts)
  return (
    <div>
      <div
        className="mx-4 md:mx-12"
        onClick={() => navigate("/marketplace")}
      >
        <div className="py-8 md:mx-auto">
          <div className="md:w-2/3 mb-12">
            <h1 className="text-xl md:text-3xl font-semibold leading-snug">
              Discover great deals in our Marketplace! 
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch cursor-pointer">
            {/* First Block */}
            <div className="relative rounded-lg bg-white shadow-lg flex flex-col">
              <div className="flex flex-row justify-between items-center text-sm p-2">
                <p>Top Ranking</p>
                <button className="bg-farmersmartOrange text-white font-semibold py-1 px-3 rounded-lg">
                  Check out!
                </button>
              </div>
              <Slider {...settings}>
                <div>
                  <img
                    src={market}
                    alt="Product"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src={tomato}
                    alt="Product"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src={potato}
                    alt="Product"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </Slider>
            </div>

            {/* Second Block */}
            <div className="relative rounded-lg bg-white shadow-lg flex flex-col">
              <div className="flex flex-row justify-between items-center text-sm p-2">
                <p>Deals on best sellers</p>
                <button className="bg-farmersmartOrange text-white font-semibold py-1 px-3 rounded-lg">
                  Check out!
                </button>
              </div>
              <div className="flex flex-col gap-1 rounded-lg bg-farmersmartLightGreen">
                <div className='flex-1' >
                  <Slider {...settings}>
                    <div className='relative'>
                      <img
                        src={potatoes}
                        alt="Potatoes"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <span className='absolute left-0 top-0 px-4 py-2 font-bold bg-[#fa7d22] text-white rounded-full m-2 text-lg'
                        style={{ backgroundColor: "rgba(250, 125, 34, 1)" }}
                      >
                        10% OFF
                      </span>
                    </div>
                    {loading &&
                      <div>
                        <img
                          src={`https://farmersmart.com.ng/images/product/${recentProducts[3].product_image_f}`}
                          alt="Product"
                          className="object-cover w-full h-48 rounded-lg"
                        />
                      </div>
                    }
                  </Slider>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="space-y-1">
                    <img
                      src={onion}
                      alt="Onion"
                      className="w-full h-24 md:h-40 object-cover rounded-lg"
                    />
                    <img
                      src={pepper}
                      alt="Pepper"
                      className="w-full h-24 md:h-40 object-cover rounded-lg"
                    />
                  </div>
                  <img
                    src={vegetables}
                    alt="Vegetables"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Third Block */}
            <div className="rounded-lg bg-white shadow-lg flex flex-col">
              <div className="flex flex-row justify-between items-center text-sm p-2">
                <p>Top Deals</p>
                <button className="bg-farmersmartOrange text-white font-semibold py-1 px-3 rounded-lg">
                  Check out!
                </button>
              </div>
              <div className="flex flex-col w-full h-full overflow-hidden">
                <div className='max-w-full h-60'>
                  <Slider {...settings}>
                    <div>
                      <img
                        src={crayfish}
                        alt="Fish"
                        className="object-cover h-full w-full rounded-lg"
                      />
                    </div>
                    {loading &&
                      <div>
                        <img
                          src={`https://farmersmart.com.ng/images/product/${recentProducts[0].product_image_f}`}
                          alt="Product"
                          className="object-cover w-full h-full rounded-lg"
                        />
                      </div>
                    }
                    {loading &&

                      <div>
                        <img
                          src={`https://farmersmart.com.ng/images/product/${recentProducts[1].product_image_f}`}
                          alt="Product"
                          className="object-cover w-full h-full rounded-lg"
                        />
                      </div>
                    }
                    {loading &&
                      <div>
                        <img
                          src={`https://farmersmart.com.ng/images/product/${recentProducts[2].product_image_f}`}
                          alt="Product"
                          className="object-cover w-full h-full rounded-lg"
                        />
                      </div>
                    }
                  </Slider>
                </div>
                <div className='relative max-w-full h-auto my-auto'>
                  <img
                    src={egg}
                    alt="Egg"
                    className="object-cover w-full h-full rounded-lg"
                  />
                  <span className='absolute bottom-0 right-0 px-4 py-2 bg-orange-400 font-bold text-white rounded-full m-2 text-lg hover:text-xl '>
                    New this week
                  </span>
                </div>
              </div>
            </div>
          </div >
        </div >
      </div >
      <button
        className='bg-farmersmartDarkGreen font-bold p-4 mb-12 block mx-auto items-center justify-center rounded-full text-center text-white text-xl'
      >
        View Produces
      </button>
    </div>
  );
}

export default Deals;
