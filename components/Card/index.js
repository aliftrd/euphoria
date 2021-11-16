export default function Card({title, description}) {
    return (
        <div className="container">
            <div className="bg-white shadow-lg rounded-lg text-navy">
                { title ? 
                    <div className="card-title">
                        <h3 className="text-lg font-bold p-4">{title}</h3>
                    </div> : ''
                }
                <div className="card-body px-4 pb-4">
                    <p className="leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
}