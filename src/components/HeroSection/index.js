import React, { useState } from 'react'
import Video from '../../Video/video.mp4'
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Witaj! </HeroH1>
                <HeroP>
                Mam na imie Kamil i jestem Junior Front-end developerem
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    >
                        Napisz do mnie {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
