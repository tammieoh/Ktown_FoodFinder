Database Dump File Instructions:
1. Server.js code is located in ktown_server/public folder.
2. Run server on port 5000
3. Must create a schema called “Ktown_finder”
4. Import dump files in folder called “final_dump”
5. If you get a mysql authentication error running the code in terminal...
6. Please copy and paste the following statements into the workbench query
   1. ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password' 
   2. *Change ‘password’ to your mysql database password*
   3. flush privileges;


Project Assumptions:
1. User can either login/logout on the “home” page or on the “restaurants” page
2. You can only add favorites if you sign in to your account. There is no functionality to allow users to delete favorites from their favorites list.
3. On the page where the user fills out the form, you can select any of the options and the algorithm will return a list of restaurants.
   1. If you do not select any options, the next page will return “No results found”.
4. The user will not be pressing the back button on their browser. They either press the buttons that are displayed on the page, such as “Home”, “View Favorites”, “Add to Favorites”, etc.
5. On the desktop, restaurant information cards will flip when you hover the mouse over.
   1. On phones/tablets, user must click in order to flip the card.


Video Presentation:
https://youtu.be/n9Eh9W1DbXA