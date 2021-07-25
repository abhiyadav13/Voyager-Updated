import {lakes} from "../data/lakes";



 export function Comment(props){
     const lake = lakes.find(currLake => currLake.id === props.lakeId);

    if (!lake) return <h2>Ooops! We don't have information on this lake.</h2>
    

    return (
        <div className="explore-container">
            <div className = "eachLake" key = {lake.id}>
                <div className="lake-header">
                    <h3>{lake.name}</h3>
                    <p>{lake.location}</p>
                </div>
                <div className="lake-body">
                    <div className="lake-image-container">
                        <img className="lake-image" src={lake.profileImage} alt={lake.name} />
                    </div>
                    <p>{lake.description}</p>
                </div>
                
                <div>
                    <form id="message" value="">
                        <textarea placeholder="Add Your Comment"></textarea>                       
                    </form>
                    <button id="Cbutton" type="button">Submit</button>                   
                </div>

            </div>
        </div>
        
    );
    }


