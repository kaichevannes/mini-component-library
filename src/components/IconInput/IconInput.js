import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: "24px",
    iconSize: "16px",
  },
  large: {
    height: "36px",
    iconSize: "24px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }

  return (
    <Wrapper style={{ "--width": `${width}px`, "--height": styles.height }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Search placeholder={placeholder}></Search>
      <FocusBorder />
      <IconWrapper style={{ "--size": styles.iconSize }}>
        <Icon id={icon} size={styles.iconSize} strokeWidth={2}></Icon>
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
  height: var(--height);
  border-bottom: 2px solid ${COLORS.black};
  color: ${COLORS.gray500};
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  width: var(--size);
  height: var(--size);
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  pointer-events: none;
  color: inherit;
`;

const Search = styled.input`
  inset: 0;
  padding-left: 24px;
  position: absolute;
  border: none;
  color: inherit;
  font-weight: bold;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }
  &:focus {
    outline: none;
  }
`;

const FocusBorder = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  ${Search}:focus + & {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export default IconInput;
