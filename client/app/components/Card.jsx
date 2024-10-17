const Card = ({icon,title,content})=>{
    return(
        <div className="w-full max-w-md mx-auto bg-gray-100 rounded-xl hover:scale-95 transition-transform">
        <div className="flex flex-col text-left px-4 space-y-2 p-11">
            <p className="text-3xl rounded-full">{icon}</p>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-md">{content}</p>
        </div>
    </div>
    )   
}
export default Card;
