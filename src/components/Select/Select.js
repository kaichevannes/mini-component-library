import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <HiddenSelect value={value} onChange={onChange}>
        {children}
      </HiddenSelect>
      <PresentationalWrapper>
        {displayedValue}
        <IconWrapper style={{ "--size": "24px" }}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationalWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const HiddenSelect = styled.select`
  position: absolute;
  inset: 0;
  opacity: 0;
  appearance: none;
`;

const PresentationalWrapper = styled.div`
  font-size: ${16 / 16}rem;
  border-radius: 8px;
  padding: 12px 52px 16px 12px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  ${HiddenSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${HiddenSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export default Select;
