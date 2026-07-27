/**
 * 样式适配，主要解决不通分辨率设备上展示不一致的问题
 * 方案类似于rem
 * uiWidthPx和 rootValue类似， 根据设计稿尺寸来填写
 * 参考: https://juejin.cn/post/6889339410546950152
 */
import { Dimensions, StyleSheet, ImageStyle, TextStyle, ViewStyle } from "react-native"
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet"

const deviceWidthDp = Dimensions.get("window").width
// 默认设计稿375
const uiWidthPx = 375

export function px2dp(uiElementPx: number) {
  return (uiElementPx * deviceWidthDp) / uiWidthPx
}

function getAdaptorStyle(styles: any) {
  const s = { ...styles }
  // 目前仅对以下的属性进行处理
  const list = [
    "width",
    "height",
    "marginTop",
    "marginBottom",
    "marginLeft",
    "marginRight",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "top",
    "right",
    "bottom",
    "left",
    "fontSize",
    "lineHeight",
    "paddingVertical",
    "paddingHorizontal",
    "marginVertical",
    "marginHorizontal",
    "borderRadius",
    "padding",
    "margin",
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
    "columnGap",
    "rowGap",
  ]
  for (const outKey in s) {
    for (const innerKey in s[outKey]) {
      if (list.includes(innerKey) && typeof s[outKey][innerKey] === "number") {
        s[outKey][innerKey] = px2dp(s[outKey][innerKey])
      }
    }
  }
  return s
}

export type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle }

export interface IAdaptorStyleSheet {
  create<T extends NamedStyles<T> | NamedStyles<any>>(
    // ``` ts
    //     StyleSheet.create({
    //       someComponent: { marginLeft: 1, magrinRight: 1 },
    //     });
    // ```
    styles: T & NamedStyles<any>,
  ): T
  flatten<T>(style?: StyleProp<T>): T extends (infer U)[] ? U : T
}

const AdaptorStyleSheet: IAdaptorStyleSheet = {
  create(style) {
    return StyleSheet.create(getAdaptorStyle(style))
  },
  flatten(style) {
    return StyleSheet.flatten(getAdaptorStyle(style))
  },
}
export default AdaptorStyleSheet
