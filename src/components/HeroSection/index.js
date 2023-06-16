import React,{useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };
  return (
    <HeroContainer id='about'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>

        <HeroContent>
            <HeroH1>Play and Discover the World</HeroH1>
            <HeroP>
            Unlimited collection of distinctive and creative toys for your child.
            </HeroP>
            <HeroBtnWrapper>
                <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                 Lets Play {hover ?<ArrowForward/>:<ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
      
    </HeroContainer>
  );
};

export default HeroSection;
