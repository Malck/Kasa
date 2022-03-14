export default function Avatar(props) {

    return (
        <div className="avatar">
            <img src={props.img} alt="Avatar" />
            <h4 className='host-name'>{props.name}</h4>
        </div>
    )

}