import {
  CheckIcon,
  StyledHeader,
  StyledButton,
  StyledItem,
  StyledPanel,
} from "../helpers";
import { Box, Text } from "@livepeer.com/design-system";
import FieldContent from "./field-content";
import { TableFilterTextFieldProps } from "./text";

const TableFilterDateField = ({
  label,
  isOpen,
  onToggleOpen,
  condition,
  onConditionChange,
}: TableFilterTextFieldProps) => {
  return (
    <StyledItem value={label}>
      <StyledHeader>
        <StyledButton onClick={onToggleOpen}>
          <Box
            css={{
              minWidth: "13px",
              minHeight: "13px",
              borderRadius: "4px",
              boxShadow: "0px 0px 2px #000000",
              margin: "0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: isOpen ? "darkgray" : "transparent",
            }}>
            {isOpen && <CheckIcon />}
          </Box>
          <Text size="2" css={{ marginLeft: "$2", fontWeight: "bolder" }}>
            {label}
          </Text>
        </StyledButton>
      </StyledHeader>
      <StyledPanel>
        {isOpen && (
          <FieldContent
            label={label}
            type="date"
            condition={condition}
            onConditionChange={onConditionChange}
          />
        )}
      </StyledPanel>
    </StyledItem>
  );
};

export default TableFilterDateField;
