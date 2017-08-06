# sublime插件

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

#### SublimeCodeIntel
>代码智能自动完成补全，同样适用于自己定义的方法、变量

#### AutoFileName
>自动填充文件名

#### jquery
>jquery方法补全

#### ConvertToUTF8
>编码插件可自动把GBK转成UTF-8

#### SideBarEnhancements
>侧边栏增强工具

#### HTML-CSS-JS Prettify
>格式化代码（需要安装node）

#### CodeFormatte
>代码格式化

#### Bracket Highlighter
>支架荧光笔

#### Alignment
>代码对齐

#### All Autocomplete
>路径自动补全

#### HTMLAttributes
>html属性提示、自动补全

#### ChineseLocalizations
>语言插件   中文翻译菜单

#### DocBlockr
>编写文档 注释插件

#### Better Completion
>支持Javascript、JQuery、Twitter Bootstrap框架、HTML5标签属性提示的插件

#### MarkdownEditing
>Markdown语法编辑插件

#### CSSComb
>css属性排序格式化

#### SublimeLinte
>代码语法检查错误提示

#### SublimeLinter-jshint
>javaScript语法检查   
>注意：需要安装 npm install -g jshint

#### SublimeLinter-csslint
>css语法检查
>注意：需要安装 npm install -g csslint

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





