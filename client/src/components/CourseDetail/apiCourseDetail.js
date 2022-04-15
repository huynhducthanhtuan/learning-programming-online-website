export const readLesson = (lessonId) => {
    return (
        fetch(`/lesson/${lessonId}`, {
            method: "GET"
        })
        .then(res => res.json())
        .catch(err => console.log(err))
    )
}