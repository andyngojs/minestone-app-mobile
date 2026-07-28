import { useMemo } from "react";
import { ScrollView, View } from "react-native";

import { Button, Card, Header, Icon, Screen, Typography } from "@/components";
import { useTheme } from "@/store/theme.store";
import { TypographyType } from "@/theme";

import createStyles from "./styles";

export default function Memory() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Typography type={TypographyType.TITLE_LARGE} style={styles.headline}>
          Feeling a little off today?
        </Typography>
        <Typography type={TypographyType.BODY} style={styles.subtitle}>
          That&apos;s okay. Let&apos;s look back for a moment.
        </Typography>

        <View style={styles.ctaWrap}>
          <Button label="See 5 of my wins" variant="primary" onPress={() => {}} />
        </View>

        <View style={styles.cardStack}>
          <View style={[styles.ghostCard, styles.ghostCardBack]} />
          <View style={[styles.ghostCard, styles.ghostCardMiddle]} />
          <Card elevation="md">
            <View style={styles.winCardHeader}>
              <Typography type={TypographyType.CAPTION} style={styles.winCardDate}>
                May 16
              </Typography>
              <View style={styles.winCardIconBadge}>
                <Icon family="materialCommunity" name="leaf" size={14} color={theme.color.sage700 as string} />
              </View>
            </View>
            <Typography type={TypographyType.LABEL} style={styles.winCardTitle}>
              Stretched for 10 minutes after a long day
            </Typography>
          </Card>
        </View>

        <View style={styles.decorativeWrap}>
          <View style={styles.decorativeCircle}>
            <Icon family="materialCommunity" name="leaf" size={36} color={theme.color.terracotta600 as string} />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
