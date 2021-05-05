const express =require("express");
const app=express();
const port=process.env.PORT||1111;
const path=require("path");
const hbs=require("hbs");
publicpath=path.join(__dirname,"../public");
template_path=path.join(__dirname,"../templates/views");
partials_path=path.join(__dirname,"../templates/partials");
//app.use(express.static(publicpath));
console.log(template_path);

app.set('view engine','hbs');
app.use(express.static(publicpath));
app.set('views',template_path);
hbs.registerPartials(partials_path);
//
app.get("/",(req,res)=>{

    res.render('index',{
        app:"app",
    });
});

app.get("/about",(req,res)=>{

    res.render("about");
});

app.get("/weather",(req,res)=>{

    res.render("weather");
});

app.get("*",(req,res)=>{

    res.render("404");
});

app.listen(port);