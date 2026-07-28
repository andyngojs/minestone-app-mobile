import { useMemo, useState } from "react";
import { TextInput, TextInputProps } from "react-native";

import { useTheme } from "@/store/theme.store";
import { hexToRgba } from "@/utils/color";

import createStyles from "./styles";

type InputProps = TextInputProps & {
  disabled?: boolean;
};

export function Input({ disabled, style, onFocus, onBlur, ...props }: InputProps) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      {...props}
      editable={!disabled}
      placeholderTextColor={theme.color.grey500 as string}
      selectionColor={hexToRgba(theme.color.terracotta500 as string, 0.3)}
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
          borderColor: focused ? (theme.color.terracotta500 as string) : (theme.color.divider as string),
          color: theme.color.textPrimary as string,
        },
        focused && styles.focused,
        disabled && styles.disabled,
        style,
      ]}
    />
  );
}
