import React from "react";
import {Button, ListGroup} from "react-bootstrap";

const Tasks = ({text}) => {
    return(
        <ListGroup.Item>
            <div className="d-flex justify-content-around">
                <div>
                    <span>{text}</span>
                </div>
                <div>
                    <Button variant={"success"} className="me-2">confirm</Button>
                    <Button variant={"danger"}>delete</Button>
                </div>
            </div>
        </ListGroup.Item>
    )
}

export default Tasks