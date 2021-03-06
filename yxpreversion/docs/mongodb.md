# mongo --help

## > help

        db.help()                    help on db methods
        db.mycoll.help()             help on collection methods
        sh.help()                    sharding helpers
        rs.help()                    replica set helpers
        help admin                   administrative help
        help connect                 connecting to a db help
        help keys                    key shortcuts
        help misc                    misc things to know
        help mr                      mapreduce

        show dbs                     show database names
        show collections             show collections in current database
        show users                   show users in current database
        show profile                 show most recent system.profile entries with time >= 1ms
        show logs                    show the accessible logger names
        show log [name]              prints out the last segment of log in memory, 'global' is default
        use <db_name>                set current database
        db.foo.find()                list objects in collection foo
        db.foo.find( { a : 1 } )     list objects in foo where a == 1
        it                           result of the last line evaluated; use to further iterate
        DBQuery.shellBatchSize = x   set default number of items to display on shell
        exit                         quit the mongo shell

## > db.help()
 > DB methods:

        db.adminCommand(nameOrDocument) - switches to 'admin' db, and runs command [just calls db.runCommand(...)]
        db.aggregate([pipeline], {options}) - performs a collectionless aggregation on this database; returns a cursor
        db.auth(username, password)
        db.cloneDatabase(fromhost) - will only function with MongoDB 4.0 and below
        db.commandHelp(name) returns the help for the command
        db.copyDatabase(fromdb, todb, fromhost) - will only function with MongoDB 4.0 and below
        db.createCollection(name, {size: ..., capped: ..., max: ...})
        db.createUser(userDocument)
        db.createView(name, viewOn, [{$operator: {...}}, ...], {viewOptions})
        db.currentOp() displays currently executing operations in the db
        db.dropDatabase(writeConcern)
        db.dropUser(username)
        db.eval() - deprecated
        db.fsyncLock() flush data to disk and lock server for backups
        db.fsyncUnlock() unlocks server following a db.fsyncLock()
        db.getCollection(cname) same as db['cname'] or db.cname
        db.getCollectionInfos([filter]) - returns a list that contains the names and options of the db's collections
        db.getCollectionNames()
        db.getLastError() - just returns the err msg string
        db.getLastErrorObj() - return full status object
        db.getLogComponents()
        db.getMongo() get the server connection object
        db.getMongo().setSlaveOk() allow queries on a replication slave server
        db.getName()
        db.getProfilingLevel() - deprecated
        db.getProfilingStatus() - returns if profiling is on and slow threshold
        db.getReplicationInfo()
        db.getSiblingDB(name) get the db at the same server as this one
        db.getWriteConcern() - returns the write concern used for any operations on this db, inherited from server object if set
        db.hostInfo() get details about the server's host
        db.isMaster() check replica primary status
        db.killOp(opid) kills the current operation in the db
        db.listCommands() lists all the db commands
        db.loadServerScripts() loads all the scripts in db.system.js
        db.logout()
        db.printCollectionStats()
        db.printReplicationInfo()
        db.printShardingStatus()
        db.printSlaveReplicationInfo()
        db.resetError()
        db.runCommand(cmdObj) run a database command.  if cmdObj is a string, turns it into {cmdObj: 1}
        db.serverStatus()
        db.setLogLevel(level,<component>)
        db.setProfilingLevel(level,slowms) 0=off 1=slow 2=all
        db.setVerboseShell(flag) display extra information in shell output
        db.setWriteConcern(<write concern doc>) - sets the write concern for writes to the db
        db.shutdownServer()
        db.stats()
        db.unsetWriteConcern(<write concern doc>) - unsets the write concern for writes to the db
        db.version() current version of the server
        db.watch() - opens a change stream cursor for a database to report on all  changes to its non-system collections.

