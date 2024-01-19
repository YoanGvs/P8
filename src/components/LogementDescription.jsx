
const LogementDescription = ({ title, location, tags, badge, rate, host }) => {
    
    const [firstName, lastName] = host.split(" ")
    return (
        <div className="description"> 
            <div className="flat__title">
                <h2>{title}</h2>
                <h3>{location}</h3>
            </div>
            
            <div className="flat__tag">
                {tags.map((tag) => (<span key={tag} className="tag">{tag}</span>))}
            </div>
            <div className="owner">
                <div className="owner-desc">
                    <div className="flat__owner-name">
                        <p>{firstName}</p>
                        <p>{lastName}</p>
                    </div>
                    
                    <img src={badge} alt="" className="flat__owner-badge" />
                </div>                
                <div className="flat__owner-star">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <i key={num} className= {rate > num ? "on fa-solid fa-star" : " fa-solid fa-star " } > </i>
                    ))} 
                </div>
            </div>
            
            
        </div>
    )
}

export default LogementDescription 