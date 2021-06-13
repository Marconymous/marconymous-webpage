import React from 'react';
import './PageSection.css';

class PageSection extends React.Component<any, any> {
    render() {
        return (
            <section>
                <h1>{this.props.title}</h1>
                {this.props.children}
            </section>
        );
    }
}

export default PageSection;