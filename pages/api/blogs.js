// endpoint : /api/blogs
import fs from 'fs'

export default async function handler (req, res) {
    let allBlogs=[];
let data = await fs.promises.readdir('blogdata')
for (let index = 0; index < data.length; index++) {
    const element = data[index];
    let blogData = await fs.promises.readFile(`blogdata/${element}`);
    allBlogs.push(JSON.parse(blogData.toString()));
}
    res.status(200).json(allBlogs)
}
