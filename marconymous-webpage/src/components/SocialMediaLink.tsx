import React from 'react';

function SocialMediaLink(props: { href: string | undefined; img: string | undefined; }) {
    return (
        <div className={"sm__container"}>
            <a href={props.href} target={"_blank"}>
                <img className={"sm__img"} src={props.img} alt=""/>
            </a>
        </div>
    );
}

export default SocialMediaLink;