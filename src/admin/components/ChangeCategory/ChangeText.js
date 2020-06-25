import React, {useEffect, useState} from "react";

const ChangeText = (props) => {
    let [status, setStatus] = useState(props.status);
    let [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    let activateEditMode = () => {
        setEditMode(true);
    };
    let deactivateEditMode = () => {
        setEditMode(false);
        if (props.isDescription === true) {
            props.UpdateStatus(props.Name, props.id, status, props.Products);
        } else {
            props.UpdateStatus(status, props.id, props.Description, props.Products);
        }
    };
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };
    const enterDeactivate = (e) => {
        if (e.charCode === 13) {
            deactivateEditMode();
        }
    };
    return (
        <div>
            {editMode
                ? <div><input onChange={onStatusChange} autoFocus={true}
                              onBlur={deactivateEditMode} onKeyPress={enterDeactivate} value={status}/></div>
                :
                <div><span onDoubleClick={activateEditMode}
                           style={{color: "white", fontSize: props.fontSize, fontWeight: "bold"}}>{status || "-"}</span>
                </div>
            }
        </div>
    )
};

export default ChangeText;