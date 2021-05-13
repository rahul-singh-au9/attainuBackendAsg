import EditUser from './EditUser';
import DeleteUser from './DeleteUser';
import DeactivateUser from './DeactivateUser';
import ActivateUser from './ActivateUser';
const UserTable = (props) => {
	return (
		<table className="table table-striped table-bordered">
			<thead className="thead-dark text-center">
				<tr>
					<th>S.No.</th>
					<th>Name</th>
					<th>City</th>
					<th>Phone No.</th>
					<th>Email Id</th>
					<th>Role</th>
					<th>Active</th>
					<th>Edit</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				{props.userList &&
					props.userList.map((user, idx) => {
						return (
							<tr key={user._id}>
								<td className="text-center">{idx + 1}</td>
								<td>{user.name}</td>
								<td>{user.city}</td>
								<td>{user.phone}</td>
								<td>{user.email}</td>
								<td>{user.role}</td>
								<td className=" text-center">
									{user.isActive ? (
										<>
											<button
												type="button"
												className="btn btn-secondary"
												data-toggle="modal"
												data-target={`#deactivateUser${user._id}`}
											>
												Deactivate
											</button>
											<DeactivateUser _id={user._id} />
										</>
									) : (
										<>
											<button
												type="button"
												className="btn btn-info"
												data-toggle="modal"
												data-target={`#activateUser${user._id}`}
											>
												Activate
											</button>
											<ActivateUser _id={user._id} />
										</>
									)}
								</td>
								<td className=" text-center">
									<button
										type="button"
										className="btn btn-warning"
										data-toggle="modal"
										data-target={`#editUser${user._id}`}
										data-whatever="@mdo"
									>
										Edit
									</button>
									<EditUser data={user} />
								</td>
								<td className=" text-center">
									<button
										type="button"
										className="btn btn-danger"
										data-toggle="modal"
										data-target={`#deleteUser${user._id}`}
									>
										Delete
									</button>
									<DeleteUser _id={user._id} />
								</td>
							</tr>
						);
					})}
			</tbody>
		</table>
	);
};

export default UserTable;
