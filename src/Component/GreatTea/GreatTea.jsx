import image1 from '../../assets/images/fresh-1.png'
import image2 from '../../assets/images/fresh-2.png'

const GreatTea = () => {
    return (
        <div className='flex lg:flex-row flex-col gap-16 mt-10 mb-16'>
            <div className='flex md:flex-col lg:flex-row  w-full gap-8 py-16 px-8'>
                <div style={{
                    borderRadius: '10px',
                    background: 'rgba(230, 166, 35, 0.10)',
                    height: '300'
                }} className='flex items-center justify-center w-1/2 p-3'>
                    <img className='' src={image1} alt="" />
                </div>
                <div style={{
                    borderRadius: '10px',
                    background: 'rgba(87, 118, 57, 0.10)',
                    height: '300'
                }} className='flex items-center justify-center w-1/2 p-3'
                >
                    <img src={image2} alt="" />
                </div>
            </div>
            <div className='w-full text-center lg:text-left py-10 px-5'>
                <h1 className='lg:text-6xl md:text-4xl sm:text-3xl font-bold my-2'>Great Tea,<p>Freshly Presented</p></h1>
                <p className='mt-2 mb-5'>The meaning of gong cha is chinese is to provide the best tea to emperor from all possessions . It represents the highest quality and self expectation. Establishing in 2006, Gong cha had been deeply appreciated by its customers because of good words of mouth and unique customized service originated from Taiwan.</p>
                <h3 className='font-bold lg:text-4xl md:text-4xl sm:text-3xl my-2'>Unique Taste</h3>
                <p className='my-2'>A Unique and different style from other teapots gives a luxurious and minimalist impression</p>
                <h3 className='font-bold lg:text-4xl md:text-4xl sm:text-3xl my-2'>Premium Quality</h3>
                <p className='my-2'>Premium Quality that makes tea more elegant and more durable when you use it.</p>
            </div>
        </div>
    );
};

export default GreatTea;