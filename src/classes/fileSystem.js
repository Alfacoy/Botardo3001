import fs from 'fs';

async function addContent(name, object) {
    try {
        let res = await fs.readFile(`./files/${name}.txt`, 'utf-8');
        let data = JSON.parse(res);

        console.log(data)
    } catch (err) {
        await fs.promises.writeFile(`./files/${name}.txt`, JSON.stringify(object))
    }

}


export {
    addContent
}