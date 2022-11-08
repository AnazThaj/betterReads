# betterReads - [base-stage]

## TODO

### v0.1

- [x] Add API for fetching books from [OpenLibrary](https://openlibrary.org/dev/docs/api/)
- [x] Search and add books by ISBN
- [ ] Search books by either title, or author, or ISBN
- [ ] Redesign the UI to have a temperory area for search results to be displayed (Should be some sort of overlay above the book display below the search area)
- [ ] Ability to add books by pressing [+] sign at the right column of the book results
- [ ] Books display section for books the user has already added

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
