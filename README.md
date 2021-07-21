# Project Catwalk

# Overview
Our outdated client-facing retail web-portal must be updated to modern standards in order to avoid harming sales figures. Project Catwalk comprises a redesign of the retail portal and a modernization of the website to ensure the business succeeds.

# Table of Contents
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
    <ol>
      <ul>
        <li> <a href="#Overview">Overview </li>
        <li> <a href="#Table of Contents">Table of Contents</li>
        <li> <a href="#Description">Description </li>
        <li> <a href="#Installation">Installation </li>
        <li> <a href="#Usage">Usage </li>
        <li> <a href="#Team Members">Team Members </li>
      </ul>
    </ol>
</details>

# Description

# Overview
Top-most module on Product Detail Page, divided into several pieces:
## Product Information
  * Star rating
  * Product Category
  * Product Title
  * Price
  * Product Overview
  * Share on Social Media
  * Style Selector
  * Add to Cart
    * Size Selector
    * Quantity Selector

## Ratings & Reviews


## Questions and Answers
* The functionality contained within this module can be divided into several pieces:
    * View questions
    * Search for a question
    * Asking a question
    * Answering a question
* Component Outline
  * Question List
    * Questions and Answers are displayed
  * Questions are ordered by helpfulness
  * All questions by default
  * If no questions exist for product:
* Individual Question
  * Question
  * Answers List
  * Was this question helpful?
  * Add an answer
* Search Questions
  * Search bar
  * Placeholder text
  * If user removes search, list returns to unfiltered state
  * Search works in combination with other filters and sorts
* More Answered Questions
  * If more than two questions have been asked:
  * Button for More Answered Questions at bottom
  * Clicking button shows 2 more questions
  * Button displays at the bottom of all questions
  * Once all questions loaded
  * Button no longer appears
  * Max height of questions fixed to fix all on screen
  * Search bar and buttons fixed outside of list
* Add a Question
  * Your Question
  * What is your nickname
  * Your email
  * Submit question (button)
* Add an Answer Modal
  * Your Question
  * What is your nickname
  * Your email
  * Upload your photos
  * Submit answer (button)

## Related Items and Comparisons
Displays two lists: a list of related products to the one being viewed, and the second will be an outfit list that the user has saved while shopping.
  * Related Products
    * Carousel list of Product Cards
    * Action Button
    * Comparison Modal
  * Your Outfit
    * Carousel list of Product Cards, but only the ones the user selected to be in an outfit
    * Add to Outfit Card


# Installation
1. Clone the repo
   ```sh
   git clone https://github.com/Mount-Doom/project-catwalk
   ```
2. Install NPM packages
   ```sh
   npm install
3. Run NPM start to get Webpack and Server started
   ```sh
   npm start

# Usage
Use this app to browse a certain products through the ecommerce website. Actions include looking at different sytles, selecting different sizes,
leaving a review,asking a question, or responding to one.

# Team Members
* Sumit Patel
* Greg Macat
* Griffin Georgiadis
* Melika Campbell


