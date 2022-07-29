# Viking_Game
Viking Game for Group Project

Hello, I am putting the instructions from Nick's slack messages so we can references them easily while working in vscode or
if we feel we need to take a peek at what the instructions while on github.
Also, slack won't let you see the previous messages if too many messages are made if you don't have premium account so I want
to have them somewhere I know they won't be deleted.

※※※※※※※※※※※※VIKING GAME INSTRUCTIONS※※※※※※※※※※※※※※※※※※※

//※※※※※1st Iteration※※※※※

With your vikings js file linked, you can now use all the functions in your vikings file in the new empty file.
Now, in the new empty file, make a function that show the result of the showStatus function somewhere on the page 
so that when we go to the html page, we can see the status of the war.  You'll need to create a new war in order to 
print out the status


//※※※※※2nd Iteration※※※※※

Now, find an image on google for your vikings, and one for your saxons and save them into your project folder. Create 
a new war if you haven't already and create 5 new vikings and 5 saxons. Add the 5 vikings to the viiking army and the 
saxons to the Saxon army. Show an image for each soldier and above each solder, show their health and strength on the 
page.  For the vikings, show their names as well, for the saxons, just show the word "Saxon" above each one (edited) 
Style it however you want. But styling matters this time.

By now you should have a html page with 5 vikings and 5 saxons displaying their names and strengths,
You should have used your war class to create a war, and added your vikings and saxons to your war’s armies.


//※※※※※3rd Iteration※※※※※

Create a button in the middle of the page. It should say “Viking Attack” When you click this button, one of vikings 
(a random viking) should attack one of the saxons (a random Saxon) The user should be able to see the damage reflected 
in the victim’s health points

//※※※※※4rd Iteration※※※※※

After the vikings attack the saxons, the button should switch to say “Saxon Attack” and when clicked, it should run the 
saxonAttack method, attacking a random viking with a random Saxon the button should switch back and forth every turn
After each turn, the status of the war should update at the top of the page.


//※※※※※5th Iteration※※※※※

The next step is to make our game a bit more customizable for the user lets start out with no vikings or saxons in the armies
add a little input form for the user to create vikings and saxons and add them to the armies. The form should start out as a place 
to create vikings, and should have a place to input the name, health, and strength.  When the user clicks the button, the viking 
should be created, added to the army, and it should then appear on the page once the user creates 5 vikings, the form should switch 
to be a saxon creation form, and there should only be 2 inputs, 1 for health and 1 for strength. Once the user creates 5 vikings and 5
saxons, only then should the attack button appear and the status of the war should print out.
