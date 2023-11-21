let pronoun = ['the', 'our', "your", "its", "her"];
let adj = ['great', 'big', "amazing", "peculiar", "preposterous"];
let noun = ['jogger', 'racoon', "viking", "professor", "keyboard"];
let domain = [".com",".net",".org",".cl",".blog"];

for (let pronounIndex in pronoun){
    for (let adjIndex in adj){
        for (let nounIndex in noun){
            for (let domainIndex in domain){
                console.log(`${pronoun[pronounIndex]}${adj[adjIndex]}${noun[nounIndex]}${domain[domainIndex]}`);
            }
        }
    }
}