import express from 'express';

const app=express();

app.get('/', (req, res)=>{
    res.send('Typescript and node works');
});

app.listen(9876,()=> {
    console.log('Running on 9876');
});