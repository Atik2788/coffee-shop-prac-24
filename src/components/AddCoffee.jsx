import Swal from 'sweetalert2'

const AddCoffee = () => {


    const handleAddCoffee = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo  = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(newCoffee);

        // send data to the server:
        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Coffee Added Successfully!!",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })


    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold mb-10">Add a Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form row: main and quantity */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 md:mr-4">
                        <label className='label'>
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className='label'>
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                {/* form row: subliyer and taste*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 md:mr-4">
                        <label className='label'>
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className='label'>
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* form row: Category and Details*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 md:mr-4">
                        <label className='label'>
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className='label'>
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* form row: Photo URL*/}
                <div className="mb-8">
                    <div className="form-control w-full md:mr-4">
                        <label className='label'>
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

               <input className="btn btn-block btn-neutral" type="submit" value="Add Coffee" />

            </form>
        </div>
    );
};

export default AddCoffee;