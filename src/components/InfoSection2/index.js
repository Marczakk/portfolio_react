import React from 'react'
import obrazek1 from '../../images/html5.png'
import obrazek2 from '../../images/css3.png'
import obrazek3 from '../../images/svg-2.svg'
import obrazek4 from '../../images/svg-2.svg'
import obrazek5 from '../../images/svg-2.svg'
import obrazek6 from '../../images/svg-2.svg'
import obrazek7 from '../../images/svg-2.svg'
import {Img, Features, FeaturesContent, Box, SkillsWrapper, Skills} from './InfoElements'



const InfoSection2 = ({lightBg, id, imgStart, topLine, lightText, heading, darkText, description, buttonLabel, alt, primary, dark, dark2}) => {
    return (
        <>
            <Features lightBg={lightBg} id={id}>
                <SkillsWrapper>
             
                    <h1>My Skills Bitch</h1>

                    <FeaturesContent>
                        <Box>
                            <Img src={obrazek1} alt={alt}/>
                            <Skills>HTML5</Skills>
                        </Box>
                        <Box>
                            <Img src={obrazek2} alt={alt}/>
                            <Skills>CSS3</Skills>
                        </Box>
                        <Box>
                            <Img src={obrazek1} alt={alt}/>
                            <Skills>HTML5</Skills>
                        </Box>
                        <Box>
                            <Img src={obrazek1} alt={alt}/>
                            <Skills>HTML5</Skills>
                            
                        </Box>
                    </FeaturesContent>
                </SkillsWrapper>
            </Features>
        </>
    )
}

export default InfoSection2
