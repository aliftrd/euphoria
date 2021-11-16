export default function Card({className, title, description}) {
    return (
        <div className={`container pt-3 ${className}`}>
            <div className="bg-white shadow-lg rounded-lg text-navy">
                { title ? 
                    <div className="card-title">
                        <h3 className="text-lg font-bold p-4">{title}</h3>
                    </div> : ''
                }
                <div className="card-body px-4 pb-4">
                    {description}
                </div>
            </div>
        </div>
    );
}