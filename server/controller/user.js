const mongo = require('mongodb');
const mongoConnect = require('../mongo');
var db;
mongoConnect((database) => (db = database));
const collection_name = 'userList';

exports.getUserList = (req, res) => {
	db.collection(collection_name)
		.find()
		.toArray((err, result) => {
			if (err) throw err;
			res.send(result);
		});
};

exports.addUser = (req, res) => {
	const data = {
		name: req.body.name,
		city: req.body.city,
		phone: req.body.phone,
		email: req.body.email,
		isActive: req.body.isActive,
		role: req.body.role,
	};
	db.collection(collection_name).insert(data, (err, _) => {
		if (err) res.send(err);
		res.send('User added');
	});
};

exports.editUser = (req, res) => {
	let Id = mongo.ObjectID(req.body._id);
	db.collection(collection_name).update(
		{ _id: Id },
		{
			$set: {
				name: req.body.name,
				email: req.body.email,
				city: req.body.city,
				phone: req.body.phone,
				isActive: req.body.isActive ? true : false,
				role: req.body.role,
			},
		},
		(err, _) => {
			if (err) throw err;
			res.send('Data Updated');
		},
	);
};

exports.activateUser = (req, res) => {
	let Id = mongo.ObjectID(req.params._id);
	db.collection(collection_name).update(
		{ _id: Id },
		{
			$set: {
				isActive: true,
			},
		},
		(err, _) => {
			if (err) res.send(err);
			res.send('User activated');
		},
	);
};

exports.deActivateUser = (req, res) => {
	let Id = mongo.ObjectID(req.params._id);
	db.collection(collection_name).update(
		{ _id: Id },
		{
			$set: {
				isActive: false,
			},
		},
		(err, _) => {
			if (err) res.send(err);
			res.send('User deactivated');
		},
	);
};

exports.deleteUser = (req, res) => {
	let Id = mongo.ObjectID(req.params._id);
	db.collection(collection_name).remove({ _id: Id }, (err, _) => {
		if (err) res.send(err);
		res.send('User deleted');
	});
};
