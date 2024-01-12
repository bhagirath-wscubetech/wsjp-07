import { useState } from "react";
function Accord(props) {
    const [toggle, setToggle] = useState(false);
    // console.log(toggle);

    function demo() {
        setToggle(!toggle);
    }

    return <div className="mt-2">
        <div className="p-3 position-relative border border-danger h-4" onClick={demo}>
            {props.title}
            <span className="position-absolute d-inline-block" style={
                {
                    transition: "500ms",
                    right: 20,
                    top: 0,
                    fontSize: 30,
                    transform: toggle == true ? "rotate(-180deg)" : ""
                }
            }>
                &darr;
            </span>
        </div>
        <div className="p-3 border border-info" style={{
            display: toggle == true ? 'block' : 'none'
        }}>
            {props.body}
        </div>
    </div>
}

export default Accord;