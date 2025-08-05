import React from 'react'
import styled from 'styled-components'
import UserIcon from "../images/user.svg";
import { FaVideo } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { MdArticle } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
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
export default Middle
