## 为什么要引入 husky?

虽然我们项目中引入了`prettier`和`eslint`对代码格式进行了校验,但是多人开发的时候难免依然会有人提交不符合规范的代码到仓库中,如果我们拉取到这种代码还得慢慢对其进行修改,这是一件很麻烦的事情。因此我们可以引入 husky 来从源头上解决此类问题。简单来说,husky 可以在我们提交代码之前校验我们的代码是否符合我们配置的规范,如果不符合则禁止提交。接下来就让我们看一下 husky 的具体使用吧!

## husky 的使用

首先安装

```
pnpm i husky -D -w
```

在 package.json 中 scripts 中设置 prepare 钩子:`husky install`,在使用`pnpm install`的时候就会自动执行`husky`,以便于别人拉取完我们代码进行`pnpm insall`的时候直接进行`husky install`。我们可以使用命令

```
pnpm pkg set scripts.prepare="husky install"
```

或者你也可以手动添加

```js

 "scripts": {
    ...
    "prepare": "husky install"
  },
```

因为我们没有执行`pnpm install`,所以要先执行一下

```
npx husky install
```

然后添加一个 commit 钩子文件

```
npx husky add .husky/pre-commit "npm run xxx"
```

然后我们就会发现根目录出现了.husky/pre-commit 文件,我们修改一下 commit 之前的命令,让其提交之前先进行 lint 校验

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm run lint:script
pnpm run lint:style
```

修改一个不复合 eslint 的规范文件,然后进行提交试一下
