function Graph() {
  this.nodes = [];
  this.graph = {};
  this.end = null;
  this.start = null;
}

Graph.prototype.reset = function() {
  for (var i = 0; i < this.nodes.length; i++) {
    this.nodes[i].searched = false;
    this.nodes[i].parent = null;
  }
}

Graph.prototype.setStart = function(node) {
  this.start = this.graph[node];
  return this.start;
}

Graph.prototype.setEnd = function(node) {
  this.end = this.graph[node];
  return this.end;
}


Graph.prototype.addNode = function(n) {
  // Node into array
  this.nodes.push(n);
  var title = n.value;
  // Node into "hash"
  this.graph[title] = n;
}

Graph.prototype.getNode = function(node) {
  var n = this.graph[node];
  return n;
}

Graph.prototype.shortestPath = function (start, finish) {
	this.start = start;
	this.end = finish;
	var queue = [];


	this.start.searched = true;
	queue.push(this.start);

	while (queue.length > 0) {
		var current = queue.shift();
		if (current === finish) {
			console.log("Found " + current.value);
			break;
		}
		var edges = current.edges;
		if (edges) {

			for (var i = 0; i < edges.length; i++) {
				var neighbor = edges[i];
				if (!neighbor.searched) {
					neighbor.searched = true;
					neighbor.parent = current;
					queue.push(neighbor);
				}
			}
		}
	}

	var path = [];
	path.push(finish);
	var next = finish.parent;
	while (next != null) {
		path.push(next);
		next = next.parent;
	}


	return path
};


function Node(value) {
  this.value = value;
  this.edges = [];
  this.searched = false;
  this.parent = null;
}

Node.prototype.addEdge = function(neighbor) {
  this.edges.push(neighbor);
  // Both directions!
  neighbor.edges.push(this);
}

var g = new Graph();

Papa.parse("https://raw.githubusercontent.com/Aaron-Vale/Six-Degrees-of-Kevin-Youkilis/master/data.csv", {
	download: true,
  header: false,
	complete: function(results) {

		for (var i = 0; i < results.data.length; i++) {
		  let node = results.data[i];
      let id = node[0];
      let team = `${node[2]} ${node[4]}`;
			let playerNode;
			let teamNode;
			if (!g.getNode(id)) {
				playerNode = new Node(id);
				g.addNode(playerNode);
			} else {
				playerNode = g.getNode(id);
			}
			if (!g.getNode(team)) {
				teamNode = new Node(team);
				g.addNode(teamNode);
			} else {
				teamNode = g.getNode(team);
			}

			teamNode.addEdge(playerNode);

    }
    console.log(g)
	}
});
