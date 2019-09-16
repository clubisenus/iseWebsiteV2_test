ISE Club Website running on:    
React-Redux for global state    
Material-UI for easy modular components 
react-router-dom for page navigation    

Git clone   
```yarn``` in terminal to download dependencies     
```yarn start``` to host local    
Ideally test on a testing repo in between these two steps,maybe by pushing the code to your own github repo?      
```yarn deploy``` to push to actual page (pls don't anyhow push without testing, it might break things)   


Notes:  
1) When uploading images to /resources/images, update images.js imports and exports

1) When adding new links, add to pageLinks.js and use the pageLinks object to access it

1) To create a new page, save _PageTemplate as a new file, update pageLinks.js link object and index.js routing

1) Still a work in progress so please be nice

package.json homepage field must be changed to hosting domain   
i.e : https://user.github.io/repo for test   
https://nusiseclub.com for deploy
