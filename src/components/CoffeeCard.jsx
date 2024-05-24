import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, photo } = coffee;

    const handleDelete = _id => {
        // console.log(_id);

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                    // headers: { 'content-type': 'application/json' },
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: `${name} has been deleted.`,
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id!== _id);
                            setCoffees(remaining);
                        }
                    })
            }

            else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: `${name} is safe.`,
                    icon: "error"
                });
            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className="py-4"><img className="w-1/2 rounded-md" src={photo} alt="Movie" /></figure>

            <div className="flex justify-between w-full pr-4">

                <div className="text-left">
                    <h2 className="card-title">{name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>

                <div className="card-actions justify-end =">
                    <div className="join join-vertical space-y-4">
                        <button className="btn join-item">View</button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn join-item">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-orange-500 join-item">X</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoffeeCard;