import { useMemo, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";

import {
  Button,
  Card,
  Header,
  Icon,
  Input,
  Screen,
  Tag,
  Typography,
} from "@/components";
import type { AppScreenProps } from "@/routes/navigation-params-list";
import { useTheme } from "@/store/theme.store";
import { TypographyType } from "@/theme";

import createStyles from "./styles";

const CATEGORIES = [
  "Personal Wellness",
  "Digital Balance",
  "Home Cooking",
  "Career",
  "Social",
];

type CreateMomentProps = AppScreenProps<"CreateMoment">;

export default function CreateMoment({ navigation }: CreateMomentProps) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [text, setText] = useState("");
  const [category, setCategory] = useState<string>(CATEGORIES[0]);

  const handleSave = () => {
    console.log("Save moment", { text, category });
    navigation.goBack();
  };

  return (
    <Screen>
      <Header onBackPress={() => navigation.goBack()} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
        contentContainerStyle={styles.content}
      >
        <View style={styles.heading}>
          <Typography
            type={TypographyType.TITLE_LARGE}
            style={styles.headingTitle}
          >
            What happened?
          </Typography>
          <Typography
            type={TypographyType.CAPTION}
            style={styles.headingSubtitle}
          >
            A small step forward is still a win.
          </Typography>
        </View>

        <Input
          multiline
          numberOfLines={6}
          placeholder="Write your ordinary win here..."
          value={text}
          onChangeText={setText}
          style={styles.textarea}
        />

        <View style={styles.quickActions}>
          <View style={styles.quickActionButton}>
            <Button
              label="Add Image"
              variant="secondary"
              icon={{ name: "image", family: "feather" }}
              onPress={() => {}}
            />
          </View>
          <View style={styles.quickActionButton}>
            <Button
              label="Voice Note"
              variant="secondary"
              icon={{ name: "mic", family: "feather" }}
              onPress={() => {}}
            />
          </View>
        </View>

        <View style={styles.categorySection}>
          <Typography
            type={TypographyType.CAPTION}
            style={styles.categoryLabel}
          >
            Select Category
          </Typography>
          <View style={styles.categoryList}>
            {CATEGORIES.map((item) => {
              const selected = item === category;
              return (
                <Pressable key={item} onPress={() => setCategory(item)}>
                  <Tag
                    label={item}
                    variant={selected ? "accent-solid" : "accent"}
                  />
                </Pressable>
              );
            })}
          </View>
        </View>

        <Card
          elevation="sm"
          style={{ backgroundColor: theme.color.sage100 as string }}
        >
          <View style={styles.infoRow}>
            <View
              style={[
                styles.infoIconBadge,
                { backgroundColor: theme.color.sage200 as string },
              ]}
            >
              <Icon
                family="ionicons"
                name="sparkles"
                size={14}
                color={theme.color.sage700 as string}
              />
            </View>
            <Typography
              type={TypographyType.CAPTION}
              style={[
                styles.infoText,
                { color: theme.color.sage700 as string },
              ]}
            >
              This moment will be added to your constellation. Take a breath and
              appreciate this small victory.
            </Typography>
          </View>
        </Card>

        <Button
          label="Save Moment"
          variant="primary"
          icon={{ name: "heart", family: "feather" }}
          onPress={handleSave}
        />
      </ScrollView>
    </Screen>
  );
}
