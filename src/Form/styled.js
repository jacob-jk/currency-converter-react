import styled from "styled-components";

export const theme = {
  colors: {
    primaryColor: "#000000cf",
    secondaryColor: "#c79600",
    tertiaryColor: "#f2dc9a",
  },
  text: {
    position: "center",
  },
  borderStyle: {
    border: "2px solid #c79600",
  },
  radiusStyle: {
    radius: "10px",
  },
};

export const ContainerBox = styled.div`
  max-width: 500px;
  color: #f0ffff;
  margin: 0 auto;
`;

export const Header = styled.p`
  color: ${({ theme }) => theme.colors.primaryColor};
  text-align: ${({ theme }) => theme.text.position};
  font-weight: bold;
`;

export const Fieldset = styled.fieldset`
  width: 100%;
  text-align: ${({ theme }) => theme.text.position};
  padding: 10px;
  border-radius: ${({ theme }) => theme.radiusStyle.radius};
  border: ${({ theme }) => theme.borderStyle.border};
  background-color: ${({ theme }) => theme.colors.primaryColor};
`;

export const Category = styled.span`
  width: 100%;
  max-width: 100px;
  display: inline-block;
`;

export const Select = styled.select`
  width: 150px;
  text-align: ${({ theme }) => theme.text.position};
  padding: 5px;
  margin: 5px;
  border-radius: ${({ theme }) => theme.radiusStyle.radius};
  border: ${({ theme }) => theme.borderStyle.border};
  background-color: #f0ffff;
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Button = styled.button`
  margin: 20px;
  padding: 5px;
  border-radius: ${({ theme }) => theme.radiusStyle.radius};
  border: ${({ theme }) => theme.borderStyle.border};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryColor};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.tertiaryColor};
  }
`;

export const Conclusion = styled.div`
  color: ${({ theme }) => theme.colors.primaryColor};
  text-align: ${({ theme }) => theme.text.position};
  margin: 0;
`;

export const LoadingStatus = styled.p`
  max-width: 500px;
  height: 100px;
  padding: 10px;
  background-color: #ffffff;
  margin: 50px 0;
  display: grid;
  color: ${({ theme }) => theme.colors.primaryColor};
  text-align: ${({ theme }) => theme.text.position};
  align-items: ${({ theme }) => theme.text.position};
  grid-template-columns: auto 1fr auto;
  border-radius: ${({ theme }) => theme.radiusStyle.radius};
  border: ${({ theme }) => theme.borderStyle.border};
`;

export const FailureState = styled(LoadingStatus)``;
