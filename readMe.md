规范约定:
一、命名
    除了类名，所有的（文件名，变量名（系统生成除外）等）命名方式为小驼峰命名法（不懂百度），即monkeyButtonText
二、所有组件，保证组件自身的稳定性和健壮性
    鲁棒性（Robust，即健壮性）：对于规范要求以外的输入情况处理的能力。
    #健壮性的系统#是指，对于规范要求以外的输入能够判断出这个输入不符合规范要求，并能做出合理的处理，保证系统的正常运行。
    比如，一个软件可以从错误的输入推断出正确合理的输入，这属于容错性量度标准，但是也可以认为这个软件是健壮的。
1.package.json,tsconfig.json等配置文件
2.安装常用库的类型库
    2-1:npm install -s @types/react(本地安装ts2.0以上版本，消除引用时出现红线提示)
    2-2:npm install -g typings;
        typings install(需要配置一个typings.json)
3.安装各种loader
4.配置webpack,gulp
5.tsc可以识别并编译tsx等文件中的es6语法，但是无法识别js文件中的es6新语法。
    所以，需要配置新的babel-loader以及babel-preset-es2015和babel-preset-react
6.externals就是为了防止编译外部库的，通过设定外部库的require名字，和库的名字链接在一起，进行识别
    require('jquery);
    'jquery':'jQuery'
    library和libraryTarget可以用来编译打包自己的模块库
    参考资料:https://github.com/zhengweikeng/blog/issues/10
7.gulp-replace-task,gulp-rename,gulp-run-sequence,del
8.https://react-guide.github.io/react-router-cn/参考信息router
9.module-->模块（嘛）
  model-->模型;模特（麻豆）
  modal-->模态（某豆）
10.inline images页内图片，就像将图片转换成base64代码
11.测试git branch合并
12.测试git branch合并
13.测试git branch合并
