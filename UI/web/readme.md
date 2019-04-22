# web端标准页面模板使用介绍

此文件夹内文件为web端标准页面文件，引用UI框架为bootstrap。因angular项目中已自动集成了schematics工具，所以可直接替换对应文件夹下模版文件即可生成想要的标准页面代码。

## 具体使用步骤：

### 1、复制本项目中UI文件夹下想要生成标准页面对应名称的文件夹内容（四个文件，名称以__name@dasherize__.component开头），打开目标项目文件中路径：node_modules\@schematics\angular\component\files，直接替换覆盖。

### 2、在命令提示符中，cd到目标项目中想要生成标准页面代码的文件夹内，输入：ng g component 想要生成的组件名称，即可生成标准页面代码。

    注：目前该功能只提供了三种标准代码：list、edit、check，后期有时间会提供更多标准页面代码及将模版与命令关联。

    声明：虽bootstrap框架对移动端自适应度很优秀，但该模版并未在移动端进行相关调试，建议目前在web端使用。
