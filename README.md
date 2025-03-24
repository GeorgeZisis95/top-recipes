# Generic Website

This is a generic website for testing my HTML and CSS skills. The website is going to be a recipe page. 

## What will the project layout be:

### Main Page

To better navigate each page I will break it down into rows. For the main page we will create:

- Navigation bar: contains title and four buttons.

- Introduction row: contains a background picture and a paragraph that gives a cool introduction about the page. 

- Links to three recipes: This links are in the same row and appear as squares with a picture inside each square. 

- Footer: Contains some simple text. Maybe I won't include it we will see.

### Recipe Page

Each recipe page will include:

- First row will contain a small paragraph with the recipe's title and a brief description as well as a photo of the recipe to the right. 

- Second row will have to the left the ingredient and to the right the way to use all these ingredients. 

- I might add a third row kinda like an epilogue for how delicious the recipe will be.

## Issues Encountered: 

When I set the position:fixed so that the navbar remains at the top of the page while scrolling, it covers the start of the next row. 
Even if I use a padding top value for the introduction, it still covers it up when I change the size of the page. 

## Workflow: 

### Introduction

Okay the background image looks better if not blurred so I want to just blur the part that contains the text -> Done
The text right now appears after the image but I want it inside the image -> Done
I might make the text change on hover with ::after. -> Done

### Links
For the links I'm thinking the box should show an image and when I hove the image it blurs and shows the food title