# betterReads - [base-stage]

## TODO

- [x] Basic UI design
- [ ] Display, add, and remove books

## Update for v0.1

- Add books by ISBN which fetch the data from OpenLibrary API
- Title and author fields have been removed

## Base Version

This base version of the book app has THREE basic functionalities.

1. Add book
2. Display books
3. Remove books

Additionally, to keep the records persistent, the records will be stored and updated locally.

### Structure

- Files:
  1. index.html
  2. main.js

#### index.html

- Three sections

  1. header
  2. input
  3. results

- main.js
  1. 3 classes
     1. Book constructor
     2. UI class
     3. Storage class
  2. 3 events
     1. add book
     2. display books
     3. remove books
  3. Storage - 'books'
