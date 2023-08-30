import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import tea1 from'../../assets/images/tea-1.png'
import tea2 from'../../assets/images/tea-2.png'
import tea3 from'../../assets/images/tea-4.png'
import tea4 from'../../assets/images/tea-3.png'

const FeaturedProducts = () => {
    return (
        <div className='mt-5 mb-8 px-20 md:px-5 sm:px-1'>
            <div className='text-center mb-16'>
                <h1 className='text-5xl md:text-3xl sm:text-2xl font-bold mt-5 mb-3'>Our Featured Products</h1>
                <p className='font-semibold mx-3'>Here is our all products. Swipe right or left to check our products.</p>
            </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='gap-10'
            >
                <SwiperSlide className='flex flex-col items-center text-center bg-gray-100 p-10 rounded'>
                    <img src={tea1} alt="" />
                    <h1 className='font-bold text-2xl mt-3 mb-2'>Gong Cha-M01</h1>
                    <p className='m-2 font-semibold'>Creamer could be replaced by fresh milk</p>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col items-center text-center bg-gray-100 p-10 rounded'>
                    <img src={tea2} alt="" />
                    <h1 className='font-bold text-2xl mt-3 mb-2'>Gong Cha-M03</h1>
                    <p className='m-2 font-semibold'>Creamer could be replaced by fresh milk</p>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col items-center text-center bg-gray-100 p-10 rounded'>
                    <img src={tea3} alt="" />
                    <h1 className='font-bold text-2xl mt-3 mb-2'>Gong Cha-M05</h1>
                    <p className='m-2 font-semibold'>Creamer could be replaced by fresh milk</p>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col items-center text-center bg-gray-100 p-10 rounded'>
                    <img src={tea4} alt="" />
                    <h1 className='font-bold text-2xl mt-3 mb-2'>Gong Cha-M06</h1>
                    <p className='m-2 font-semibold'>Creamer could be replaced by fresh milk</p>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col items-center text-center bg-gray-100 p-10 rounded'>
                    <img src={tea1} alt="" />
                    <h1 className='font-bold text-2xl mt-3 mb-2'>Gong Cha-M09</h1>
                    <p className='m-2 font-semibold'>Creamer could be replaced by fresh milk</p>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col items-center text-center bg-gray-100 p-10 rounded'>
                    <img src={tea2} alt="" />
                    <h1 className='font-bold text-2xl mt-3 mb-2'>Gong Cha-M10</h1>
                    <p className='m-2 font-semibold'>Creamer could be replaced by fresh milk</p>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col items-center text-center bg-gray-100 p-10 rounded'>
                    <img src={tea3} alt="" />
                    <h1 className='font-bold text-2xl mt-3 mb-2'>Gong Cha-M15</h1>
                    <p className='m-2 font-semibold'>Creamer could be replaced by fresh milk</p>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col items-center text-center bg-gray-100 p-10 rounded'>
                    <img src={tea4} alt="" />
                    <h1 className='font-bold text-2xl mt-3 mb-2'>Gong Cha-M22</h1>
                    <p className='m-2 font-semibold'>Creamer could be replaced by fresh milk</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FeaturedProducts;