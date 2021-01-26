### 安装识别注解代码的插件

1、 `yarn add react-app-rewired customize-cra @babel/plugin-proposal-decorators`
2、 创建 `config-overrides.js` 并加入配置

```
  const { override, addDecoratorsLegacy }  = require('customize-cra')
  module.exports = override(addDecoratorsLegacy())
```

3、 更改 `package.json` 文件的项目启动配置

```
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test"
```

4、 修改 `vscode` 配置 `"javascript.implicitProjectConfig.experimentalDecorators": true`

5、 `yarn add mobx@5.15.4 mobx-react@6.2.2 node-sass@4.12.0`