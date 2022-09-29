const ColoredLine = ({color}) => {
    return (  
        <hr className="horizontal-rule"
            style={{
                color: color,
                backgroundColor: color,
                height: '2px'
            }}
        />
    );
}
 
export default ColoredLine;

// const ColoredLine = ({ color }) => (
//     <hr
//         style={{
//             color: color,
//             backgroundColor: color,
//             height: 5
//         }}
//     />
// );