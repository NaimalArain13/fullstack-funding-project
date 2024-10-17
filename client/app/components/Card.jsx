import Image from "next/image";

const Card = ({ imageSrc, title, content }) => {
    return (
        <div className="w-full max-w-md mx-auto bg-[#203e80] hover:bg-[#385fb3] rounded-xl hover:scale-95 transition-transform text-white shadow-lg">
            <div className="flex flex-col items-center text-center p-8 space-y-4">
                
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white">
                    <Image src={imageSrc} alt={title} width={64} height={64} className="object-cover" />
                </div>

                
                <h1 className="text-2xl font-semibold">{title}</h1>

                
                <p className="text-md leading-relaxed text-gray-200">{content}</p>
            </div>
        </div>
    );
};

export default Card;
