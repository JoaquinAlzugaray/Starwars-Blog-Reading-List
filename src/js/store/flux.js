const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			character: {},
			planets: [],
			planet: {},
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch('https://swapi.dev/api/people')
				.then((response)=>response.json())
				.then((data)=>setStore({characters: data.results}))
			},
			loadCharacter: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`) // poner parentesis 
				.then((response)=>response.json())
				.then((data)=>setStore({character: data.result}))
			},

			loadPlanets : () => {
				fetch('https://swapi.dev/api/planets')
				.then((response)=>response.json())
				.then((data)=>setStore({planets: data.results}))
			},

			addToFavorites: (id) =>{
				setStore({ favorites: getStore().favorites.concat(id) })
			},

			deleteFavorite: (id) => {
				setStore({favorites: getStore().favorites.filter((item, index) => index !== id)})
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
