require('./database')
const app=require('./app')

app.listen(app.get('port'));
console.log('Server working',app.get('port'));