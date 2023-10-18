const express = require('express');
const mssql = require('mssql');
const SearchButton = document.getElementById('SearchButton');
const AddButton = document.getElementById('CandyButton');
const FilterNameButton = document.getElementById('FilterName');
const FilterIDButton = document.getElementById('FilterID');

const app = express();
const port = 3000;

const db = mssql.createConnection({
    host: 'localhost',
    user: 'DoctorFixit',
    password: 'Ypeztyx1',
    database: 'CMPSC487W',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.message);
        return;
    }
    console.log('Connected to the database');
});


app.get(C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVERTET\MSSQL\DATA\, (req, res) => {
    const sql = 'SELECT * FROM StoreItems';

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing SQL query: ' + err.message);
            return res.status(500).send('An error occurred');
        }

        res.json(results);
    });
});
app.post('/insert', async (req, res) => {
    try {
        await sql.connect(dbConfig);
        const { ItemID, CandyName, CandyDescript, CandyImage } = req.body;
        const sqlQuery = `INSERT INTO StoreItems VALUES ('${ItemID}' ,'${CandyName}', '${CandyDescript},'${CandyImage}')`;
        await sql.query(sqlQuery);

        res.send('Data inserted successfully!');
    } catch (err) {
        console.error('Error connecting to SQL Server:', err);
        res.status(500).send('An error occurred');
    } finally {
        sql.close();
    }
});

function Search() {
    const sqlQuery = 'select * from StoreItems where ('${ ItemID } = { item.itemID }')';
    db.sqlQuery(sqlQuery, (err, results) => {
        if (err) {
            console.error('Error executing SQL query: ' + err.message);
            return res.status(500).send('An error occurred');
        }

        res.json(results);
    }
} 


fetch('ds') 
    .then(response => response.json())
    .then(data => {
        const directoryTable = document.getElementById('directoryTable');
        directoryTable.appendChild(createDirectoryTable(data));
    })
    .catch(error => {
        console.error('Error:', error);
    });


function createDirectoryTable(data) {
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    headerRow.innerHTML = "<th>Image Directory</th>";

    data.forEach(directory => {
        const row = table.insertRow();
        const cell = row.insertCell();
        cell.innerText = directory.ImageDirectory;
    });

    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';
    table.style.border = '1px solid #000';
    table.style.padding = '5px';

    return table;
}


    
function AddItem() {
    try {
        await sql.connect(dbConfig);
        const { ItemID, CandyName, CandyDescript, CandyImage } = req.body;
        const sqlQuery = `INSERT INTO StoreItems VALUES ('${ItemID}' ,'${CandyName}', '${CandyDescript},'${CandyImage}')`;
        await sql.query(sqlQuery);

        res.send('Data inserted successfully!');
    } catch (err) {
        console.error('Error connecting to SQL Server:', err);
        res.status(500).send('An error occurred');
    } finally {
        sql.close();
    }
}
function FilterID() {
    const sqlQuery = 'select * from StoreItems Order by itemID';
    db.sqlQuery(sqlQuery, (err, results) => {
        if (err) {
            console.error('Error executing SQL query: ' + err.message);
            return res.status(500).send('An error occurred');
        }

        res.json(results);
    }
}
function FilterName() {
    const sqlQuery = 'select * from StoreItems Order by itemName';
    db.sqlQuery(sqlQuery, (err, results) => {
        if (err) {
            console.error('Error executing SQL query: ' + err.message);
            return res.status(500).send('An error occurred');
        }

        res.json(results);
    }
}

SearchButton.addEventListener('click', Search());
AddButton.addEventListener('click', AddItem());
FilterIDButton.addEventListener('click', FilterID());
FilterNameButton.addEventListener('click', FilterName());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



