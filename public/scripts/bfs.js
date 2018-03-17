function PriorityQueue () {
  this._nodes = [];

  this.enqueue = function (priority, key) {
    this._nodes.push({key: key, priority: priority });
    this.sort();
  };
  this.dequeue = function () {
    return this._nodes.shift().key;
  };
  this.sort = function () {
    this._nodes.sort(function (a, b) {
      return a.priority - b.priority;
    });
  };
  this.isEmpty = function () {
    return !this._nodes.length;
  };
}

/**
 * Pathfinding starts here
 */
function Graph(){
  var INFINITY = 1/0;
  this.vertices = {};

  this.addVertex = function(name, edge){
    if (!this.vertices[name]) {
      this.vertices[name] = [edge]
    } else {
      this.vertices[name].push(edge);
    }
  };

	this.shortestPath = function (graph, source, target) {
                      // the target.
  var queue = [ source ],
      visited = { source: true },
      predecessor = {},
      tail = 0;
  while (tail < queue.length) {
    var u = queue[tail++],  // Pop a vertex off the queue.
        neighbors = graph.vertices[u];
    for (var i = 0; i < neighbors.length; ++i) {
      var v = neighbors[i];
      if (visited[v]) {
        continue;
      }
      visited[v] = true;
      if (v === target) {   // Check if the path is complete.
        var path = [ v ];   // If so, backtrack through the path.
        while (u !== source) {
          u = predecessor[u];
          path.push(u);
        }
        path.reverse();
        console.log(path.join(' &rarr; '));
        return;
      }
      predecessor[v] = u;
      queue.push(v);
    }
  }
  console.log('there is no path from ' + source + ' to ' + target);
}

  // this.shortestPath = function (start, finish) {
  //   var nodes = new PriorityQueue(),
  //       distances = {},
  //       previous = {},
  //       path = [],
  //       smallest, vertex, neighbor, alt;
  //   for(vertex in this.vertices) {
  //     if(vertex === start) {
  //       distances[vertex] = 0;
  //       nodes.enqueue(0, vertex);
  //     }
  //     else {
  //       distances[vertex] = INFINITY;
  //       nodes.enqueue(INFINITY, vertex);
  //     }
  //
  //     previous[vertex] = null;
  //   }
  //
  //   while(!nodes.isEmpty()) {
  //     smallest = nodes.dequeue();
  //
  //     if(smallest === finish) {
  //       path = [];
  //
  //       while(previous[smallest]) {
  //         path.push(smallest);
  //         smallest = previous[smallest];
  //       }
  //
  //       break;
  //     }
  //
  //     if(!smallest || distances[smallest] === INFINITY){
  //       continue;
  //     }
  //
  //     for(neighbor in this.vertices[smallest]) {
  //       alt = distances[smallest] + this.vertices[smallest][neighbor];
  //
  //       if(alt < distances[neighbor]) {
  //         distances[neighbor] = alt;
  //         previous[neighbor] = smallest;
  //
  //         nodes.enqueue(alt, neighbor);
  //       }
  //     }
  //   }
	// 	console.log(distances)
	// 	console.log(nodes)
  //   return path;
  // };
}

var g = new Graph();


Papa.parse("https://raw.githubusercontent.com/Aaron-Vale/Six-Degrees-of-Kevin-Youkilis/master/data.csv", {
	download: true,
  header: false,
	complete: function(results) {
		for (let i = 0; i < results.data.length; i++) {
      let node = results.data[i];
      let name = node[1];
      let team = `${node[2]} ${node[4]}`;
			if (name && team) {
				g.addVertex(name, team);
				g.addVertex(team, name);
			}


      // if(g.vertices[name]) {
      //   g.addVertex(name, team);
      //
      // }
      // if(!g.vertices[team]) {
      //   g.addVertex(team, name);
      // }
    }
    console.log(g);
    console.log(g.shortestPath(g, 'Andrew Benintendi', 'Dustin Pedroia'));
	}
});
