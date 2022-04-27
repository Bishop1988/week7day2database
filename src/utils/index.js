
exports.addMovie = async (collection, yargsObj) => {
    try {
        const addEntry = await collection.insertOne(yargsObj)
        console.log(addEntry)
    } catch (err) {
        console.log(err)
    }
}

exports.listMovies = async (collection) => {
    try {
        const movieList = await collection.find().toArray()
        console.log(movieList)
    } catch (err) {
        console.log(err)
    }
}

exports.deleteMovie = async (collection, yargsObj) => {
    try {
        const deletedInfo = await collection.deleteOne(yargsObj)
        console.log(deletedInfo)
    } catch (err) {
        console.log(err)
    }
}

exports.updateMovie = async (collection, yargsObj) => {
    try {
        const updatedInfo = await collection.updateOne(
            { title: yargsObj.title },
            { $set: {title: yargsObj.newTitle, actor: yargsObj.newActor} }
        )
        console.log(updatedInfo)
    } catch (err) {
        console.log(err)
    }
}

exports.updateAllMovies = async (collection, yargsObj) => {
    try {
        const updatedInfo = await collection.updateMany(
            { title: yargsObj.title },
            { $set: {title: yargsObj.newTitle, actor: yargsObj.newActor} }
        )
        console.log(updatedInfo)
    } catch (err) {
        console.log(err)
    }
}

exports.searchMovies = async (collection, yargsObj) => {
    try {
        const result = await collection.find(yargsObj).toArray()
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}