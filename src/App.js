const express = require('express')
const path=require('path')
const hbs =require('hbs')
const app = express();
const port = process.env.PORT || 8000;


//Public static
const static_path=path.join(__dirname,'../public');
const template_path=path.join(__dirname,'../templates/views');
const partials_path=path.join(__dirname,'../templates/partials');
app.use(express.static(static_path));

app.set('view engine','hbs');
app.set('views',template_path)
hbs.registerPartials(partials_path);

// routing
app.get('/',(req,res)=>{
res.render("index")
});

app.get('/about',(req,res)=>{
res.render("about")
});

app.get('/weather',(req,res)=>{
res.render("weather")
});
app.get('*',(req,res)=>{
res.render("404err",{
    errorm:'Oops! Page Not Found'
})
});


app.listen(port,()=>{
    console.log(`listening to ${port}`);
});