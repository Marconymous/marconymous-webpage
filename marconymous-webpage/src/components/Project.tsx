import React from 'react';

class Project extends React.Component<any, any> {
    render() {
        return (
            <div className={'project'}>
                <h2>{this.props.title}</h2>
                <a target={"_blank"} href={this.props.link}>Github Repo</a>
            </div>
        );
    }
}

export default Project;