import express from 'express';
import { gunRoutes } from './guns/routes.js';

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(req.body);
});

// / -> home
// /guns -> list of guns
// /guns/:id -> details of a gun 

app.use('/guns', gunRoutes);

export function start(){
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}