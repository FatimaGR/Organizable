import styled from "@emotion/styled";
import { colors } from "./colors";
import { typography } from "./typography";

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

export const TrashButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const SaveButton = styled.button`
  border-radius: 50%;
  width: 28px;
  height: 28px;
  border: none;
  cursor: pointer;
  background: ${colors.gray300};
  display: flex;
  align-items: center;
`;

export const CreateButton = styled.button`
  border-radius: 50%;
  width: 28px;
  height: 28px;
  border: none;
  cursor: pointer;
  padding: 3px;
  background: ${colors.gray300};
  display: flex;
  align-items: center;
`;