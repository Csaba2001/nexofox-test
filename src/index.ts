import express from 'express';

const app=express();

app.get('/', (req, res)=>{
    if(req.query.x && req.query.y){
        var x=req.query.x;
        var a:number =+x;
        var y=req.query.y;
        var b:number =+y;
        var c:number=0;
        const tomb:(number | string)[]=[];
        if(a>b){
            c=b;
            b=a;
            a=c;
        }
        do{
            var d="";
            if(a%3==0){
                d+="fizz";
            }
            if(a%5==0){
                d+="buzz";
            }
            if(d){
                tomb.push(d);
            }
            else{
                tomb.push(a);
            }
            a++;
        }
        while(a<=b);
        res.send({tomb});
    }
});

app.listen(9876,()=> {
    console.log('Running on 9876');
});