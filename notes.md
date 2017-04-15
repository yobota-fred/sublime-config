# Sublime Text Config: Hows and Whys

## User Preferences
### Excluding files from search
See _Sublime Text Power User_ section 3.1.6.

* `binary_file_patterns`: Exclude files from Goto Anything, but not from the
    sidebar. Useful for e.g. compiled assets.
* `file_exclude_patterns`: Exclude files from Goto Anything _and_ the sidebar
* `folder_exclude_patterns`: Exclude folders from Goto Anything _and_ the
    sidebar

## Selecting
* <kbd>Ctrl</kbd><kbd>L</kbd> selects the current line
* <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>a</kbd> selects the contents of the
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

* <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>m</kbd> selects the contents of the
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

* <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>j</kbd> selects the contents at the
    current indentation level.

    ```python
    def decorate(func):
        def wrapped(*args, **kwargs):
            for arg in args:
                for result in func(arg, **kwargs):
                    yield result

        return wrapped
    ```

* <kbd>Ctrl</kbd><kbd>'</kbd> selects the contents of the current quotes (using [Select Quoted][pkg:select-quoted])


## Markdown
MarkdownEditing comes with some great extras for writing in Markdown. Notable
features include syntax highlighting inside fenced code blocks, automatic
pairing for bold/italic, smarter list management, and some handy keyboard
shortcuts.

However it does come with some strongly opinionated default settings, which
require overriding, such as using <kbd>Shift</kbd> <kbd>Tab</kbd> to collapse
scope.

## JavaScript
Tern for Sublime uses tern.js, a code analysis library. This enables features
such as autocomplete, go to definition, and tooltip documentation.

## HTML
Emmet provides smart expansion for tags. Most of the common behaviour matches
up with CSS selectors, such as using `>` for direct children. To expand using
Emmet, use <kbd>Ctrl</kbd>+<kbd>E</kbd>. To wrap existing text in a tag, use
<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd>. This can be used in conjunction
with multiple carets to achieve some very powerful transformations in just a
few keystrokes.

[pkg:select-quoted]: https://github.com/int3h/SublimeSelectQuoted
[pkg:expand-region]: https://github.com/aronwoost/sublime-expand-region
