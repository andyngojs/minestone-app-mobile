import { LANGUAGES, LANGUAGE_CODE } from "../i18n.constant";
import en_common from "./en/common.json";
import en_theme from "./en/theme.json";

export default {
  [LANGUAGES[LANGUAGE_CODE.EN].VALUE]: {
    common: en_common,
    theme: en_theme,
  },
};
