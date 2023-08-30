import news1 from '../../assets/images/news-1.png'
import news2 from '../../assets/images/news-3.png'
import news3 from '../../assets/images/news-2.png'


const News = () => {
    return (
        <div className='mt-18 mb-5'>
            <h1 className='font-bold lg:text-4xl md:text-4xl sm:text-3xl mt-5 mb-1 text-center'>News & Events</h1>
            <p className='font-semibold px-2 lg:py-10 mb-3 text-center'>There are many variations of passages of Lorem Ipsum available.</p>
            <div className='flex lg:flex-row md:flex-row sm:flex-col gap-5 pb-16'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={news1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Collecting 8 points for discount</h2>
                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                        <div className="card-actions justify-end">
                            <button style={{
                                borderRadius: '10px',
                                background: 'var(--linear, linear-gradient(270deg, #F00 0%, #FF8938 100%))'
                            }} className="btn text-white normal-case my-5">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={news2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Collecting 8 points for discount</h2>
                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                        <div className="card-actions justify-end">
                            <button style={{
                                borderRadius: '10px',
                                background: 'var(--linear, linear-gradient(270deg, #F00 0%, #FF8938 100%))'
                            }} className="btn text-white normal-case my-5">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={news3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Collecting 8 points for discount</h2>
                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                        <div className="card-actions justify-end">
                            <button style={{
                                borderRadius: '10px',
                                background: 'var(--linear, linear-gradient(270deg, #F00 0%, #FF8938 100%))'
                            }} className="btn text-white normal-case my-5">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;