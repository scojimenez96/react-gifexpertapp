import react, {useState}from "react"
import { Fragment } from "react"
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

const GifExpertApp = () => {
    const [categorias, setCategories] = useState(['One Punch']);

    return (
        <Fragment>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
            <ol>

                {
                    categorias.map( (category) => 
                        (<GifGrid 
                        key={category}
                        category={category} />
                    ))
                }

            </ol>

        </Fragment>
    )
}

export default GifExpertApp