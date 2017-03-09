$(document).ready(function() {
	
    $('#example').DataTable( {
    	"processing": true,
        "ajax": '/getpatientdatabyname',
        "columns": [
        
        {"data": "name"},
        	{"data": "firstname"},
            { "data": "lastname"},
            { "data": "age"},
            { "data": "phone"},
            { "data": "birthdate"},
            { "data": "gender"}
            , { "data": "text"}
            
        ],
        "columnDefs": [ 
        { targets: 0, searchable: true },
        { targets: [1,2,3,4,5,6,7], searchable: false }
    ],
        
        
        "deferRender": true,
        "scrollY": 800,
        "scrollX": true,
        "scrollCollapse": true,
        "scroller":  true
    });

} );
