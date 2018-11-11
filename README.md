# Zeplin Master Symbol Name Extension

Display the original Master Symbol names of components from UI libs.

Example:
![example screenshot](https://github.com/wix-incubator/zeplin-master-symbol-name-extension/blob/master/readme-example.png)

Sample output:
```js
Component:
  05 Button / 5.1 Button / 5.1 + Medium (Default)
```

___Note:___ _This extension was written with Sketch in mind, but should be compatible with other design tools._


## The Problem

An application developer has no way of knowing how the Zeplin design relates to existing UI libs used accross the company.

## Use Case

At Wix we have in-house UI libs, e.g. [wix-style-react](https://wix-wix-style-react.surge.sh/), which are comprised of large sets of Sketch symbols and their corresponding implementation as React Components.

A common workflow at Wix is as follows:

* A designer uses Sketch symbols from a UI lib to design application screens
* Sketch file is then exported to Zeplin
* A developer gets a link to Zeplin as part of the development task

__This extension maps the Zeplin layers to symbol names, giving the developer a quick reference to the UI lib.__

## Development

Master Symbol Name extension is developed using [zem](https://github.com/zeplin/zem), Zeplin Extension Manager. zem is a command line tool that lets you quickly create and test extensions.

To learn more about zem, [see documentation](https://github.com/zeplin/zem).
