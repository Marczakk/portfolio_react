import React from 'react'
import Icon1 from '../../images/project1.png'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, LinksContainer, ProjectLink } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue. </ServicesP>

                    <LinksContainer>
                        <a href="//www.twitter.com" style={{marginRight: 50 + 'px', textDecoration: 'none'}} target="_blank" aria-label="Twitter">
                                    Github
                        </a>
                        <ProjectLink href="//www.twitter.com" style={{marginLeft: 50 + 'px'}} target="_blank" aria-label="Twitter">
                                    Live
                        </ProjectLink>
                    </LinksContainer>

                   
                    
                    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue. </ServicesP>
                    <a href="//www.twitter.com" target="_blank" aria-label="Twitter">
                                Github
                    </a>

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue. </ServicesP>
                    <a href="//www.twitter.com" target="_blank" aria-label="Twitter">
                                Github
                    </a>


                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
