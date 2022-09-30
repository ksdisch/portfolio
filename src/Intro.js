import Row from 'react-bootstrap/Row';
import ColoredLine from './ColoredLine';


const Intro = () => {
    return (  
        <div className="intro">
            <header>
                <h1>Kyle Disch.</h1>
                <ColoredLine color='#212529'/>
                <p style={{fontSize: 24 }}>Data Analyst - React & Python Enthusiast</p>
            </header>
        </div>
    );
}
 
export default Intro;