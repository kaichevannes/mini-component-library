import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14,
    height: 24,
    iconSize: 16,
    borderWidth: 1,
  },
  large: {
    fontSize: 18,
    height: 36,
    iconSize: 24,
    borderWidth: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...props }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": `${styles.iconSize}px` }}>
        <Icon id={icon} size={styles.iconSize} strokeWidth={2}></Icon>
      </IconWrapper>
      <TextInput
        style={{
          "--width": `${width}px`,
          "--height": `${styles.height / 16}rem`,
          "--border-width": `${styles.borderWidth}px`,
          "--font-size": `${styles.fontSize / 16}rem`,
        }}
        {...props}
      ></TextInput>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: var(--size);
  height: var(--size);
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 4px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
