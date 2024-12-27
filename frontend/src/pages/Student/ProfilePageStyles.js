import styled from "styled-components";

export const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial, sans-serif";
`;

export const ProfilePicture = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
`;

export const ProfileInput = styled.input`
  display: block;
  margin: 10px auto;
`;

export const ProfileDetailsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProfileLabel = styled.label`
  font-weight: bold;
`;

export const ProfileInputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ProfileTextarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ProfileButton = styled.button`
  padding: 10px;
  background-color: #0f2f42;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #135a7e;
  }
`;

export const PasswordSection = styled.div`
  margin-top: 30px;
`;

export const PasswordInput = styled.input`
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const PasswordButton = styled.button`
  padding: 10px;
  background-color: #0f2f42;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
