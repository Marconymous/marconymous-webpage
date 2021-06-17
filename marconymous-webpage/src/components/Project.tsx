import React from 'react';

function Project(props: {
    link: any;
    title: any;
}) {
    return (
        <div className={'project'}>
            <h2>{props.title}</h2>
            <a target={"_blank"} href={props.link}>Github Repo</a>
        </div>
    );
}

export default Project;