import ColoredLine from './ColoredLine';

const Headline= () => {
    return (  
        <div className="headline">
            <div className="row">
                <h2>Thanks for stopping by.</h2>
                <ColoredLine color='#403F3B'/>
                <p style={{fontSize: 24 }}> I am a dedicated data analyst with a passion for uncovering and visualizing salient trends using a variety of tools.</p>
            </div>
            <div className="row">
                <div className="col">
                    <div class="skill-bar-title">
                        <i class="fab fa-js-square fa-3x"></i>
                        <p>JavaScript</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Headline