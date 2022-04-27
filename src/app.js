const yargs = require("yargs")

const { connection, client } = require("./db/connection")
const { addMovie, listMovies, deleteMovie, updateMovie, updateAllMovies, searchMovies, searchMovie } = require("./utils")

const app = async (yargsObj) => {
    const collection = await connection()
    if (yargsObj.add) {
        await addMovie(collection, { title: yargsObj.title, actor: yargsObj.actor })
        console.log("successfully added new document to db")
    } else if (yargsObj.list) {
        await listMovies(collection)
    } else if (yargsObj.delete) {
        await deleteMovie(collection, { title: yargsObj.title })
        console.log("successfully deleted document")
    } else if (yargsObj.update) {
        await updateMovie(collection, yargsObj)
        console.log("successfully updated document")
    } else if (yargsObj.updateAll) {
        await updateAllMovies(collection, yargsObj)
        console.log("successfully updated document")
    } else if (yargsObj.searchMovies) {
        await searchMovies(collection, { title: yargsObj.title })
        console.log("successfully searched db")
    } else if (yargsObj.searchMovie) {
        await searchMovie(collection, { title: yargsObj.title })
    } else {
        console.log("Incorrect Command")
    }
    await client.close()
}

app(yargs.argv)