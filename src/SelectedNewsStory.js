import React from "react";
import { useParams, useMatch } from "react-router-dom";

function SelectedNewsStory() {
    let { articleId } = useParams();

    return (
        <p>hi</p>
    )
}

export default SelectedNewsStory;