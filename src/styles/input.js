import styled from "@emotion/styled";
import { colors } from "./colors";
import { typography, weight } from "./typography";

export const FormInput = styled.input`
  background: transparent;
  width: 100%;
  border: none;
  margin: 8px 11px;
  outline: none;
  color: ${colors.gray300};
`;

export const FormInputContainer = styled.div`
  border: 1px solid ${colors.gray200};
  background: ${colors.white};
  border-radius: 6px;
  max-width: 100%;
  height: 40px;
  padding: 0 15px;
  display: flex;
`;

export const FormLabel = styled.label`
  color: ${colors.gray400};
  ${typography.content.xs};
  ${weight.regular};
`;

export const Form = styled.form`
  width: 480px;
  gap: 16px;
  display: flex;
  flex-direction: column;
`;

export const New = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 8px;
  ${typography.content.lg}
  padding: 4px;
  box-sizing: border-box;
  color: ${colors.gray300};
  outline: none;
`;