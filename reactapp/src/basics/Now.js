
export default function Now() {
    var now = new Date().toString() 

    return (
        <h1 className="text-danger">{now}</h1>
    )
}