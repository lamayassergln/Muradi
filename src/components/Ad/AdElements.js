import styled from 'styled-components';

export const Container = styled.div`
position: relative;
display: flex;
`

export const AdBg=styled.div`
position:relative;
z-index:0;
hight:100%;
width:100%;
top:0;
right:0;
bottom:0;
left:0;
overflow:hidden;
`
export const VideoBg=styled.video`
 -o-object-fit:cover;
 object-fit:cover;
 width:100%;
 hight: 100%;
 padding-right:0;
 background: #232a34;
`
export const Vidtext = styled.div`
position:absolute;
top:45%;
left:20%;
right:25%;
z-index:1;
color:white;
text-align: center;

@media screen and (max-width: 480px) {
    max-height:5px;
  }

`
export const H1 = styled.h1`
text-shadow:2px 2px pink;
font-size: 30px;
line-height: 1.1;
font-weight: 600;
margin-bottom:2%;

@media screen and (max-width: 480px) {
    font-size: 25px;
  }
`

export const P = styled.p`
text-shadow:2px 2px #7fa933;
`