import { useMemo, useState } from "react";
import { TextInput, TextInputProps } from "react-native";

import { useTheme } from "@/store/theme.store";
import { COLOR_DIVIDER, COLOR_NEUTRAL, COLOR_PRIMARY } from "@/theme";
import { hexToRgba } from "@/utils/color";

import createStyles from "./styles";

type InputProps = TextInputProps & {
  disabled?: boolean;
};

export function Input({ disabled, style, onFocus, onBlur, ...props }: InputProps) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(), []);
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      {...props}
      editable={!disabled}
      placeholderTextColor={COLOR_NEUTRAL[500]}
      selectionColor={hexToRgba(COLOR_PRIMARY[500], 0.3)}
      onFocus={(event) => {
        setFocused(true);
        onFocus?.(event);
      }}
      onBlur={(event) => {
        setFocused(false);
        onBlur?.(event);
      }}
      style={[
        styles.base,
        {
          backgroundColor: theme.color.surface as string,
          borderColor: focused ? (COLOR_PRIMARY[500] as string) : COLOR_DIVIDER,
          color: theme.color.textPrimary as string,
        },
        focused && styles.focused,
        disabled && styles.disabled,
        style,
      ]}
    />
  );
}
