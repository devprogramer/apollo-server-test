'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {

	db.createTable('todo', {
	    id: { 
    			type: 'int', 
    			primaryKey: true, 
    			autoIncrement: true },
	    description: { 
				type:'text',
				notNull: true
				},
		created_at: {
			type: 'datetime',
      		notNull: true,
      		defaultValue: (new String('now()'))
  			// default: db.func('current_timestamp'),
		},
		 status: {
		    	type: 'int',
		    	defaultValue: 0
		    }
	  }, callback);	

/*

  db.createTable('todo', {
    id: 'id',
    description: { type: 'varchar(1000)', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: db.func('current_timestamp'),
    },
    status: {
    	type: 'integer',
    	default: 0
    }
  })
  */
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
