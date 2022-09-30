import ColoredLine from "./ColoredLine";

const BrandStatement = () => {
    return (  
        <div className="brand-statement">
            <h3>More about Me</h3>
            <ColoredLine color='#212529'/>
            <p style={{fontSize: 18 }}>I am a highly motivated data analyst who finds great satisfaction in employing multiple tools to analyze all types of data sets, uncovering salient patterns and trends that organizations can use to assess organizational quality and effectiveness, and develop strategies for future success. Thrives in breaking large, complex problems down into smaller more manageable tasks, either while working alone or in collaboration with a team.</p>
            <p style={{fontSize: 18 }}>I have skills in Python, SQL, Tableau, JavaScript, HTML, CSS, Hadoop, machine learning, Excel, and VBA, from Michigan State University’s Data Analytics Certificate program. My strengths include critical thinking, problem solving, and communication skills which allow me to collaborate with stakeholders to determine the information they want out of a data set, and then use my skills to efficiently and effectively analyze the data and report my findings in a consumable presentation.</p>
        </div>
    );
}
 
export default BrandStatement;