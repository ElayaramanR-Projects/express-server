
import { getAll , getById, getByName, addGun} from "./model.js";
import { view } from "./view.js";

export async function getGuns(req, res){
    res.send(
        view('list', await getAll())
    )
}

export async function getGun(req, res) {
    const id = parseInt(req.params.id);
    let gun;

    console.log(id);
    if (id) {
        gun = await getById(id);
    } else {
        const name = req.params.name;
        gun = await getByName(name);
    }

    if (gun) {
        res.send(
            view('details', gun)
        );
    } else {
        res.status(404).send('Gun not found');
    }
}

export async function newGun(req, res){
    res.send(
        view('form')
    );
}

export async function storeGun(req, res){
    const { name, type} = req.body;
    if(!name || !type){
        res.status(400);
        res.redirect('/guns');
        return;
    }
    addGun(gun);
    res.redirect('/guns');
}