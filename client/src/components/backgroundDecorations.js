import waveTop from '../assets/login/waveTop.svg';
import waveBottom from '../assets/login/waveBottom.svg'
import holoCircles from '../assets/login/holoCircles.svg'

function BgDecorations() {
    return (
        <>
            <img
                className="holoCircles"
                style={{ position: 'absolute', top: '0px', left: '0px', opacity: '0.3', height: '100vh' }}
                src={holoCircles}
                aria-hidden="true"
                alt=""
            />
            <img
                className="waveTop"
                style={{ position: 'absolute', top: '-1px', left: '0px', width: '100vw', opacity: '0.3' }}
                src={waveTop}
                aria-hidden="true"
                alt=""
            />
            <img
                style={{ position: 'sticky', bottom: '0px', left: '0px', width: '100vw', opacity: '0.3' }}
                className="waveBottom"
                src={waveBottom}
                aria-hidden="true"
                alt=""
            />
        </>
    )
}

export default BgDecorations;