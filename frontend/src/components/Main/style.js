import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 30px;

  h1 {
    margin-bottom: 70px;
  }

  span {
    color: var(--primary-color);
  }

  input {
    background-color: blue;
  }

  .list-doctors {
    display: grid;
    width: 70%;
    height: 70%;
    margin-bottom: 70px;
  }

  .doctor {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 1em;
    text-align: left;
  }

  .doctor button {
    height: 0;
    width: 0;
    border: none;
    cursor: pointer;
    margin-right: 20px;
    color: var(--button-delit);
    font-size: 20px;
  }

  .doctor .icons-cards {
    height: 25px;
    text-align: right;
    position: relative;
  }

  .doctor .icons-cards .icon-edit {
    font-size: 20px;
    margin-right: 10px;
  }

  .cor1 {
    color: var(--button-edit);
  }
  .cor2 {
    color: var(--button-editKey);
  }
  .cor1:hover {
    color: var(--button-edit-hover);
  }
  .cor2:hover {
    color: var(--button-editkey-hover);
  }

  .doctor button:hover {
    color: var(--button-delit-hover);
  }

  .info-doctor {
    margin-top: -18%;
    display: grid;
    align-items: center;
  }

  .info-doctor p {
    display: flex;
    align-items: center;
    padding: 5px 0 5px;
  }

  .info-doctor div {
    display: flex;
    align-items: center;
    padding: 5px 0 5px;
  }

  .info-doctor span {
    border-top: 1px solid #d4d4d4;
  }

  .icon {
    margin-right: 10px;
    color: #a8a8b3;
  }
`;

export const AlertDiv = styled.div`
  position: fixed;
  top: 0;
  margin-top: 56px;
  margin-right: 20px;
  right: 0;
`;