## > db.mycoll.help()
 > DBCollection help

        db.mycoll.find().help() - show DBCursor help
        db.mycoll.bulkWrite( operations, <optional params> ) - bulk execute write operations, optional parameters are: w, wtimeout, j
        db.mycoll.count( query = {}, <optional params> ) - count the number of documents that matches the query, optional parameters are: limit, skip, hint, maxTimeMS
        db.mycoll.countDocuments( query = {}, <optional params> ) - count the number of documents that matches the query, optional parameters are: limit, skip, hint, maxTimeMS
        db.mycoll.estimatedDocumentCount( <optional params> ) - estimate the document count using collection metadata, optional parameters are: maxTimeMS
        db.mycoll.convertToCapped(maxBytes) - calls {convertToCapped:'mycoll', size:maxBytes}} command
        db.mycoll.createIndex(keypattern[,options])
        db.mycoll.createIndexes([keypatterns], <options>)
        db.mycoll.dataSize()
        db.mycoll.deleteOne( filter, <optional params> ) - delete first matching document, optional parameters are: w, wtimeout, j
        db.mycoll.deleteMany( filter, <optional params> ) - delete all matching documents, optional parameters are: w, wtimeout, j
        db.mycoll.distinct( key, query, <optional params> ) - e.g. db.mycoll.distinct( 'x' ), optional parameters are: maxTimeMS
        db.mycoll.drop() drop the collection
        db.mycoll.dropIndex(index) - e.g. db.mycoll.dropIndex( "indexName" ) or db.mycoll.dropIndex( { "indexKey" : 1 } )
        db.mycoll.dropIndexes()
        db.mycoll.ensureIndex(keypattern[,options]) - DEPRECATED, use createIndex() instead
        db.mycoll.explain().help() - show explain help
        db.mycoll.reIndex()
        db.mycoll.find([query],[fields]) - query is an optional query filter. fields is optional set of fields to return.
                                                      e.g. db.mycoll.find( {x:77} , {name:1, x:1} )
        db.mycoll.find(...).count()
        db.mycoll.find(...).limit(n)
        db.mycoll.find(...).skip(n)
        db.mycoll.find(...).sort(...)
        db.mycoll.findOne([query], [fields], [options], [readConcern])
        db.mycoll.findOneAndDelete( filter, <optional params> ) - delete first matching document, optional parameters are: projection, sort, maxTimeMS
        db.mycoll.findOneAndReplace( filter, replacement, <optional params> ) - replace first matching document, optional parameters are: projection, sort, maxTimeMS, upsert, returnNewDocument
        db.mycoll.findOneAndUpdate( filter, <update object or pipeline>, <optional params> ) - update first matching document, optional parameters are: projection, sort, maxTimeMS, upsert, returnNewDocument
        db.mycoll.getDB() get DB object associated with collection
        db.mycoll.getPlanCache() get query plan cache associated with collection
        db.mycoll.getIndexes()
        db.mycoll.insert(obj)
        db.mycoll.insertOne( obj, <optional params> ) - insert a document, optional parameters are: w, wtimeout, j
        db.mycoll.insertMany( [objects], <optional params> ) - insert multiple documents, optional parameters are: w, wtimeout, j
        db.mycoll.mapReduce( mapFunction , reduceFunction , <optional params> )
        db.mycoll.aggregate( [pipeline], <optional params> ) - performs an aggregation on a collection; returns a cursor
        db.mycoll.remove(query)
        db.mycoll.replaceOne( filter, replacement, <optional params> ) - replace the first matching document, optional parameters are: upsert, w, wtimeout, j
        db.mycoll.renameCollection( newName , <dropTarget> ) renames the collection.
        db.mycoll.runCommand( name , <options> ) runs a db command with the given name where the first param is the collection name
        db.mycoll.save(obj)
        db.mycoll.stats({scale: N, indexDetails: true/false, indexDetailsKey: <index key>, indexDetailsName: <index name>})
        db.mycoll.storageSize() - includes free space allocated to this collection
        db.mycoll.totalIndexSize() - size in bytes of all the indexes
        db.mycoll.totalSize() - storage allocated for all data and indexes
        db.mycoll.update( query, <update object or pipeline>[, upsert_bool, multi_bool] ) - instead of two flags, you can pass an object with fields: upsert, multi, hint
        db.mycoll.updateOne( filter, <update object or pipeline>, <optional params> ) - update the first matching document, optional parameters are: upsert, w, wtimeout, j, hint
        db.mycoll.updateMany( filter, <update object or pipeline>, <optional params> ) - update all matching documents, optional parameters are: upsert, w, wtimeout, j, hint
        db.mycoll.validate( <full> ) - SLOW
        db.mycoll.getShardVersion() - only for use with sharding
        db.mycoll.getShardDistribution() - prints statistics about data distribution in the cluster
        db.mycoll.getSplitKeysForChunks( <maxChunkSize> ) - calculates split points over all chunks and returns splitter function
        db.mycoll.getWriteConcern() - returns the write concern used for any operations on this collection, inherited from server/db if set
        db.mycoll.setWriteConcern( <write concern doc> ) - sets the write concern for writes to the collection
        db.mycoll.unsetWriteConcern( <write concern doc> ) - unsets the write concern for writes to the collection
        db.mycoll.latencyStats() - display operation latency histograms for this collection

