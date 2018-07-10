;(function(){
	window.ms = {
		set: set,             //localStorage的封装
		get: get,
	};
	
	function set(key,val){
		localStorage.setItem(key,JSON.stringify(val));
		
	}
	
	function get(key){
		var json=localStorage.getItem(key);
		if(json){
			return JSON.parse(json);
		}
	}
})();
//自存自取
//ms.set('name','喵喵喵');
//var name=ms.get('name');
//console.log('name:',name)
