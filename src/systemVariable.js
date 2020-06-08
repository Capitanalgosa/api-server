const systemVariable = {
    "URI_db": {
    "uri": "mongodb://",
    "server": "localhost",
    "name_db": 'tupirata',
    "full": function() {
        return this.uri+this.server+"/"+this.name_db
    }
}
};



module.exports = systemVariable;