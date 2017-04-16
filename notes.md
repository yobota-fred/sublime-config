# Sublime Text Config: Hows and Whys

<!-- MarkdownTOC -->

- [Install](#install)
- [User Preferences](#user-preferences)
    - [Excluding files from search](#excluding-files-from-search)
- [Selecting](#selecting)
    - [Line](#line)
    - [Tag](#tag)
    - [Brackets](#brackets)
    - [Indentation](#indentation)
    - [Quotes](#quotes)
- [Build systems](#build-systems)
- [Snippets](#snippets)
- [Git](#git)
- [Markdown](#markdown)
- [JavaScript](#javascript)
- [HTML](#html)

<!-- /MarkdownTOC -->

## Install
There are a few system dependencies in here.

* The [Inconsolata][ref:inconsolata] font must be installed to use it
* [GhostText][pkg:ghost-text] requires the corresponding browser extension
* Each linter for SublimeLinter will require the lint executable to be 
    available somewhere on the path - see the docs for each linter for 
    specific instructions


## User Preferences
### Excluding files from search
See _Sublime Text Power User_ section 3.1.6.

* `binary_file_patterns`: Exclude files from Goto Anything, but not from the
    sidebar. Useful for e.g. compiled assets.
* `file_exclude_patterns`: Exclude files from Goto Anything _and_ the sidebar
* `folder_exclude_patterns`: Exclude folders from Goto Anything _and_ the
    sidebar

## Selecting
### Line
<kbd>Ctrl</kbd><kbd>L</kbd> selects the current line

### Tag
<kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>a</kbd> selects the contents of the
current tag when working in HTML/XML/JSX.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Try selecting contents of the current tag</title>
</head>
<body>
    <div class="wrapper">
        <h1>Selectors</h1>
        <ul>
            <li class="item-1">I contain <em>some</em> text.</li>
            <li class="item-2">I contain <em>some</em> text.</li>
            <li class="item-3">I contain <em>some</em> text.</li>
            <li class="item-4">I contain <em>some</em> text.</li>
            <li class="item-5">I contain <em>some</em> text.</li>
        </ul>
    </div>
</body>
</html>
```

### Brackets
<kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>m</kbd> selects the contents of the
current brackets.

```python
whatever = [{"things": [1, sqrt(i)]} for i in range(10)]
```

* <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>space</kbd> selects the contents of the
current region (using [ExpandRegion][pkg:expand-region]).

```python  
class Something:
    def wicked(self):
        self.this = way("comes")

class Another:
    def day(self):
        print(2)
        return "Die Hard"
```

### Indentation
<kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>j</kbd> selects the contents at the
current indentation level.

```python
def decorate(func):
    def wrapped(*args, **kwargs):
        for arg in args:
            for result in func(arg, **kwargs):
                yield result

    return wrapped
```

### Quotes
<kbd>Ctrl</kbd><kbd>'</kbd> selects the contents of the current quotes (using 
[Select Quoted][pkg:select-quoted])


## Build systems
Build systems let you run system commands without leaving Sublime Text. This
may be useful for e.g. running compilation, tests, documentation or some other
Grunt/Gulp-like build task (indeed, could be integrated with a tool such as
Grunt or Gulp) easily. Could even set up to run on save.

To configure create a `.sublime-build` file,. It needs to specify a `cmd`, and there are several optional fields:

* `selector` restricts what scope this build system is appropriate for
* `windows`/`osx`/`linux` allow specifying platform-dependent overrides
* `variants` allow specifying multiple tasks within a single config

Example (open current file in browser if it makes sense):

```json
{
  "cmd" : ["sensible-browser", "${file_name}"],
  "selector": ["text.html.basic", "text.html.markdown.gfm"],
}
```


## Snippets
Snippets speed up writing repetitive boilerplate code. They are written as
simple XML documents. The only required tag is the `<content>`, which is
automatically populated when by the "New Snippet" menu option. Do not delete
the "CDATA" parts - only the contents on line 3. It is usually helpful to
include all the optional tags:

* `<tabTrigger>` is the key sequence that will expand to this snippet when
    <kbd>Tab</kbd> is pressed
* `<scope>` is a comma-separated list of scopes where this snippet can be
    used
* `<description>` is what will appear in the Command Palette

Example (shortcut for rendering <kbd>Ctrl</kbd> in GFM):

```xml
<snippet>
  <content><![CDATA[
<kbd>Ctrl</kbd>
]]></content>
  <tabTrigger>kctrl</tabTrigger>
  <scope>text.html.markdown.gfm</scope>
  <description>&lt;kbd&gt;Ctrl&lt;/kbd&gt;</description>
</snippet>
```

Snippets can also include variables. There are several builtin choices, 
including `$TM_FILENAME` and `$SELECTION`. A full list is available 
[here][ref:snippets]. You can also define your own variables in a 
`.sublime-options` file.

Field markers allow for per-snippet variables - when inserting the snippet you 
can tab through the markers to fill in the values.

Example (to prove what can be achieved):

```xml
<snippet>
  <content><![CDATA[
Current file: $TM_FILENAME
Current file without extension: ${TM_FILENAME/(.*)\.\w+$/$1}
Some variable: ${1:optional default}
That variable, transformed: ${1/^(\w)|(?:_(\w))/(?1\U$1:)(?2 \U$2:)/g}
]]></content>
<!-- output:
Current file: notes.md
Current file without extension: notes
Some variable: my custom field
That variable, transformed: My! Custom! Field!
-->
</snippet>
```


## Git
There are a couple of great packages for Git. [GitGutter][pkg:git-gutter] adds 
symbols for lines added/removed/changed in the gutter (next to line numbers). 

[Sublimerge][pkg:sublimerge] is a paid package that handles 2- and 3-way diffs/
merges from within Sublime. It integrates well with Git, allowing you to view 
history and changes made.


## Markdown
[MarkdownEditing][pkg:markdown-editing] comes with some great extras for 
writing in Markdown. Notable features include syntax highlighting inside 
fenced code blocks, automatic pairing for bold/italic, smarter list 
management, and some handy keyboard shortcuts.

However it does come with some strongly opinionated default settings, which
require overriding, such as using <kbd>Shift</kbd> <kbd>Tab</kbd> to collapse
scope.

[MarkdownTOC][pkg:markdown-toc] automatically maintains a table of contents in 
your Markdown document.

## JavaScript
[Tern for Sublime][pkg:tern-for-sublime] uses tern.js, a code analysis 
library. This enables features such as autocomplete, go to definition, and 
tooltip documentation.

## HTML
[Emmet][pkg:emmet] provides smart expansion for tags. Most of the common 
behaviour matches up with CSS selectors, such as using `>` for direct 
children. To expand using Emmet, use <kbd>Ctrl</kbd>+<kbd>E</kbd>. To wrap 
existing text in a tag, use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd>. 
This can be used in conjunction with multiple carets to achieve some very 
powerful transformations in just a few keystrokes.

[pkg:select-quoted]: https://github.com/int3h/SublimeSelectQuoted
[pkg:expand-region]: https://github.com/aronwoost/sublime-expand-region
[ref:snippets]: http://docs.sublimetext.info/en/latest/extensibility/snippets.html#environment-variables
[pkg:git-gutter]: https://github.com/jisaacks/GitGutter
[pkg:sublimerge]: http://www.sublimerge.com/sm3/
[pkg:markdown-editing]: https://github.com/SublimeText-Markdown/MarkdownEditing
[pkg:tern-for-sublime]: https://github.com/ternjs/tern_for_sublime
[pkg:emmet]: https://github.com/sergeche/emmet-sublime
[ref:inconsolata]: https://fonts.google.com/specimen/Inconsolata
[pkg:ghost-text]: https://github.com/GhostText/GhostText
