import React from 'react'
import styled from 'styled-components'
import feedIcon from "../images/feed-icon.svg";
import rightIcon from "../images/right-icon.svg";
const RightSide = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src = {feedIcon}/>
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar/>
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar/>
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
            View all recommendations
            <img src = {rightIcon}/>
        </Recommendation>
        <BannerCard>
          <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
        </BannerCard>
      </FollowCard>
    </Container>
  )
}
const Container = styled.div`
  grid-area : rightSide;
`;
const FollowCard = styled.div`
  text-align: center;
  margin-bottom: 8px;
  background-color: white;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 1px rgba(0,0,0,0.15), 0 0 0 rgba(0,0,0,0.2);
  padding: 12px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0,0,0,0.6);
`;
const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
      gap: 8px;
      button {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.6);
        box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.6);
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        box-sizing: border-box;
        font-weight: 600;
        max-height: 32px;
        max-width: 400px;
        outline:  none;
      }
    }
  }
`;
const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;
const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
`;
const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;
export default RightSide
