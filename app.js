
var HeaderBar = Vue.extend({
  template: `<nav class="navbar navbar-dark bg-primary bg-faded">
	  	<a class="navbar-brand" href="#">Memo</a>
    	<button class="btn btn-outline-success pull-xs-right" type="submit" data-toggle="modal" data-target="#createModal">Create</button>
	</nav>
	`
});


Vue.component('header-bar', HeaderBar);

var SideBar = Vue.extend({
	computed: Vuex.mapGetters([
    	'count'
  	]),
  	filters: {
    	capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  	},
  	template: `
  		<div class="col-md-3">
  			<div class="list-group" >
  				
  				<router-link v-for="(val ,key) in count" v-bind:to="key" activeClass="active" class="list-group-item list-group-item-action" >
  					<span class="tag tag-default tag-pill pull-xs-right">{{val}}</span>
  					{{ key|capitalize }}

			</div>
  		</div>
  	`
});


Vue.component('side-bar', SideBar);

var MainContent = Vue.extend({
	methods: Vuex.mapMutations([
    	"delMemo"
  	]),
  	
  	template: `<div class="col-md-9" >
  				<div class="col-md-4" v-for="(val, index) in $store.state[$route.params.severity]">
  					
	  			<div class="card-block card">
	  				<button type="button" class="close" aria-label="Close" @click="delMemo($route.params.severity, index)">
			          	<span aria-hidden="true">&times;</span>
			        </button>
			      <h4 class="card-title">{{val.title}}</h4>
			      <p class="card-text">{{val.content}}</p>
			    </div>
  		</div>

  	</div>`
});


Vue.component('main-content', MainContent);


const routes = [
  {
      path: '/:severity',
      name: 'main',
      component: MainContent,
      beforeEnter: (to, from, next) => {
      	if(to.path === '/high' || to.path === '/medium' || to.path === '/low'){

        	next();
        }
      }
    }
]
const router = new VueRouter({
  	routes // short for routes: routes
});

var app = new Vue({
	el: "#app",
	router,
	computed: Vuex.mapGetters([
    	'count'
  	]),
  	store,
  	methods: {
  		addMemo: function(){

  			store.commit('addMemo', this.newMemo)

  			this.newMemo = {
  				title: '',
  				content: '',
  				severity: 'low'
  			}
  		}
  	},
  	data: {
  		newMemo : {
  			title: '',
  			content: '',
  			severity: 'low'
  		}
  	}
});
