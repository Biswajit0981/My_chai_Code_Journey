
function MyError (IsLoaded) {
    try {
        if (!IsLoaded) throw new Error("The page is not loaded");
    }catch (e) {
        console.error(e.message)
    }finally {
        console.log("Exit")

    }
}

MyError(false)
MyError(true)