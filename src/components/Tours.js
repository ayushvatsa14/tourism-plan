import Card from './Card'

function Tours(props){
    return (
        <div className='w-fit mx-auto grid grid-cols-3 gap-4'>
            {props.tours.map((data) => {
                return (
                    <Card {...data} key={data.id} removeTour={props.removeTour} />
                );
            })}
        </div>
    );
}

export default Tours;