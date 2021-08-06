# Project Catwalk

# Project Overview
Our outdated client-facing retail web-portal must be updated to modern standards in order to avoid harming sales figures. Project Catwalk comprises a redesign of the retail portal and a modernization of the website to ensure the business succeeds.


# Table of Contents
<details open="open">
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
## Overview
Top-most module on Product Detail Page, divided into several pieces:
### Product Information
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
* Review list (1.2.1)
  * Display all reviews in tile of standard size
  * Only display  2 tiles at a time with a More Reviews button, 2 or less = no button
  * Button will display two more
  * Cap number of displayed reviews to size of a screen
  * If no reviews on;y display button with new review
* Individual tile (1.2.2)
  * Star rating - solid and outline starts total of 5
  * Average rating should display number with stars appropriately colored in
  * Date - “Month DD, YYYY”
  * Review summary - at least one sentence summary and capped at 60 characters, review title bold
  * Review body
    * Can submit text or images
    * Text - 50-1000
    * Up to 5 images
    * First 250 characters should display after hide, show more button
    * Images appear as thumb nails below text
  * Recommended - text “I recommend this product and check mark” or display nothing if user does not recommend it
  * Reviewer name - display username and a verified purchaser if email is associate with account
  * Response to Review - response should be below review name (only sales team), “Response from seller”
  * Rating Helpfulness - at button of review has yes or no if review was helpful, user does not need to be logged in, one submission per user (use cookies)
* Sort Options (1.2.3)
  * Options to sort include
    * Helpful
    * Newest
    * Relevant
  * Relevant is default
  * Changing will always refresh list
* Rating Breakdown (1.2.4)
  * Breakdown will double as filtering options
  * Rating summary (1.2.4.1)
    * Top of break down will display average rating
    * Start and number format
    * Number of reviews should be displayed
  * Breakdown (1.2.4.2)
    * Will appear below average rating
    * 5 bars for each star
    * To left start count in #, to right number of rating per that start
    * Bar will be green (the % of that review) and grey
    * Bar represents total number of reviews and bar is percentage
    * Click on that star/bar rating will filter rating with that number
    * Hovering will change background color
    * If one start reviews is selected at then two then both one a two will be selected
  * Recommendations (1.2.4.3)
    * Percent that recommend it will be displayed
* Product Breakdown (1.2.5)
  * Will have 1-5 (too small to too big) for size or quality (great - poor)
  * Appear as grey bar
  * Above state characteristic
* Write New Review (1.2.6)
  * Button at bottom of ratings and reviews
  * Should have form with “write your review about [product name]”
  * Mandatory to fill should have asterisks
  * 5 selectable start icons for rating*
  * Recommend this product yes or no*
  * Characteristics more detail look at chart*
  * Review summary input text to 60 char
  * Review body * up to a 100 char
  * Upload photos button to appear as img icon
  * What is your nick name*
  * email *
  * Submit button error if field are not filled out

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
  ### Related Products
    * Carousel list of Product Cards
    * Action Button
    * Comparison Modal
  ### Your Outfit
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


