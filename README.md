# React-cross examples

### combinedfile

Uses AppType and a cross util to keep everything in one file.

Pros:
Components code along side each other - maximum sharing
If you're building components from atoms, no need to choose which to import
Filenames are easy to nav to

Cons:
It only evaluates at run time so you have to bundle all the code including native stuff.


### ignoredfiles

Uses separate files in the same folder

Pros:
Code is next to each other
No silly mock file for react-native
Bundles don't contain extraneous code
Still means you don't need to choose correct import when building components from atoms
No usage of context

Cons:
Filenames are all going to be the same
Silly index file


### separate
