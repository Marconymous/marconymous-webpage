import React from 'react';
import ReactDOM from 'react-dom';
import PageSection from "./components/PageSection";
import Project from "./components/Project";
import './css/index.css';
import SocialMediaLink from "./components/SocialMediaLink";

ReactDOM.render(
    <div className={"container"}>
        <PageSection title={"Marconymous"}>
            <h2>Application Development Student from Switzerland</h2>
        </PageSection>
        <PageSection title={"Projects"}>
            <div className={"grid"}>
                <Project title={'Discord Jesus Bot'} link={'https://github.com/Marconymous/jesus-bot-maven'}/>
                <Project title={'Minecraft Essentials Plugin'}
                         link={'https://github.com/Marconymous/minecraft-essentials'}/>
                <Project title={'Java Text Based Calculator'} link={'https://github.com/Marconymous/java-calculator'}/>
                <Project title={'Web-Chess'} link={'https://github.com/Marconymous/web-chess'}/>
                <Project title={'Langston\'s Ant Simulation'} link={'https://github.com/Marconymous/langtons-ant'}/>
            </div>
        </PageSection>
        <PageSection title={"About Me"}>
            <div className={"grid"}>
                <div className={"grid-fw"}>
                    <h3>My Name is Marc Andri Fuchs and I'm a swiss application development student.</h3>
                    <h3>Languages I know:</h3>
                    <ul>
                        <li>Java</li>
                        <li>C</li>
                        <li>PHP</li>
                        <li>JavaScript / TypeScript</li>
                    </ul>
                </div>
            </div>
        </PageSection>
        <PageSection title={"Social Media Links"}>
            <div className={"flex"}>
                <SocialMediaLink img={"./assets/img/snapchat.png"} href={"https://www.snapchat.com/add/mfuchs89"}/>
                <SocialMediaLink img={"./assets/img/instagram.png"} href={"https://www.instagram.com/marcandrifuchs"}/>
                <SocialMediaLink img={"./assets/img/reddit.png"} href={"https://www.reddit.com/user/_Shifted"}/>
            </div>
        </PageSection>
    </div>,
    document.getElementById('root')
);
