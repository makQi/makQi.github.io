# sublime插件

#### Package Control
>包管理器

#### SublimeServer
>localhost 以服务器方式打开网页

#### Terminal
```
从当前文件路径下启动终端 （后台控制台），windows配制如下：
{
    // The command to execute for the terminal, leave blank for the OS default
    // On OS X the terminal can be set to iTerm.sh to execute iTerm
    // "terminal": "C:\\Windows\\System32\\cmd.exe",
    // A list of default parameters to pass to the terminal, this can be
    // overridden by passing the "parameters" key with a list value to the args
    // dict when calling the "open_terminal" or "open_terminal_project_folder"
    // commands
    // "parameters": ["/START", "%CWD%"]
    "terminal": "C:\\Program Files\\Git\\bin\\sh.exe",
    "parameters": ["-c", "cd \"%CWD%\" && \"C:\\Program Files\\Git\\bin\\sh.exe\" -i -l"]
}
```

#### LiveReload
>自动刷新页面插件    
>同时需要chrome浏览器也装上LiveReload插件    
>用户配制 \{ "enabled_plugins": \["SimpleReloadPlugin","SimpleRefresh"\]\}

#### liveStyle
>连接浏览器与编辑器的方式写CSS代码
>同时需要chrome浏览器也装上liveStyle插件

#### Emmet
>html标签连写，Emmet语法

#### SideBarEnhancements
>侧边栏增强工具

#### SublimeLinte
>代码语法检查错误提示

#### SublimeLinter-jshint
>javaScript语法检查   
>注意：需要安装 npm install -g jshint

#### SublimeLinter-csslint
>css语法检查     
>注意：需要安装 npm install -g csslint

#### Bracket​Highlighter
>支架荧光笔，标签高亮效果插件，实现代码括号与各种符号高亮匹配

#### SublimeCodeIntel
>代码智能自动完成补全，同样适用于自己定义的方法、变量

#### Alignment
>代码对齐

#### jquery
>jquery方法补全

#### DocBlockr
>编写文档 注释插件

#### ConvertToUTF8
>编码插件，可自动转成UTF-8

#### HTML-CSS-JS Prettify
>格式化代码（需要安装node）

#### All Autocomplete
>路径自动补全

#### AutoFileName
>自动填充文件名

#### CSSComb
>css属性排序格式化

#### ChineseLocalizations
>语言插件   中文翻译菜单

#### HTMLAttributes
>html属性提示、自动补全

#### nodejs
>node运行插件

#### CSS3
>css3编写插件

#### HTML5
>HTML5编写插件

#### CodeFormatte
>代码格式化

#### MarkdownEditing
>Markdown语法编辑插件

#### Better Completion
>支持Javascript、JQuery、Twitter Bootstrap框架、HTML5标签属性代码提示的插件

#### Material Theme
>主题插件

#### Theme - Soda
>侧边栏主题配色方案   改成   Soda Light 3 白色

#### Seti_UI
>侧边栏图标

#### 设置-用户
```
{
    "color_scheme": "Packages/User/SublimeLinter/brogrammer (SL).tmTheme",
    "font_size": 12.0,
    "ignored_packages":
    [
        "Vintage"
    ],
    "theme": "Seti_orig.sublime-theme",
    "update_check": false,
    "word_wrap": "auto",
    "show_encoding": true,  // 显示文件编码
    "show_line_endings": true   // 显示文件编码
}
```

#### 快捷键
```
| Win          | MAC          | 说明
| ------------ | ------------ | ---
| Ctrl+Shift+P | Cmd+Shift+P  | 打开命令面板
| Ctrl+G       | ===          | 跳转到第几行
| Ctrl+P:<N>   | Cmd+P:<N>    | 跳转到第几行
| Ctrl+M       | ===          | 跳转对应括号
| Ctrl+R       | Cmd+R        | 跳转到对应的方法
| Shift+<上/下> | Cmd+<上/下>   | 定位到文档开头/结尾
| Ctrl+D       | Cmd+D        | 选择单词
| Ctrl+D+Ctrl+K| Cmd+D+Cmd+K  | 跳过选中
| Ctrl+L       | Cmd+L        | 选择行
| Ctrl+Shift+L | Cmd+L(重复)   | 选择多行
| Ctrl+\`      | Cmd+`        | 选择引号内容
| Shift+<左/右> | ===          | 选择左/右
| Ctrl+J       | ===          | 选择标签(光标定位内容选择内容，定位标签选择整个标签)
| ---          | Cmd+Shift+A  | 选择标签内容(光标当前标签)(重复向外扩展)
| Ctrl+Shift+M | Cmd+Shift+M  | 选择当前括号内容，重复可选着括号本身
| Ctrl+Shift+A | ===          | 选择光标之前的内容
| Ctrl+Shift+/ | ---          | 注释已选择内容
| Ctrl+Alt+/   | Cmd+Alt+/    | 块注释
| Ctrl+H       | ---          | 替换
| Ctrl+Shift+<上/下>| ---      | 可以移动此行代码，与上行互换
| Ctrl+F       | Cmd+F        | 当前文档搜索
| Ctrl+Shift+F | Cmd+Shift+F  | 跨文档搜索
| Ctrl+P       | Cmd+P        | 搜索文件
| Ctrl+Alt+<N> | Cmd+Alt+<N>  | 分割窗口(纵向) 1/2/3/4/5
| Ctrl+Alt+Shift+<N>| Cmd+Shift+Alt+<N>| 分割窗口(横向) 2/3
| Ctrl+N       | Cmd+N        | 新建窗口
| Ctrl+K+B     | Cmd+K+B      | 开关侧栏
| Ctrl+Shift+W | Cmd+Shift+W  | 关闭所有文件
| Ctrl+M       | Cmd+M        | 最小化窗口
| Ctrl+F2      | Cmd+F2       | 设置标记
| Ctrl+X       | Cmd+X        | 删除当前行
| Ctrl+Delete  | Cmd+BackSpace| 删除光标前的所有字符
| Shift+F11    |              | 全屏模式
| Ctrl+Alt+<左/右>| Cmd+Alt+<左/右>| tab 面板切换
| Ctrl+Shift+V | Cmd+Shift+V  | 保留格式粘贴
| Ctrl+Alt+V   | Cmd+Alt+V    | 历史复制记录粘贴
| Ctrl+Enter   | Cmd+Enter    | 随意换行
| Ctrl+Shift+Enter| Cmd+Shift+Enter| 在当前行前插入新行
------------------------------------------------------------------------------
 Alt+Shift+1       Single         独屏               
 Alt+Shift+2       Columns:2      纵向二栏分屏        
 Alt+Shift+3       Columns:3      纵向三栏分屏        
 Alt+Shift+4       Columns:4      纵向四栏分屏        

 Alt+Shift+8       Rows:2         横向二栏分屏        
 Alt+Shift+9       Rows:3         横向三栏分屏
 Alt+Shift+5       Grid           四格式分屏

 Cmd + Alt + 1                    纵向分屏
 Cmd + Alt + Shift + 2            纵向分屏
 Cmd + Alt + Shift + 3            纵向分屏
 Alt + Shift + 4                  纵向分屏
```



