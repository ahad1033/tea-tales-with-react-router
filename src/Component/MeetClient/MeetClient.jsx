
const MeetClient = () => {
    return (
        <div style={{
            borderRadius: '10px',
            background: 'var(--linear, linear-gradient(270deg, #F00 0%, #FF8938 100%))'
        }} className="p-10 flex lg:flex-row md:flex-col sm:flex-col items-center justify-center my-10 lg:w-full md:w-3/4">
            <div className="text-white w-1/2 p-3 lg:p-28">
                <h1 className="font-bold text-5xl md:text-3xl sm:text-2xl my-3">Meet Our Super <p>Clients</p></h1>
                <p className="my-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button className="btn bg-white text-orange-500 normal-case font-bold my-3 border-0">
                    Show All
                </button>
            </div>
            <div className="bg-white rounded-xl w-1/2 p-8">
                <p className="mt-8 mb-3 font-bold text-2xl">We are providing the best and suitable home insurance services for the people who are interested to treatment</p>
                <h4 className="mt-10 mb-3">Ilham Yuda</h4>
                <p className="my-3 font-semibold">Businessman</p>
            </div>
        </div>
    );
};

export default MeetClient;