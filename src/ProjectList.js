import { useState, useEffect } from "react";
import ColoredLine from "./ColoredLine";
import * as data from './db.json'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
const ProjectList = () => {

    const resp = data;
    const allProjects = resp.projects;
    const firstProjects = allProjects [{id: 1}, {id:5}, {id: 14}, {id: 2}, {id: 3}]

    const [projects, setProjects] = useState(firstProjects)
    const buildList = (projectSet) => {
        return (
            (projectSet || []).map(project => (
                <div className="project-list">
                <><div className="row" key={project.id}>
                    <h4>{project.title}</h4>
                    <p style={{ fontSize: 18 }}>{project.description}</p>
                </div>
                <div className="project-link">
                    <a className='btn btn-outline-dark' href={project.link}>Code/Product</a>
                </div></>
                </div>
            ))
        )
    }

const initialList = () => {

    return (  
        <div className="project-list">             
            <div className="row">
                <h4>{allProjects[0].title}</h4>
                        <p style={{fontSize: 18 }}>{allProjects[0].description}</p>
            </div>
                <div className="project-link">
                    <a className='btn btn-outline-dark' href={allProjects[0].link}>Code/Product</a>
            </div>

            <div className="row">
                <h4>{allProjects[4].title}</h4>
                    <p style={{fontSize: 18 }}>{allProjects[4].description}</p>
            </div>
                <div className="project-link">
                    <a className='btn btn-outline-dark' href={allProjects[4].link}>Code/Product</a>
                </div>

            <div className="row">
                <h4>{allProjects[13].title}</h4>
                        <p style={{fontSize: 18 }}>{allProjects[13].description}</p>
            </div>
            <div className="project-link">
            <a className='btn btn-outline-dark' href={allProjects[13].link}>Code/Product</a>
            </div>

            <div className="row">
                <h4>{allProjects[1].title}</h4>
                    <p style={{fontSize: 18 }}>{allProjects[1].description}</p>
            </div>
            <div className="project-link">
                <a className='btn btn-outline-dark' href={allProjects[1].link}>Code/Product</a>
            </div>

            <div className="row">
                <h4>{allProjects[2].title}</h4>
                    <p style={{fontSize: 18 }}>{allProjects[2].description}</p>
            </div>
            <div className="project-link">
                <a className='btn btn-outline-dark' href={allProjects[2].link}>Code/Product</a>
            </div>
</div>

    )
}
    const firstList = buildList(firstProjects)

    const [list, setList] = useState(initialList)


    const FilterList = () => {

        const handleSelect = (e) => {
            console.log(e)
            const filteredProjects = allProjects.filter(project => project.primary_tool === e)
            setProjects(filteredProjects)
            console.log(filteredProjects)
            let newList = buildList(filteredProjects)
            setList(newList)
        }
            return (
                // build dropdown menu
                <>
                    {/* // build dropdown menu */}
                    <p style={{fontSize: 18 }}>These are just a few of the many projects I have completed. Feel free to use the filter button to see these projects and more organized by the primary tool used.</p>

                    <DropdownButton
                        title="Filter"
                        id="dropdown-menu"
                        className=""
                        onSelect={handleSelect}
                    >
                        <Dropdown.Item eventKey={"Python"}>Python</Dropdown.Item>
                        <Dropdown.Item eventKey={"SQL"}>SQL</Dropdown.Item>
                        <Dropdown.Item eventKey={"JavaScript"}>JavaScript</Dropdown.Item>
                        <Dropdown.Item eventKey={"Excel"}>Excel</Dropdown.Item>
                    </DropdownButton>
                    {/* // filter based on user select */}
                    <ColoredLine color='#212529'/> 
                    {list}
                </>
            )
        


    }

    return ( 
        <div className="project-list">
            <h2>My Projects</h2>
            <FilterList />
            {/* <p style={{fontSize: 24 }}>These are just a few of the many projects I have completed.</p>
            <ColoredLine color='#212529'/>
            {projList.map((project) => (
                <>
                    <div className="row" key={project.id}>
                        <h4>{project.title}</h4>
                            <p style={{fontSize: 18 }}>{project.description}</p>
                    </div>
                    <div className="project-link">
                        <a className='btn btn-outline-dark' href={project.link}>Code/Product</a>
                    </div>
                </>
            ))} */}
        </div>
    );
}
 
export default ProjectList;

 
// {filteredProjects.map((project) => {
//     if (e === project.primary_tool) {
//         <><div className="row" key={project.id}>
//             <h4>{project.title}</h4>
//             <p style={{ fontSize: 18 }}>{project.description}</p>
//         </div>
//         <div className="project-link">
//             <a className='btn btn-outline-dark' href={project.link}>Code/Product</a>
//         </div></>
//     }
// })

// }

