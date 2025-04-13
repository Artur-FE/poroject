

// import styled from "@emotion/styled";

// export const LoginFormWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 30px;
//   width: 600px;
//   padding: 30px;
//   background: #f0f0f0;
//   border-radius: 8px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// export const Heading = styled.h1`
//   font-size: 24px;
//   margin-bottom: 20px;
//   color: #333;
// `;

// export const Input = styled.input`
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 16px;
//   width: 100%;
//   box-sizing: border-box;

//   &:focus {
//     outline: none;
//     border-color: #3421e4;
//     box-shadow: 0 0 5px rgba(52, 33, 228, 0.5);
//   }
// `;

// export const Button = styled.button`
//   background-color: #3421e4;
//   color: white;
//   padding: 12px 20px;
//   border: none;
//   border-radius: 4px;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #1d0ea3;
//   }

//   &:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//   }
// `;

// export const ErrorMessage = styled.p`
//   color: red;
//   font-size: 14px;
//   margin-top: 5px;
// `;

// export const Spinner = styled.div`
//   margin-top: 20px;
//   font-style: italic;
//   color: #777;
// `;

import styled from '@emotion/styled';

export const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const LoginFormHeading = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

export const LoginFormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
  width: 100%;
  text-align: left;
`;

export const LoginFormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
`;

export const LoginFormButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
  width: 100%;
    &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const LoginErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export const LoginFormSpinner = styled.p`
  text-align: center;
  margin-top: 20px;
  font-style: italic;
`;