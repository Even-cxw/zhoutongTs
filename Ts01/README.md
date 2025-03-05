
版本要求：node版本：v18.17.0

### 辅助工具vscode插件下载

Fitten Code 是一个非常好用的vscode插件，可以帮助我们更高效地编写TypeScript代码。
- 安装Fitten Code插件
打开vscode，在左侧扩展商店搜索Fitten Code，安装插件。


### 安装步骤

- 安装 TypeScript 编译器
```bash
npm install -g typescript
```

- 编译指定文件
```
tsc 文件名.ts
```

- 初始化 tsconfig.json 文件
```
tsc --init
```

### tsconfig.json配置规则

当 tsconfig.json 里没有明确指定 include 或者 files 选项时，TypeScript 编译器会默认将 tsconfig.json 文件所在目录及其子目录下的所有 .ts、.tsx 和 .d.ts 文件纳入编译和校验范围。所以，根目录下的所有 .ts 文件都会受到规则校验。

