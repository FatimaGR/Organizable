import styled from "@emotion/styled";
import { colors } from "./colors";
import { typography, weight } from "./typography";

export const FormButton1 = styled.button`
  background: ${colors.secondary300};
  color: ${colors.white};
  ${typography.content.sm};
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const FormButton2 = styled.button`
  background: none;
  border: none;
  color: ${colors.primary400};
  width: 100%;
  height: 40px;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const FormButton3 = styled.button`
  background: ${colors.primary300};
  color: ${colors.white};
  ${typography.content.sm};
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;