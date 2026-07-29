import {
  BottomSheetBackdrop,
  type BottomSheetBackdropProps,
  BottomSheetModal as GorhomBottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import type { ComponentRef, PropsWithChildren } from "react";
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from "react";
import { Pressable, View } from "react-native";

import { Icon } from "@/components/icon/icon";
import { Typography } from "@/components/typography/typography";
import { useTheme } from "@/store/theme.store";
import { TypographyType } from "@/theme";

import createStyles from "./styles";

export type BottomSheetModalRef = ComponentRef<typeof GorhomBottomSheetModal>;

type BottomSheetModalProps = PropsWithChildren<{
  snapPoints?: (string | number)[];
  title?: string;
  hideHeader?: boolean;
}>;

export const BottomSheetModal = forwardRef<BottomSheetModalRef, BottomSheetModalProps>(
  function BottomSheetModal({ children, snapPoints, title, hideHeader }, ref) {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const internalRef = useRef<BottomSheetModalRef>(null);

    useImperativeHandle(ref, () => internalRef.current as BottomSheetModalRef, []);

    const handleClosePress = useCallback(() => {
      internalRef.current?.dismiss();
    }, []);

    const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => {
      return <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} pressBehavior="close" />;
    }, []);

    const enableDynamicSizing = useMemo(() => {
      let isEnabled = true;
      if (snapPoints) {
        isEnabled = false;
      }
      return isEnabled;
    }, [snapPoints]);

    return (
      <GorhomBottomSheetModal
        ref={internalRef}
        snapPoints={snapPoints}
        enableDynamicSizing={enableDynamicSizing}
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.background}
        handleIndicatorStyle={styles.handleIndicator}
      >
        <BottomSheetView style={styles.content}>
          {hideHeader ? null : (
            <View style={styles.header}>
              <Typography type={TypographyType.LABEL} style={styles.headerTitle}>
                {title}
              </Typography>
              <Pressable onPress={handleClosePress} hitSlop={8}>
                <Icon family="feather" name="x" size={20} color={theme.color.textPrimary as string} />
              </Pressable>
            </View>
          )}
          {children}
        </BottomSheetView>
      </GorhomBottomSheetModal>
    );
  },
);
