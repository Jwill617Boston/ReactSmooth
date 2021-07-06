import React, { useState } from "react";
import Video from "../../videos/BgVid.mp4";
import {
   HeroContainer,
   HeroBg,
   VideoBg,
   HeroContent,
   HeroH1,
   HeroP,
   HeroBtnWrapper,
   ArrowForward,
   ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
   const [hover, setHover] = useState(false);

   const onHover = () => {
      setHover(!hover);
   };

   return (
      <HeroContainer>
         <HeroBg>
            <VideoBg
               playsInline
               autoPlay
               loop
               muted
               src={Video}
               type="video/mp4"
            ></VideoBg>
         </HeroBg>
         <HeroContent>
            <HeroH1>THE TITLE</HeroH1>
            <HeroP>
               This is the part where you can say anything that you want
            </HeroP>
            <HeroBtnWrapper>
               <Button
                  to="signup"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
               >
                  Get it done {hover ? <ArrowForward /> : <ArrowRight />}
               </Button>
            </HeroBtnWrapper>
         </HeroContent>
      </HeroContainer>
   );
};

export default HeroSection;
