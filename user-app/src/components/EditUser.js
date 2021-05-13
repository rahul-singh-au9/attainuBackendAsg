import axios from 'axios';
import { base_url } from '../config';

const EditUser = (props) => {
	const EditUserHandler = (e) => {
		e.preventDefault();
		axios
			.put(`${base_url}editUser`)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};
	return (
		<div
			className="modal fade"
			id={`editUser${props.data._id}`}
			tabIndex="-1"
			aria-labelledby="editUserLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="editUserLabel">
							New message
						</h5>
						<button
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<form onSubmit={EditUserHandler}>
							<div className="form-group">
								<label
									htmlFor="recipient-name"
									className="col-form-label"
								>
									Recipient:
								</label>
								<input
									type="text"
									className="form-control"
									id="recipient-name"
								/>
							</div>
							<div className="form-group">
								<label
									htmlFor="message-text"
									className="col-form-label"
								>
									Message:
								</label>
								<textarea
									className="form-control"
									id="message-text"
								></textarea>
							</div>
							<button type="submit" className="btn btn-primary">
								Send message
							</button>
						</form>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditUser;
