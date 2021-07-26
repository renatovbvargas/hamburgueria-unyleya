import './styles.css';

const MenuItem = ({image, text}) => {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{text}</p>
            </div>
        </div>
    )
}

export default MenuItem;