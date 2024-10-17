import Image from "next/image";
const JoinFundraisersSection = () => {
    return (
        <section className="bg-orange-100 text-center py-16 px-4 pt-8">
            <div className="flex justify-center items-center space-x-4 mb-8">
                {/* Images */}
                <div className="w-20 h-20 overflow-hidden rounded-xl transition-transform hover:scale-105">
                    <Image src="/bg1.jpg" alt="Fundraiser 1" width={150} height={50} className="w-full h-full object-cover" />
                </div>
                <div className="w-20 h-20 overflow-hidden rounded-xl transition-transform hover:scale-105">
                    <Image src="/download.jpg" alt="Fundraiser 2" width={200} height={50} className="w-full h-full object-cover" />
                </div>
                <div className="w-20 h-20 overflow-hidden rounded-xl transition-transform hover:scale-105">
                    <Image src="/bg1.jpg" alt="Fundraiser 3" width={150} height={50} className="w-full h-full object-cover" />
                </div>
                <div className="w-20 h-20 overflow-hidden rounded-xl transition-transform hover:scale-105">
                    <Image src="/download.jpg" alt="Fundraiser 4" width={200} height={50} className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Heading and Statistics */}
            <h2 className="text-xl font-semibold text-gray-700">
                Be The Part Of FundRaisers With Over
            </h2>
            <p className="text-6xl font-bold text-gray-900 my-4">
                217,924<span className="text-4xl">+</span>
            </p>
            <p className="text-lg font-medium text-gray-600">
                People From Around The World Joined
            </p>

            {/* Button */}
            <button className="mt-8 bg-orange-400 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-500">
                Join FundRaisers Now!
            </button>
        </section>
    );
};

export default JoinFundraisersSection;
