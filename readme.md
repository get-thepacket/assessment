There are two folders front and assessment.<br>
Front has some front end to it but it isn't working, you can see the code.
<br>
Both folders have a package.json file containing the metadata about the project.

Do those step to set up and run the project assessment (backend)
`cd assessment/`<br>
`npm i`<br>
Let the packages install. Then,<br>

- For connecting the DB, create an .env file and create a variable
  `DB_CONNECTION=database-keylink`<br>
- Database config can be found in db atlas
- after creating this file, run the command
  `npm start`<br>

for front, that is an express app static files are hosted.
`cd front/`<br>
`npm i`<br>
`npm start`<br>
Though it is not working as expected, you can see the code.