## > sh.help()

        sh.addShard( host )                       server:port OR setname/server:port
        sh.addShardToZone(shard,zone)             adds the shard to the zone
        sh.updateZoneKeyRange(fullName,min,max,zone)      assigns the specified range of the given collection to a zone
        sh.disableBalancing(coll)                 disable balancing on one collection
        sh.enableBalancing(coll)                  re-enable balancing on one collection
        sh.enableSharding(dbname, shardName)      enables sharding on the database dbname, optionally use shardName as primary
        sh.getBalancerState()                     returns whether the balancer is enabled
        sh.isBalancerRunning()                    return true if the balancer has work in progress on any mongos
        sh.moveChunk(fullName,find,to)            move the chunk where 'find' is to 'to' (name of shard)
        sh.removeShardFromZone(shard,zone)      removes the shard from zone
        sh.removeRangeFromZone(fullName,min,max)   removes the range of the given collection from any zone
        sh.shardCollection(fullName,key,unique,options)   shards the collection
        sh.splitAt(fullName,middle)               splits the chunk that middle is in at middle
        sh.splitFind(fullName,find)               splits the chunk that find is in at the median
        sh.startBalancer()                        starts the balancer so chunks are balanced automatically
        sh.status()                               prints a general overview of the cluster
        sh.stopBalancer()                         stops the balancer so chunks are not balanced automatically
        sh.disableAutoSplit()                   disable autoSplit on one collection
        sh.enableAutoSplit()                    re-enable autoSplit on one collection
        sh.getShouldAutoSplit()                 returns whether autosplit is enabled

## > rs.help()

        rs.status()                                { replSetGetStatus : 1 } checks repl set status
        rs.initiate()                              { replSetInitiate : null } initiates set with default settings
        rs.initiate(cfg)                           { replSetInitiate : cfg } initiates set with configuration cfg
        rs.conf()                                  get the current configuration object from local.system.replset
        rs.reconfig(cfg)                           updates the configuration of a running replica set with cfg (disconnects)
        rs.add(hostportstr)                        add a new member to the set with default attributes (disconnects)
        rs.add(membercfgobj)                       add a new member to the set with extra attributes (disconnects)
        rs.addArb(hostportstr)                     add a new member which is arbiterOnly:true (disconnects)
        rs.stepDown([stepdownSecs, catchUpSecs])   step down as primary (disconnects)
        rs.syncFrom(hostportstr)                   make a secondary sync from the given member
        rs.freeze(secs)                            make a node ineligible to become primary for the time specified
        rs.remove(hostportstr)                     remove a host from the replica set (disconnects)
        rs.slaveOk()                               allow queries on secondary nodes

        rs.printReplicationInfo()                  check oplog size and time range
        rs.printSlaveReplicationInfo()             check replica set members and replication lag
        db.isMaster()                              check who is primary

        reconfiguration helpers disconnect from the database so the shell will display
        an error, even if the command succeeds.

## > help admin

        ls([path])                      list files
        pwd()                           returns current directory
        listFiles([path])               returns file list
        hostname()                      returns name of this host
        cat(fname)                      returns contents of text file as a string
        removeFile(f)                   delete a file or directory
        load(jsfilename)                load and execute a .js file
        run(program[, args...])         spawn a program and wait for its completion
        runProgram(program[, args...])  same as run(), above
        sleep(m)                        sleep m milliseconds
        getMemInfo()                    diagnostic

## > help connect

Normally one specifies the server on the mongo shell command line. Run mongo --help to see those options.
Additional connections may be opened:

    var x = new Mongo('host[:port]');
    var mydb = x.getDB('mydb');

or
var mydb = connect('host[:port]/mydb');

Note: the REPL prompt only auto-reports getLastError() for the shell command line connection.

## > help keys
 > Tab completion and command history is available at the command prompt.

Some emacs keystrokes are available too:
Ctrl-A start of line
Ctrl-E end of line
Ctrl-K del to end of line

Multi-line commands
You can enter a multi line javascript expression. If parens, braces, etc. are not closed, you will see a new line
beginning with '...' characters. Type the rest of your expression. Press Ctrl-C to abort the data entry if you
get stuck.

## > help misc

        b = new BinData(subtype,base64str)  create a BSON BinData value
        b.subtype()                         the BinData subtype (0..255)
        b.length()                          length of the BinData data in bytes
        b.hex()                             the data as a hex encoded string
        b.base64()                          the data as a base 64 encoded string
        b.toString()

        b = HexData(subtype,hexstr)         create a BSON BinData value from a hex string
        b = UUID(hexstr)                    create a BSON BinData value of UUID subtype
        b = MD5(hexstr)                     create a BSON BinData value of MD5 subtype
        "hexstr"                            string, sequence of hex characters (no 0x prefix)

        o = new ObjectId()                  create a new ObjectId
        o.getTimestamp()                    return timestamp derived from first 32 bits of the OID
        o.isObjectId
        o.toString()
        o.equals(otherid)

        d = ISODate()                       like Date() but behaves more intuitively when used
        d = ISODate('YYYY-MM-DD hh:mm:ss')    without an explicit "new " prefix on construction

## > help mr

See also http://dochub.mongodb.org/core/mapreduce

function mapf() {
// 'this' holds current document to inspect
emit(key, value);
}

function reducef(key,value_array) {
return reduced_value;
}

db.mycollection.mapReduce(mapf, reducef[, options])

options
{[query : <query filter object>][, sort : <sort the query. useful for optimization>]
[, limit : <number of objects to return from collection>][, out : <output-collection name>]
[, keeptemp: <true|false>][, finalize : <finalizefunction>]
[, scope : <object where fields go into javascript global scope >][, verbose : true]}
