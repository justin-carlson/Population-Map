Map = {

	statesData: [],
	statesDict: {},

	init: function(){
		
		Map.statesData = []
		Map.statesDict = {  "Alabama": "al","Alaska": "ak","Arkansas": "ar","Arizona": "az","California": "ca","Colorado": "co","Connecticut": "ct","Delaware": "de","District of Columbia": 'dc',  "Florida": "fl","Georgia": "ga","Hawaii": "hi","Idaho": "id","Illinois": "il","Indiana": "in","Iowa": "ia","Kansas": "ka","Kentucky": "ky","Louisiana": "la","Maine": "me","Maryland": "md","Massachusetts": "ma","Michigan": "mi","Minnesota": "mn","Mississippi": "ms","Missouri": "mo","Montana": "mt","Nebraska": "ne","Nevada": "nv","New Hampshire": "nh","New Jersey": "nj","New Mexico": "nm","New York": "ny","North Carolina": "nc","North Dakota": "nd","Ohio": "oh","Oklahoma": "ok","Oregon": "or","Pennsylvania": "pa","Rhode Island": "ri","South Carolina": "sc","South Dakota": "sd","Tennessee": "tn","Texas": "tx","Utah": "ut","Virginia": "va","Vermont": "vt","Washington State": "wa","West Virginia": "wv","Wisconsin": "wi","Wyoming": "wy" }

		this.getPopulation();
		
	},

	getPopulation: function(){

	  	url = "http://pipes.yahoo.com/pipes/pipe.run?_id=_Ia89ose3BGMZ6YNlvXiAA&_render=json"

	  	$.getJSON( url, function( json ) {
	  		Map.success( json );
	  		
		})
	},

	success: function( json ){

		$( json.value.items ).each(function(){

  			item = this;
  			stateName = item.title;
	 		stateID = Map.statesDict[ stateName ];
	 		statePopulation = item.Census;

	 		stateItem = {
				"id": stateID,
				"population": item.Census
			}

			Map.statesData.push( stateItem );
			Map.styleMap( stateItem );

		})
	},

	styleMap: function ( item ){

		var target = $('#wrapper ul li.' + stateItem.id);

		if( item.population > 19000000 ) {
			target.css("color", '#F50').css("opacity", ".9" )
		}
		if( item.population > 13000000 && item.population < 19000000 ) {
			target.css("color", '#F71').css("opacity", ".8" )
		}
		if( item.population > 10000000 && item.population < 13000000 ) {
			target.css("color", '#F92').css("opacity", ".7" )
		}
		if( item.population > 8000000 && item.population < 10000000 ) {
			target.css("color", '#FA2').css("opacity", ".6" )
		}
		if( item.population > 6000000 && item.population < 8000000 ) {
			target.css("color", '#FB2').css("opacity", ".5" )
		}
		if( item.population > 5000000 && item.population < 6000000 ) {
			target.css("color", '#FC2').css("opacity", ".5" )
		}
		if( item.population > 4000000 && item.population < 5000000 ) {
			target.css("color", '#FD2')
		}
		if( item.population > 3000000 && item.population < 4000000 ) {
			target.css("color", '#FD5')
		}
		if( item.population > 2000000 && item.population < 3000000 ) {
			target.css("color", '#FD6')
		}
		if( item.population > 1000000 && item.population < 2000000 ) {
			target.css("color", '#FE9')
		}
		if( item.population > 700000 && item.population < 1000000 ) {
			target.css("color", '#D3D3D3')
		}
		if( item.population > 600000 && item.population < 700000 ) {
			target.css("color", '#DCDCDC')
		}
		if( item.population > 500000 && item.population < 600000 ) {
			target.css("color", '#E8E8E8')
		}
		if( item.population > 400000 && item.population < 500000 ) {
			target.css("color", '#EDEDED')
		}
	}
};