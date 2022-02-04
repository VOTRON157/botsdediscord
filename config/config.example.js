module.exports = {
	'port': 3000,
	'discord': {
		'clientID': 'bot_id',
		'clientSecret': 'bot_secret',
		'clientToken': 'bot_token',
		'callbackURL': 'http://localhost:3000/api/callback',
		'guild': {
			'id': 'guild_id',
			'roles': {
				'verifier': 'verifier_role_id',
				'verifiedBot': 'verified_role_id',
				'developer': 'developer_role_id',
				'pendentBot': 'unverified_role_id'
			}
		}
	},
	'server': {
		'secret': 'secretfodaaq'
	},
	'database': {
		'uri': 'urldamongoaq',
		'name': 'bdd'
	},
	'oauth2': {
		'prompt': 'none',
		'scopes': ['identify']
	},
	'tags': [
		'levels',
		'moderação',
		'social',
		'diversão',
		'economia',
		'diversão',
		'musica',
		'anime',
		'multiidioma',
		'logs'
	]
};