import * as fs from 'fs';
const checkErrors=(req,res)=>{
    try {
        const {name,email,phone,desc}=req.body;
        if(!name)return res.status(400).json({"error":"Incorrect fields"})
        if(!email)return res.status(400).json({"error":"Incorrect fields"})
        if(!phone)return res.status(400).json({"error":"Incorrect fields"})
        if(!desc)return res.status(400).json({"error":"Incorrect fields"})
    } catch (error) {
        return res.status(400).json({"error":"Incorrect fields"})
    }
    
}
export default async function handler(req, res) {
    if(req.method=='POST'){
        checkErrors(req,res);
        console.log(req.body)
        const {name,email,phone,desc}=req.body;
        if(name && email && phone && desc){
            let data = await fs.promises.readdir('contactData')
            fs.promises.writeFile(`contactData/${data.length+1}.json`,JSON.stringify({name,email,phone,desc}))
            res.status(200).json(req.body)
        }
    }
  }
  