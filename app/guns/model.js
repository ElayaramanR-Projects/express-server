const guns = [
    { id: '1', name: 'AK-47', type: 'Assault Rifle' , country: 'Russia' , caliber: '7.62x39mm' , action: 'Gas-operated' },
    { id: '2', name: 'M16', type: 'Assault Rifle' , country: 'United States' , caliber: '5.56x45mm' , action: 'Gas-operated' },
    { id: '3', name: 'M4', type: 'Carbine' , country: 'United States' , caliber: '5.56x45mm' , action: 'Gas-operated' },
    { id: '4', name: 'Glock 17', type: 'Pistol' , country: 'Austria' , caliber: '9x19mm' , action: 'Short recoil' },
    { id: '5', name: 'Desert Eagle', type: 'Pistol' , country: 'United States' , caliber: '.50 AE' , action: 'Gas-operated' },
    { id: '6', name: 'MP5', type: 'Submachine Gun' , country: 'Germany' , caliber: '9x19mm' , action: 'Roller-delayed blowback' }
];

export function getAll(){
    return Promise.resolve(guns);
}

export function getById(id){
    return Promise.resolve(guns.find(gun => +gun.id === id));
}

export function getByName(name){
    return Promise.resolve(guns.find(gun => gun.name.toLowerCase() === name.toLowerCase()));
}

export function getByCountry(country){
    return Promise.resolve(guns.filter(gun => gun.country === country));
}

export function getByType(type){
    return Promise.resolve(guns.filter(gun => gun.type === type));
}

export function getByCaliber(caliber){
    return Promise.resolve(guns.filter(gun => gun.caliber === caliber));
}

export function getByAction(action){
    return Promise.resolve(guns.filter(gun => gun.action === action));
}

export function addGun(gun){
    guns.push(gun);
    return Promise.resolve(gun);
}

export function deleteGun(id){
    const index = guns.findIndex(gun => gun.id === id);
    if(index === -1){
        return Promise.reject('Gun not found');
    } else {
        const gun = guns.splice(index, 1);
        return Promise.resolve(gun);
    }
}

export function updateGun(id, gun){
    const index = guns.findIndex(gun => gun.id === id);
    if(index === -1){
        return Promise.reject('Gun not found');
    } else {
        guns[index] = gun;
        return Promise.resolve(gun);
    }
}

