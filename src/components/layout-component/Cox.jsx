

const Cox = () => {
    return (
        <div className="w-11/12 mx-auto flex gap-16 items-center mt-32 ">
            <div className="flex-1">
                <h1 className="font-primary text-[95px]">COX'S BAZAR</h1>
                <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm flex-1">

                <div className="card-body text-black ">
                    <fieldset className="fieldset ">
                        <legend className="fieldset-label">Origin?</legend>
                        <input type="text" className="input w-full font-bold text-black" placeholder="Select" />

                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-label">Destination</legend>
                        <input type="text" className="input font-bold text-black w-full" placeholder="Place" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-label">Destination</legend>
                        <input type="text" className="input font-bold text-black w-full" placeholder="Place" />
                    </fieldset>
                    <div className=" btn btn-warning">
                        Start Booking
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Cox;