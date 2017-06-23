import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';

export default ({ config, db, auth }) => {
	let api = Router();

	// mount the facets resource
	api.use('/facets', auth, facets({ config, db, auth }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
