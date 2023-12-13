const express=require('express');
const Products=require('../modules/products');
const router=express.Router();


//value deals

router.get('/ValueDeals',async(req,res)=>{
    const prod= await Products.find({tag:"bestDeals"})
    .then((prod)=>{
        console.log("prod");
        res.json(prod);
    })
    .catch((e)=>{
        res.send(e);
    })

});

//For Kids
router.get('/Kids',async(req,res)=>{
    console.log("called");
    const prod= await Products.find({tag:"kids"}) 
    .then((prod)=>{
        res.send(prod);
    })
    .catch((e)=>{
        res.send(e);
    })
});



//Millets Aternatives
router.get('/MilletsAlt',async(req,res)=>{
    const prod= await Products.find({tag:"MilletsAlt"})
    .then((prod)=>{
        console.log("prod");
        res.send(prod);
    })
    .catch((e)=>{
        res.send(e);
    })
});


//add new product (fro Production)
router.post('/addProducts',async(req,res)=>{
    console.log(req.body);
    const {name,rate,unit,tag,desc,imgLink}=req.body;
   
    const pro= new Products({
        name:name,
        rate:rate,
        unit:unit,
        tag:tag,
        desc:desc,
        imgLink:imgLink
    })
    pro.save()
    .then(()=>{
      res.json(pro);
    })
    .catch(err=>{
      console.log(err);
      res.send(err);
    })

    
})

module.exports=router;