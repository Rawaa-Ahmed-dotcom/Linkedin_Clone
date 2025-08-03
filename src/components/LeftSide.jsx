import React from 'react'
import styled from 'styled-components'
import WidgetIcon from "../images/widget-icon.svg";
import photo from "../images/photo.svg";
import imagesItemIcon from "../images/item-icon.svg";
import plusIcon from "../images/plus-icon.svg"
const LeftSide = () => {
  console.log(photo);
  return (
    <Container>
      <ArtCard>
        <UserInfo>
            <CardBackground/>
            <a>
                <Photo />
                <Link>Welcome, there!</Link>
            </a>
            <a>
                <AddPhotoText>Add a photo</AddPhotoText>
            </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow up your network</span>
            </div>
            <img src = {WidgetIcon}/>
          </a>
        </Widget>
        <Item>
          <span>
            <img src = {imagesItemIcon}/>
            My items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
          Events
          <img src = {plusIcon}/>
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  )
}
const Container = styled.div`
  grid-area : leftSide;
`;
const ArtCard = styled.div`
  text-align: center;
  margin-bottom: 8px;
  background-color: white;
  border-radius: 5px; 
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 , 0, 0, .15) , 0 0 0 rgba(0 ,0 , 0 , 0.2);

`;
const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0 ,0 ,0 ,0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;
const CardBackground = styled.div`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2048' height='512' id='person-default' data-supported-dps='2048x512'%3E%3Cpath fill='none' d='M0 0h2048v512H0z'/%3E%3Cpath fill='%23dbe7e9' d='M0 0h2048v512H0z'/%3E%3Cpath fill='%23bfd3d6' d='M1408 0h640v512h-640z'/%3E%3Cpath d='M1236.29 0H0v512h1236.29a771.52 771.52 0 000-512z' fill='%23a0b4b7'/%3E%3C/svg%3E");
  background-position: center;
  background-size: 462px;
  height: 54px;
  width: 100%;
  margin: -12px -12px 0;
`;
const Photo = styled.div`
  box-shadow: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' id='add-photo-medium' data-supported-dps='56x56'%3E%3Cpath fill='none' d='M0 0h56v56H0z'/%3E%3Cpath fill='%23fff' d='M8 25h40v17H8z'/%3E%3Cpath fill='%2300a0dc' d='M54 6h-4V2h-3v4h-4v3h4v4h3V9h4z'/%3E%3Cpath fill='%239bdaf3' d='M38.625 17l-2.25-5h-16.75l-2.25 5H8v7h40v-7z'/%3E%3Cpath fill='%23005e93' d='M9 23h38v3H9z'/%3E%3Cpath d='M28 37c-4.962 0-9-4.037-9-9s4.038-9 9-9 9 4.037 9 9-4.038 9-9 9z' fill='%23fff'/%3E%3Cpath d='M28 19.875c4.48 0 8.125 3.645 8.125 8.125S32.48 36.125 28 36.125 19.875 32.48 19.875 28 23.52 19.875 28 19.875M28 17c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11z' fill='%23005e93'/%3E%3Cpath d='M28 22a6 6 0 100 12 6 6 0 000-12z' fill='%2300a0dc'/%3E%3Cpath d='M35.625 13l2.24 5H47v23H9V18h9.132l2.243-5h15.213m-15.872-3a2 2 0 00-1.834 1.202L16.165 15H8a2 2 0 00-2 2v25a2 2 0 002 2h40a2 2 0 002-2V17a2 2 0 00-2-2h-8.168l-1.717-3.798A2 2 0 0036.281 10H19.716z' fill='%23005e93'/%3E%3C/svg%3E");
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  background-color: white;
  box-sizing: border-box;
  background-clip: content-box;
`;
const Link = styled.div`
 font-size: 16px;
 line-height: 1.5;
 color: rgba(0 , 0, 0, 0.9);
 font-weight: 600;
`;
const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;
const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  /* padding-inline: 12px; */
  & > a {
    text-decoration : none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0 ,0 , 0.08);
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.33;
        cursor: pointer;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: black;
        }
      }
    }
  }
  
`;
const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    background-color: rgba(0,0,0,0.08);
  }
`;
const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0 ;
  text-align: left;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    padding: 4px 12px;
    font-size: 12px;
    vertical-align: super;
    &:hover {
      color: #0a66c2;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      border-top: #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;
export default LeftSide
