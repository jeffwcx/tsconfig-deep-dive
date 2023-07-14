# Projects

## composite, incremental, declaration

`composite`开启后，`incremental`增量编译自动开启，**不能关闭**, `declaration`也自动开启，**不能关闭**

## disableReferencedProjectLoad, disableSolutionSearching, disableSourceOfProjectReferenceRedirect
这三个选项作用于大型 `composite`项目，主要是提高性能

disableSourceOfProjectReferenceRedirect: Disable preferring source files instead of declaration files when referencing composite projects

disableSolutionSearching: Opt a project out of multi-project reference checking when editing.

disableReferencedProjectLoad: Reduce the number of projects loaded automatically by TypeScript.

