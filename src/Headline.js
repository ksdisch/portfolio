import { Link } from 'react-router-dom';
import ColoredLine from './ColoredLine';

const Headline= () => {
    return (  
        <div className="headline">
            <div className="row">
                <h2>Thanks for stopping by.</h2>
                <ColoredLine color='#212529'/>
                <p style={{fontSize: 24 }}> I am a dedicated data analyst with a passion for uncovering and visualizing salient trends using a variety of tools.</p>
            </div>
            <div className="row text-center">
                <div className="col">
                    <div class="skill-bar-title">
                        {/* <i class="fab fa-js-square fa-3x"></i> */}
                        <p>Python</p>
                    </div>
                </div>
                <div className="col">
                    <div class="skill-bar-title">
                        {/* <i class="fab fa-js-square fa-3x"></i> */}
                        <p>JavaScript</p>
                    </div>
                </div>
                <div className="col">
                    <div class="skill-bar-title">
                        {/* <i class="fab fa-js-square fa-3x"></i> */}
                        <p>React</p>
                    </div>
                </div>
                <div className="col">
                    <div class="skill-bar-title">
                        {/* <i class="fab fa-js-square fa-3x"></i> */}
                        <p>SQL</p>
                    </div>
                </div>
                <div className="col">
                    <div class="skill-bar-title">
                        {/* <i class="fab fa-js-square fa-3x"></i> */}
                        <p>Git</p>
                    </div>
                </div>
            </div>
                <a className='btn btn-lg btn-outline-dark' href="https://docs.google.com/document/d/1OIeEnxduBl7Va9Ln4rkeGZEzQu6JAyPn2vHscsAFJ58/edit">
                    Resume
                </a>
        </div>
    );
}
 
export default Headline;