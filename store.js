var state = {
			"high": [{
				title: "foo",
				content: "Foo Foo Foo Foo Foo Foo Foo Foo Foo"
			},{
				title: "bar",
				content: "Bar Bar Bar Bar Bar Bar Bar Bar Bar"
			},{
				title: "foo",
				content: "Foo Foo Foo Foo Foo Foo Foo Foo Foo"
			},{
				title: "bar",
				content: "Bar Bar Bar Bar Bar Bar Bar Bar Bar"
			},{
				title: "foo",
				content: "Foo Foo Foo Foo Foo Foo Foo Foo Foo"
			},{
				title: "bar",
				content: "Bar Bar Bar Bar Bar Bar Bar Bar Bar"
			},{
				title: "foo",
				content: "Foo Foo Foo Foo Foo Foo Foo Foo Foo"
			},{
				title: "bar",
				content: "Bar Bar Bar Bar Bar Bar Bar Bar Bar"
			}],
			"medium": [{
				title: "foo",
				content: "Foo Foo Foo Foo Foo Foo Foo Foo Foo"
			},{
				title: "bar",
				content: "Bar Bar Bar Bar Bar Bar Bar Bar Bar"
			},{
				title: "foo",
				content: "Foo Foo Foo Foo Foo Foo Foo Foo Foo"
			},{
				title: "bar",
				content: "Bar Bar Bar Bar Bar Bar Bar Bar Bar"
			},{
				title: "foo",
				content: "Foo Foo Foo Foo Foo Foo Foo Foo Foo"
			},{
				title: "bar",
				content: "Bar Bar Bar Bar Bar Bar Bar Bar Bar"
			}],
			"low": [{
				title: "foo",
				content: "Foo Foo Foo Foo Foo Foo Foo Foo Foo"
			},{
				title: "bar",
				content: "Bar Bar Bar Bar Bar Bar Bar Bar Bar"
			}]
		};

var getters = {
	count: function(state){
		var count = {};
		for(var m in state){
			count[m] = state[m].length;
		}
		return count;
	}
}

var mutations = {
	addMemo: function(state, payload){
		state[payload.severity].push({title: payload.title, content: payload.content});
	},
	delMemo: function(state, type, index){
		state[type].splice(index, 1);
	}
}


var store = new Vuex.Store({
	state,
	getters,
	mutations
});