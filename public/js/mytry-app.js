(function () {
    'use strict';
    
    var content = document.querySelector('main');
    
    var app = {
        
        launcher: function (){
            routes.init();
        }
    };
    
    var routes = {
        
        init: function (){
            
            routie ({
                
                'feed': function (){
                    sections.feed();
                },
                
                'detail/:id': function (id){
                    sections.detail(id);
                }
            })
        }
    };
    
    var api = {
        
        call: function(url) {

			return new Promise(function(resolve, reject) {

				var request = new XMLHttpRequest();

				request.onloadend = function(response) {

					var data = request.response;
					resolve(data);					

				}

				request.onerror = reject;

				request.open('GET', url, true);
				request.send();

			});

		}
    };
    
    var apiCall = function (response, reject) {
        
        var request = new XMLHttpRequest();
        
    }
})