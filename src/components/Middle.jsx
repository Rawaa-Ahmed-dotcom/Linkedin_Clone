import React from 'react'
import styled from 'styled-components'
import UserIcon from "../images/user.svg";
import { FaVideo } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { MdArticle } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { FaEllipsis } from "react-icons/fa6";
import PostImage from "../images/post-image.jpg";
import { AiOutlineLike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
const Middle = () => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src = {UserIcon}/>
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <IoMdPhotos />
            <span>Photo</span>
          </button>
          <button>
            <FaVideo />
            <span>Video</span>
          </button>
          <button>
            <MdEventAvailable />
            <span>Event</span>
          </button>
          <button>
            <MdArticle />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
           <ShareActor>
            <a>
              <img src = {UserIcon}/>
              <div>
                <span>title</span>
                <span>info</span>
                <span>date</span>
              </div>
            </a>
            <button>
              <FaEllipsis />
            </button>
           </ShareActor>
           <Description>
             Description
           </Description>
           <SharedImg>
            <a>
              <img src = {PostImage}/>
            </a>
           </SharedImg>
           <SocialCounts>
             <li>
              <button>
                <AiOutlineLike />
                <FaHeart />
                <span>75</span>
              </button>
             </li>
             <li>
              <a>10 Comments</a>
             </li>
           </SocialCounts>
           <SocialActions>
             <button>
            <AiOutlineLike />
            <span>Like</span>
           </button>
           <button>
            <FaRegCommentDots />
            <span>Comments</span>
           </button>
           <button>
            <IoMdShareAlt />
            <span>Share</span>
           </button>
           <button>
            <IoIosSend />
            <span>Send</span>
           </button>
           </SocialActions>
           
           
        </Article>
      </div>
    </Container>
  )
}
const Container = styled.div`
  grid-area : main;
`;
const CommonCard = styled.div`
  text-align: center;
  margin-bottom: 8px;
  background-color: white;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15) , 0 0 0 rgba(0,0,0,0.2);

`;
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background-color: white;
  div {
    button {
      outline: none;
      font-size: 14px;
      line-height: 1.9;
      min-height: 48px;
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      span {
        color: rgba(0,0,0,0.6);
      }
      
      }
      &:first-child {
        display: flex;
      align-items: center;
      padding: 8px 16px 8px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0,0,0,0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      padding-bottom: 4px;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;
const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;

`;
const ShareActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    display: flex;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis : 0;
      margin-left: 8px;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: black;
        }
        &:nth-child(2) {
          font-size: 12px;
          color: rgba(0,0,0,0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;
const Description = styled.div`
  padding: 0 16px;
  color: rgba(0,0,0,0.9);
  font-size: 14px;
  text-align: left;

`;
const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  position: relative;
  background-color: #f9fafb;
  & > a > img {
    object-fit: contain;
    max-width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin : 0 16px;
  padding: 8px 0;
  border-bottom : 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
    }
  }
`;
const SocialActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;
export default Middle
