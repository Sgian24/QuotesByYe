**KANYE QUOTE GENERATOR

A simple quote Kanye generator I made with React. 

Tools Used
    -React using create-react-app 
 
Features
    -click a button to generate a random quote from Kanye
    -responsive
    
Challenges and Lessons Learned
    -quotes were generated from an array instead of data fetching; could've challenged myself to use the fetch API instead
    -had issues figuring out how to fade in new quotes, since the generated quotes are a state re-render only the first quote would fade in; subsequent quotes
    would not fade
        -solved by using a conditional ternary operator and setting the state of "change" on click using the logical NOT operator, when "change" changes from false
        to true and vice versa the className attributes for the quotes (<p>{randomQuote}</P>) gets swapped between 2 selectors with identical styles; thus every newly
        generated quote would fade in everytime the className changes
    -entire app was created from one class component, could've used react hooks instead 
    -ran into issues deploying app to gh-pages since this is my first time building and deploying a react app in VSCode
    -still have trouble understanding package managers and git
       
