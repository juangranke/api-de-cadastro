const oracledb = require('oracledb')
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT

require('dotenv').config


module.exports = async function Oracle(params) {

    try{
        connection = await oracledb.getConnection({
            user: 'system',
            password: '3663',
            connectionString: 'localhost/xe'
        })
        
        try {
            const query = await connection.execute(`${params}`)
            console.log(query)

            
        } catch(err) {
            console.log(err)
        }

    } catch(err) {
        console.log(`Ocorreu um erro ao se conetar ao banco de dados!`)
    }
}