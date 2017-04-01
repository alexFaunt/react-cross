# React-cross examples

### combinedfile

Uses AppType and a cross util to keep everything in one file.

Pros:
Components all in one file - max code sharing
If you're building components from atoms, no need to choose which to import

Cons:
It only evaluates at run time so you have to bundle all the code including native stuff.
Got to mock file for react-native


### ignoredfiles

Uses separate files in the same folder

Pros:
No need for mock file for react-native
Bundles don't contain extraneous code
Still means you don't need to choose correct import when building components from atoms
No usage of context

Cons:
harder to reuse code in separate files

### separate

Uses separate files and a create file to share structure

Pros:
Allows native and web to diverge
Bundles don't contain extraneous code
No usage of context

Cons:
Filenames are all going to be the same
When using create the native/web files are kinda useless
harder to reuse code in separate files
Need to distinguish imports
