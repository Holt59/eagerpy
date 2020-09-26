(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{367:function(e,t,a){"use strict";a.r(t);var n=a(42),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[e._v("#")]),e._v(" Development")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("The following is only necessary if you want to contribute features\nto EagerPy. As a user of EagerPy, you can just do a normal\n"),a("a",{attrs:{href:"./getting-started"}},[e._v("installation")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("First clone the repsository using "),a("code",[e._v("git")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/jonasrauber/eagerpy\n")])])]),a("p",[e._v("You can then do an editable installation using "),a("code",[e._v("pip -e")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" eagerpy\npip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -e "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Create a new branch for each new feature or contribution.\nThis will be necessary to open a pull request later.")])]),e._v(" "),a("h2",{attrs:{id:"coding-style"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coding-style"}},[e._v("#")]),e._v(" Coding Style")]),e._v(" "),a("p",[e._v("We follow the "),a("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0008/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PEP 8 Style Guide for Python Code"),a("OutboundLink")],1),e._v(".\nWe use "),a("a",{attrs:{href:"https://github.com/psf/black",target:"_blank",rel:"noopener noreferrer"}},[e._v("black"),a("OutboundLink")],1),e._v(" for automatic code formatting.\nIn addition, we use "),a("a",{attrs:{href:"https://flake8.pycqa.org/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("flake8"),a("OutboundLink")],1),e._v(" to detect\ncertain PEP 8 violations.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Have a look at the "),a("code",[e._v("Makefile")]),e._v(". It contains many useful commands, e.g. "),a("code",[e._v("make black")]),e._v(" or "),a("code",[e._v("make flake8")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"type-annotions-and-mypy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-annotions-and-mypy"}},[e._v("#")]),e._v(" Type annotions and MyPy")]),e._v(" "),a("p",[e._v("EagerPy uses Python type annotations introduced in "),a("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0484/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PEP 484"),a("OutboundLink")],1),e._v(".\nWe use "),a("a",{attrs:{href:"http://mypy-lang.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("mypy"),a("OutboundLink")],1),e._v(" for static type checking with relatively\nstrict settings. All code in EagerPy has to be type annotated.")]),e._v(" "),a("p",[e._v("We recommend to run MyPy or a comparable type checker automatically in your\neditor (e.g. VIM) or IDE (e.g. PyCharm). You can also run MyPy from the\ncommand line:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" mypy  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# run this in the root folder that contains the Makefile")]),e._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[a("code",[e._v("__init__")]),e._v(" methods should not have return type annotations unless\nthey have no type annotated arguments (i.e. only "),a("code",[e._v("self")]),e._v("), in which case\nthe return type of "),a("code",[e._v("__init__")]),e._v(" should be specifed as "),a("code",[e._v("None")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"creating-a-pull-request-on-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-pull-request-on-github"}},[e._v("#")]),e._v(" Creating a pull request on GitHub")]),e._v(" "),a("p",[e._v("First, fork the "),a("a",{attrs:{href:"https://github.com/jonasrauber/eagerpy",target:"_blank",rel:"noopener noreferrer"}},[e._v("EagerPy repository on GitHub"),a("OutboundLink")],1),e._v(".\nThen, add the fork to your local GitHub repository:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" fork https://github.com/YOUR USERNAME/eagerpy\n")])])]),a("p",[e._v("Finally, push your new branch to GitHub and open a pull request.")]),e._v(" "),a("h2",{attrs:{id:"release-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-process"}},[e._v("#")]),e._v(" Release Process")]),e._v(" "),a("p",[e._v("EagerPy currently follows a rapid release process. Whenever non-trivial\nchanges have been made, the documentation and tests have been updated,\nand all tests pass, a new version can be released. To reduce the barrier,\nthis is simply done by creating a new release on GitHub. This automatically\ntriggers a "),a("a",{attrs:{href:"https://github.com/jonasrauber/eagerpy/actions",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Action"),a("OutboundLink")],1),e._v("\nthat builds the package and publishes the new version on the Python Package\nIndex "),a("a",{attrs:{href:"https://pypi.org/project/eagerpy/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PyPI"),a("OutboundLink")],1),e._v(". The latest version can\nthus be simply installed using "),a("code",[e._v("pip")]),e._v(":")])])}),[],!1,null,null,null);t.default=s.exports}}]);