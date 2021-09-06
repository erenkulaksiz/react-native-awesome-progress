# react-native-awesome-progress

## Getting started

`$ npm install react-native-awesome-progress --save`

## Usage

```js
import Progress from "react-native-awesome-progress";

<Progress value={25} height={24} progressStyle={{ borderRadius: 24 }} />;
```

### Properties

| Prop                 | Description                                   | Default              | Type                                     |
| -------------------- | --------------------------------------------- | -------------------- | ---------------------------------------- |
| **`value`**          | Current value of the progress                 | `0`                  | `integer`                                |
| **`height`**         | Height of progress, only in type 'horizontal' | `24`                 | `integer`                                |
| **`type`**           | Type of progress                              | `"horizontal"`       | `["horizontal", "vertical", "circular"]` |
| **`progressStyle`**  | Style of main progress indicator              | `null`               | `ViewStyle`                              |
| **`innerStyle`**     | Style of background of indicator              | `null`               | `ViewStyle`                              |
| **`containerStyle`** | Style of whole container                      | `null`               | `ViewStyle`                              |
| **`map`**            | Map a input value to another value            | `{min: 0, max: 100}` | `object:{min: integer, max: integer}`    |
