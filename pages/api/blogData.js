import * as fs from 'fs';
const checkErrors=(req,res)=>{
    try {
        const {title,description,author,slug}=req.body;
        if(!title)return res.status(400).json({"error":"Incorrect fields"})
        if(!description)return res.status(400).json({"error":"Incorrect fields"})
        if(!author)return res.status(400).json({"error":"Incorrect fields"})
        if(!slug)return res.status(400).json({"error":"Incorrect fields"})
    } catch (error) {
        return res.status(400).json({"error":"Incorrect fields"})
    }
    
}
export default async function handler(req, res) {
    if(req.method=='POST'){
        checkErrors(req,res);
        const {title,description,author,slug}=req.body;;
        if(title && description && author && slug){
            let data = await fs.promises.readdir('contactData')
            fs.promises.writeFile(`blogData/${slug}.json`,JSON.stringify({title,description,author,slug}))
            res.status(200).json(req.body)
        }
    }
  }
  