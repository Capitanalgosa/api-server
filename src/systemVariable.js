const systemVariable = {
    "URI_db": {
    "uri": "mongodb://",
    "server": "138.197.207.192",
    "name_db": 'tupirata',
    "full": function() {
        return this.uri+this.server+"/"+this.name_db
    }
}
};

module.exports = systemVariable;