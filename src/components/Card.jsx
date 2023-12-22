const Card = ({ data }) => {


    return (
        <div>
            {data.map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
        </div>
    )
}

export default Card