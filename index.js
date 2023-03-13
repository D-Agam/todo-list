const express=require("express");
const bodyParser=require("body-parser");
const app=express();
var items=[];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
    let today=new Date();
    let options={
        weekday:"long",
        day:"numeric",
        month:"long",
    };
    let day=today.toLocaleDateString("en-US",options);
    
        res.render("list",{ kindofday:day,items:items});
    
});
app.post("/",function(request,respond)
{
    var item=request.body.task;
    console.log(item.length);
    if(item.length!=0)
    {
        items.push(item);
        respond.redirect("/");
    }
});

 app.listen(process.env.PORT || 3000,function()
 {
    console.log("Server started");
 });