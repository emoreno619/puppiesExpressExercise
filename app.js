var express = require("express")
var app = express();

app.set("view engine", "ejs")
app.use("/styles",express.static(__dirname + "/styles"));


var pupArr = []
var id = 1

app.get("/", function(req,res){

	res.render("./sites/index", {pupArrEJS: pupArr})

})

app.get("/puppies/new", function(req,res){
	res.render("./puppies/new")
})

app.get("/puppies", function(req,res){
	var aPuppy = {}
	aPuppy.name = req.query.pupName
	aPuppy.breed = req.query.pupBreed
	aPuppy.age = req.query.pupAge
	aPuppy.id = id
	aPuppy.pic = req.query.pupPic

	id++
	pupArr.push(aPuppy)
	res.redirect("/")
})

app.get("/puppies/:id", function(req,res){
	var id = Number(req.params.id)

	if(id <= pupArr.length && id > 0){
		var anotherPup = pupArr[id-1]
		res.render("./puppies/puppies",{singlePup : anotherPup})
	} else {
		res.redirect("/")
	}

})

app.get("/about", function(req,res){

})

app.get("/contact", function(req,res){

})

app.listen(3000, function(){
	console.log("Server starting on port 3000")
})