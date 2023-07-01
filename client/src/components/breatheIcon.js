
function BreatheIcon(props) {
    //allow styles to be imported as props
    return (
        <div className="circles" style={{ width: props.circleWidth, height: props.circleHeight }}>
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
        </div>
    )
}

export default BreatheIcon;