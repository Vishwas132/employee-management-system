import {Link} from "react-router-dom"

function NewEmployeePage() {
    return (
    <>
        <Link to={`/`}>Home Page</Link>
        <form>
            <label>
                Name:<input type="text" name="name" />
            </label>
            <label>
                Department:<input type="text" name="department" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </>
    )
}

export default NewEmployeePage;