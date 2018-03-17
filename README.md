# Baseball Hack Day Boston 2018

We will be using [Lahman's Baseball Database](http://www.seanlahman.com/baseball-archive/statistics)

## What we did
* Learned `VLOOKUP` to pull in all the relevant data into our dataset--in this case, Player full name, Team full name, and year
* Our dataset includes the following columns:

| playerID	| playerName | 	yearID	| teamID	| team
* We used `Papa Parser` to parse the CSV into a javascript-readable format
* We used a stock Djikstra implementation to create a graph data structure storing player and team data over time, then traversed the graph to 
* The form on the front-end captures user input, calls the graph, then outputs the resulting connection between two players

## Resources
* [Papa Parse](https://www.papaparse.com/)
* [Dijstkra]()
* [Lahman's Baseball Database - Player, Team and Salary files](http://www.seanlahman.com/baseball-archive/statistics)


## TODO
* Typeahead search for player names
* Form validation
