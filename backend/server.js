const app = require('./app')


const DatabaseConn = require('./conn')




DatabaseConn()

app.listen(4000,()=>{
    console.log("its running")
})


