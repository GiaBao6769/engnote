# ABSTRACT 


## III. HOW TO CONTRIBUTE 


## HOW THIS REPOSITORY WORKS

## SCRIPTS

### HTML

### CSS Stylesheets

### Javascript

### Database

### Json



## Naming convention

## URL Parameters

c - category: in _articles_ and _all_article_

p: article being rendered in _article.html_

per - permission: permissions in _article.html_
    - per=restrict: users can't access the main page (used for people who don't understand how a website works and you don't want them to find out about other things in your page.

    - per=private: no one can read [ ]

    - per=restrict: read but unable to access [x]

### Pathname

### Articles

Articles are written in markdown are stored in _articles_ folder (path: /articles). Markdown files are parsed with the library _marked_.

For the time being, there is no multi-language article.

Standard path name for articles:

Single language article: _**{file_name}.md**_

Multi-language article: _**[language]{file_name}.md**_

Language abbreviation convention:

- English: en
- Vietnamese: vn

For example:

- single language article: *present_simple.md*
- multi-language article: *[en]present_simple.md*, *[vn]present_simple.md*

## Elements in an article

### Metadata

**Metadata** includes these datas:

- **title**
- **description** (optional)
- **upload-date** (optional)
- **update-date** (optional)
- **thumbnail** (optional): path from root 

### Content

#### Quiz

There are currently 3 types of quizzes:

- Mutiple choices

- Fill-in quizzes

- True / False

- Short answers


_If you want to create types of problems involve true, false and not given options, use multiple choices format._


# III. HOW TO CONTRIBUTE 

This repository is completely open-source, you can clone it and use for your own project. If you want to contribute to this, please first contact me via the email address: _hgiabao6729@gmail.com_

