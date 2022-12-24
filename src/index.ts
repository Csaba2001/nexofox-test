import express from 'express';

const app=express();

app.get('/', (req, res)=>{
   res.json('Invalid endpoint');
});

app.get('/fizzbuzz', (req, res)=>{
    const from = req.query.from as string;
    const to = req.query.to as string;

    if(!from || !to) {
        res.json('Invalid request please specify \'from\' and \'to\' query parameters');
    }

    let a: number = +from;
    let b: number = +to;
    let c: number = 0;

    const result:any[]=[];

    if(a>b){
        c=b;
        b=a;
        a=c;
    }
    do{
        let d = "";
        if(a%3==0){
            d+="fizz";
        }
        if(a%7==0){
            d+="buzz";
        }
        if(d){
            result.push(d);
        }
        else{
            result.push(a);
        }
        a++;
    }
    while(a<=b);
    res.send({result});

});

app.listen(9876,()=> {
    console.log('Running on 9876');
});