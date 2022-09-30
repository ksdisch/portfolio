import { useState, useEffect } from "react";
import ColoredLine from "./ColoredLine";

const ProjectList = () => {

    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch("https://github.com/ksdisch/portfolio/blob/[main|master]/db.json")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setProjects(data)
            })
    }, [])

    return (  
        <div className="project-list">
            <h2>My Projects</h2>
            <p style={{fontSize: 24 }}>These are just a few of the many projects I have completed.</p>
            <ColoredLine color='#212529'/>
            {projects.map((project) => (
                <>
                    <div className="row" key={project.id}>
                        <h4>{project.title}</h4>
                            <p style={{fontSize: 18 }}>{project.description}</p>
                    </div>
                    <div className="project-link">
                        <a className='btn btn-outline-dark' href={project.link}>Code/Product</a>
                    </div>
                </>
            ))}
        </div>
    );
}
 
export default ProjectList;