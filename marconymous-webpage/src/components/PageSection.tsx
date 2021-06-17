import React from 'react';
import './PageSection.css';

function PageSection(props: { title: any; children: any; }) {
    return (
        <section>
            <h1>{props.title}</h1>
            {props.children}
        </section>
    );
}


export default PageSection;