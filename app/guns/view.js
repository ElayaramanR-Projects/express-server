const views = {
  list(guns) {
    return this._layout(`
            <ul>
                ${guns
                  .map(
                    (gun) => `
                    <li>
                        <a href="/guns/${gun.id}">${gun.name}</a>
                    </li>
                `
                  )
                  .join("")}
            </ul>
        `);
  },
  details(gun) {
    return this._layout(`
            <h2>${gun.name}</h2>
            <ul>
                <li>Type: ${gun.type}</li>
                <li>Country: ${gun.country}</li>
                <li>Caliber: ${gun.caliber}</li>
                <li>Action: ${gun.action}</li>
            </ul>
        `);
  },
  form() {
    return this._layout(`
            <form method="post" action="/guns">
                <div>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name">
                </div>
                <div>
                    <label for="type">Type</label>
                    <input type="text" id="type" name="type">
                </div>
                <div>
                    <label for="country">Country</label>
                    <input type="text" id="country" name="country">
                </div>
                <div>
                    <label for="caliber">Caliber</label>
                    <input type="text" id="caliber" name="caliber">
                </div>
                <div>
                    <label for="action">Action</label>
                    <input type="text" id="action" name="action">
                </div>
                <button type="submit">Add Gun</button>
            </form>`);
  },
  _layout(content) {
    return `
            <html>
                <head>
                    <title>Guns</title>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Guns</title>
                    <link rel="stylesheet" href="/public/assets/css/style.css">
                </head>
                <body>
                    <header>
                        <h1>Guns</h1>
                    </header>
                    <main>
                        ${content}
                    </main>
                </body>
            </html>
        `;
  },
};

export const view = (name, data) => {
  return views[name](data);
};
