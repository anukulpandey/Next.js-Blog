// endpoint : /api/getblog?slug=abv
import fs from 'fs'

export default function handler(req, res) {
  const slug = req.query.slug;
  fs.readFile(`blogdata/${slug}.json`,(err,data)=>{
    if(err)res.status(500).json({error:"Internal Server Error"})
    res.status(200).json( JSON.parse(data.toString()))
  })
}
