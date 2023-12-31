module.exports = function (app) {
    app.get('/informacao/professores', function (req, res) {
        const sql = require('mssql/msnodesqlv8');
        const sqlConfig = {
            user: 'BD2211017',
            password: '12345',
            database: 'BD', //Na FATEC, utilizar o database BD ou LP8 
            server: 'APOLO'
        }

        async function getProfessores() {
            try {
                const pool = await sql.connect(sqlConfig);

                const results = await pool.request().query('SELECT * from PROFESSORES')

                res.render('informacao/professores', { profs: results.recordset });

            } catch (err) {
                console.log(err)
            }
        }
        getProfessores();
    });
}
