import ColoredLine from "./ColoredLine";

const Education = () => {
    return (  
        <div className="education">
            <h2>Education</h2>
            <ColoredLine color="#212529"/>
            <h4>Michigan State University</h4>
            <p style={{fontSize: 18 }}>Data Analytics | Jul 2022 - Nov 2022</p>
            <h4>Maryville University</h4>
            <p style={{fontSize: 18 }}>Master of Healthcare Administration | May 2021 - May 2023</p>
            <h4>Indiana University</h4>
            <p style={{fontSize: 18 }}>Bachelor of Science, Kinesiology and Exercise Science | Jan 2015 - Dec 2020</p>
        </div>
    );
}
 
export default Education;