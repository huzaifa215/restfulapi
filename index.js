const express=require('express');
const request=require('request-promise');

const app= express();
const port=process.env.PORT || 5000;

const apiKey='82c0c6e19182cbbba1f3e53b4fc1c1ef';
const baseUrl=`http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.get('/',(req,res)=>{
    res.send("Welcome to Amazon Scrapper");
});

// Get the Products Details of Specific ID
app.get('/products/:productId',async(req,res)=>{
    const productId=req.params.productId;
    try{
        const responce =await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);
       // to show in Json Form 
       res.json(JSON.parse(responce));
       // res.json(responce);
    }
    catch(error){
        res.json(error);
    }

});

// get the Products Reviews
app.get('/products/:productId/reviews',async(req,res)=>{
    const productId=req.params.productId;
    try{
        const responce =await request(`${baseUrl}&url=https://www.amazon.com/product-reviews/${productId}`);
       // to show in Json Form 
       res.json(JSON.parse(responce));
       // res.json(responce);
    }
    catch(error){
        res.json(error);
    }

});


// get Offers 
app.get('/products/:productId/offers',async(req,res)=>{
    const productId=req.params.productId;
    try{
        const responce =await request(`${baseUrl}&url=https://www.amazon.com/gp/offer-listing/${productId}`);
       // to show in Json Form 
       res.json(JSON.parse(responce));
       // res.json(responce);
    }
    catch(error){
        res.json(error);
    }

});


app.get('/products/:productId',async(req,res)=>{
    const productId=req.params.productId;
    try{
        const responce =await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);
       // to show in Json Form 
       res.json(JSON.parse(responce));
       // res.json(responce);
    }
    catch(error){
        res.json(error);
    }

});

// get the Seacrh Result
app.get('/search/:searchProductName',async(req,res)=>{
    const searchQuerry=req.params.searchProductName;
    try{
        const responce =await request(`${baseUrl}&url=https://www.amazon.com/s?k=${searchQuerry}`);
       // to show in Json Form 
       res.json(JSON.parse(responce));
       // res.json(responce);
    }
    catch(error){
        res.json(error);
    }

});


app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});