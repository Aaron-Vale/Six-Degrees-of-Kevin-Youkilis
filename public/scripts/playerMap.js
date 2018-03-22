const playerMap = {};
const playerArray = [];

Papa.parse("https://raw.githubusercontent.com/Aaron-Vale/Six-Degrees-of-Kevin-Youkilis/master/player.csv", {
	download: true,
  header: false,
	complete: function(results) {
		for (let i = 0; i < results.data.length; i++) {
			let node = results.data[i];
			let id = node[0];
			let years = `${node[1]} ${node[2]} ${node[3]}-${node[4]}`;

			playerMap[id] = years;
			playerArray.push(years);
		}
	}
});
