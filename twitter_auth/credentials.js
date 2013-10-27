

    TwitterCredentials = function(){
            
            var secret = { 
                consumer_key : 'jNbEFG5w6Lq98n1mx42zw',
                consumer_secret: 'j0CMPWI2y5h9ZDxFmz2Z2V1c9d3wLJvVDHk70pOUxZM',
                access_token_key: '296561740-8OFtia6o6Cg7ETqk9WWDjj0DuwSFOV33bMspAXnh',
                access_token_secret: 'zpr9tS3iMbRhOVc3yNSjxz3vwVYyC6eokpA5nVV0TM74o'
            };

             function getConsumerKry() {
                 return secret.consumer_key; 
             }

             function getConsumerSecret() {
                 return secret.consumer_secret;
             }

             function getAccessTokenKey() {
                 return secret.access_token_key;
             }

             function getAccessTokenSecret() {
                return access_token_secret;
             }

             function _getSecrets() {
                 return secret;
             }

             return {
                getSecrets: _getSecrets
             }
    };

    module.exports = TwitterCredentials;
