var firebase= require('firebase');
firebase.initializeApp({
serviceAccount:"../Project 1-19507442609b.json",
databaseURL:"https://project-1-6027a.firebaseio.com/"



});


var ref = firebase.database().ref();
var messagesRef=ref.child('messages');

messagesRef.push({
		name: 'Alvin',
		admin: true,
		count: 1,
		text: 'Hey guys'
	
});


//casey APIKey AIzaSyC0sCE1NRxzNky_XCOFxJtgSalg1GPHLzc