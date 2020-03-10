import * as React from 'react'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

declare module "react-native-gesture-handler" {
  export class TouchableNativeFeedback extends React.Component<
    any
    > {}
}