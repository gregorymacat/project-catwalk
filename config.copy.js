/*
  - Copy this file and rename it config.js (this is in the gitignore)
  - Delete this file and do the work below

  Github Personal Access Token should have...
    read:org
    user (everything)
*/
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rfe/';
const GITHUBTOKEN = 'FILL_ME_IN';

module.exports = {
  url: url,
  API_KEY: GITHUBTOKEN
}