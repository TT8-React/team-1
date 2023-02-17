import styled from "styled-components";

export const UploadFileWrapper = styled.form`
  padding: 67px;
  p {
    font-weight: 700;
    font-size: 19px;
    margin-bottom: 31px;
  }
  > div {
    display: flex;
    align-items: center;
    column-gap: 56px;
    button {
      color: white;
      background-color: #000000;
      border-radius: 5px;
      padding: 10px 16px;
      font-weight: 700;
    }
  }
  .uploadFile {
    background: #efefef;
    width: 454px;
    height: 69px;
    display: flex;
    align-items: center;
    border: 1px solid #848484;
    border-radius: 49px;
    position: relative;
    overflow: hidden;
    label {
      display: flex;
      align-items: center;
      gap: 20px;
      background-color: #efefef;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding-left: 30px;
      z-index: 99;
    }
  }
  .files {
    font-weight: 700;
    margin-top: 12px;
  }
`;
