/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const Button = (props) => (
    <div className={`pluginWrapper buttonWrapper`}>
        <a
            className={`button buttonOverride ${
                props.variant === 'primary' ? 'primaryButton' : 'secondaryButton'
            }`}
            href={props.href}
            target={props.target}
        >
            {props.children}
        </a>
    </div>
);

class HomeSplash extends React.Component {
    render() {
        const { siteConfig, language = '' } = this.props;
        const { baseUrl, docsUrl } = siteConfig;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
        const langPart = `${language ? `${language}/` : ''}`;
        const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

        const SplashContainer = (props) => (
            <div className="homeContainer">
                <div className="frostedGlass" />
                <div className="homeSplashFade">
                    <div className="wrapper homeWrapper">{props.children}</div>
                </div>
            </div>
        );

        const Logo = (props) => (
            <div className="projectLogoInline">
                <img src={props.img_src} alt="Project Logo" />
            </div>
        );

        const ProjectTitle = () => (
            <div>
                <div className={'projectTitleContainer'}>
                    {/* <Logo img_src={`${baseUrl}img/zenithLogo.svg`} /> */}
                    <h2 className="projectTitle primaryText">{siteConfig.title}</h2>
                    <h2 className={'projectTitle'}> Design System</h2>
                </div>
                <p className="tagline">{siteConfig.tagline}</p>
            </div>
        );

        const PromoSection = (props) => (
            <div className="section promoSection">
                <div className="promoRow">
                    <div className="pluginRowBlock">{props.children}</div>
                </div>
            </div>
        );

        return (
            <SplashContainer>
                <div className="inner">
                    <ProjectTitle siteConfig={siteConfig} />
                    <PromoSection>
                        <Button variant={'primary'} href="#try">
                            Read More
                        </Button>
                        <Button variant={'secondary'} href={docUrl('doc1.html')}>
                            Github
                        </Button>
                    </PromoSection>
                </div>
            </SplashContainer>
        );
    }
}

const Index = (props) => {
    const { config: siteConfig, language = '' } = props;
    const { baseUrl } = siteConfig;

    const Block = (props) => (
        <Container
            padding={['bottom', 'top']}
            id={props.id}
            background={props.background}
            className={props.className}
        >
            <GridBlock
                align={props.align}
                contents={props.children}
                layout={props.layout}
                className={props.gridBlockClassName}
            />
        </Container>
    );

    const Features = () => (
        <Block
            align={'center'}
            layout="threeColumn"
            className={'block darkBlock'}
            gridBlockClassName={'gridContent'}
        >
            {[
                {
                    title: 'A Living Document',
                    content: `At vero eos et dolore magnam aliquam causam ista, quae dices, 
                            libenter assentiar probabo, inquit, modo ista sis aequitate, quam nihil est, 
                            necesse est`,
                    image: `${baseUrl}img/livingDocument.svg`,
                    imageAlign: 'top',
                },
                {
                    title: 'Robust & Scalable',
                    content: `At vero eos et dolore magnam aliquam causam ista, quae dices, 
                        libenter assentiar probabo, inquit, modo ista sis aequitate, quam nihil est, 
                        necesse est`,
                    image: `${baseUrl}img/robustApp.svg`,
                    imageAlign: 'top',
                },
                {
                    title: 'Community Driven',
                    content: `At vero eos et dolore magnam aliquam causam ista, quae dices, 
                        libenter assentiar probabo, inquit, modo ista sis aequitate, quam nihil est, 
                        necesse est. assentiar probabo? [Contribute.](https://github.com/Jmeza081/zenith-ui)`,
                    image: `${baseUrl}img/community.svg`,
                    imageAlign: 'top',
                },
            ]}
        </Block>
    );

    const What = () => (
        <Block align={'left'} layout="twoColumn" className={'block'}>
            {[
                {
                    title: 'What is Zenith Exactly?',
                    content: `At vero eos et dolore magnam aliquam causam ista, quae dices, 
                        libenter assentiar probabo, inquit, modo ista sis aequitate, quam nihil est, 
                        necesse est`,
                    image: `${baseUrl}img/componentsShowcase.svg`,
                    imageAlign: 'right',
                },
            ]}
        </Block>
    );

    const GetStarted = () => (
        <React.Fragment>
            <div className={'centeredContainer block lightBlock'}>
                <h2>Let's Get Started</h2>
                <p align={'center'} className={'textMaxWidth paddingBottom'}>
                    Zenith UI is built on existing libraries that encourage good front-end
                    development
                </p>
                <Button variant={'primary'} href="#try">
                    Read More
                </Button>
            </div>
        </React.Fragment>
    );

    return (
        <div>
            <HomeSplash siteConfig={siteConfig} language={language} />
            <div className="mainContainer mainContainerOverride">
                <Features />
                <What />

                <GetStarted />
            </div>
        </div>
    );
};

module.exports = Index;
