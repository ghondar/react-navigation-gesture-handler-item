type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

declare module 'react-native-gesture-handler' {
  /* eslint-disable no-undef */
  export class TouchableNativeFeedback extends React.Component<any, any> {}
}
