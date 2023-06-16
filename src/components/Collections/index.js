import React from 'react'
import Icon1 from '../../images/png-1.jpeg';
import Icon2 from '../../images/svg-3.jpeg';
import Icon3 from '../../images/svg-2.jpeg';
import {CollectionsContainer, CollectionsH1,CollectionsWrapper,CollectionsCard,CollectionsIcon,CollectionsH2,CollectionsP} from './CollectionsElements';


const Collections = () => {
  return (
    <CollectionsContainer id="Collections">
        <CollectionsH1>Our Collections</CollectionsH1>

        <CollectionsWrapper>
            <CollectionsCard>
                <CollectionsIcon src={Icon1}/>
                <CollectionsH2>Boys</CollectionsH2>
                <CollectionsP>All Boys toys and games are here.</CollectionsP>
            </CollectionsCard>

            <CollectionsCard>
                <CollectionsIcon src={Icon2}/>
                <CollectionsH2>Babies</CollectionsH2>
                <CollectionsP>All babies need to have fun and learn.</CollectionsP>
            </CollectionsCard>

            <CollectionsCard>
                <CollectionsIcon src={Icon3}/>
                <CollectionsH2>Girls</CollectionsH2>
                <CollectionsP>Dolls and girls toys are all here.</CollectionsP>
            </CollectionsCard>
        </CollectionsWrapper>
      
    </CollectionsContainer>
  )
}

export default Collections;
