var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    articleone :{
    title: 'Article-One|Bitcoin',
    date: '12/August/2017',
    heading: 'Article-One|Bitcoin',
    content:  `<p>
                Bitcoin is a worldwide cryptocurrency and digital payment system[13]:3 invented by an unknown programmer, or a group of programmers, under the name Satoshi Nakamoto.[14] It was released as open-source software in 2009.[15]
                
The system is peer-to-peer, and transactions take place between users directly, without an intermediary.[13]:4 These transactions are verified by network nodes and recorded in a public distributed ledger called a blockchain. Since the system works without a central repository or single administrator, bitcoin is called the first decentralized digital currency.[13]:1[16]

Besides being created as a reward for mining, bitcoin can be exchanged for other currencies,[17] products, and services in legal or black markets.[18][19]

As of February 2015, over 100,000 merchants and vendors accepted bitcoin as payment.[20] According to research produced by Cambridge University in 2017, there are 2.9 to 5.8 million unique users using a cryptocurrency wallet, most of them using bitcoin.
            </p> `
},
    articletwo :{
        title: 'Article-Two|Bitcoin',
        date: '13/August/2017',
        heading: 'Article-Two|Bitcoin',
        content:  `<p>
                    Bitcoin is a worldwide cryptocurrency and digital payment system[13]:3 invented by an unknown programmer, or a group of programmers, under the name Satoshi Nakamoto.[14] It was released as open-source software in 2009.[15]
                    
    The system is peer-to-peer, and transactions take place between users directly, without an intermediary.[13]:4 These transactions are verified by network nodes and recorded in a public distributed ledger called a blockchain. Since the system works without a central repository or single administrator, bitcoin is called the first decentralized digital currency.[13]:1[16]
    
    Besides being created as a reward for mining, bitcoin can be exchanged for other currencies,[17] products, and services in legal or black markets.[18][19]
    
    As of February 2015, over 100,000 merchants and vendors accepted bitcoin as payment.[20] According to research produced by Cambridge University in 2017, there are 2.9 to 5.8 million unique users using a cryptocurrency wallet, most of them using bitcoin.
                </p> `
},
    articlethree :{
    title: 'Article-Three|Bitcoin',
    date: '13/August/2017',
    heading: 'Article-Three|Bitcoin',
    content:  `<p>
                Bitcoin is a worldwide cryptocurrency and digital payment system[13]:3 invented by an unknown programmer, or a group of programmers, under the name Satoshi Nakamoto.[14] It was released as open-source software in 2009.[15]
                
The system is peer-to-peer, and transactions take place between users directly, without an intermediary.[13]:4 These transactions are verified by network nodes and recorded in a public distributed ledger called a blockchain. Since the system works without a central repository or single administrator, bitcoin is called the first decentralized digital currency.[13]:1[16]

Besides being created as a reward for mining, bitcoin can be exchanged for other currencies,[17] products, and services in legal or black markets.[18][19]

As of February 2015, over 100,000 merchants and vendors accepted bitcoin as payment.[20] According to research produced by Cambridge University in 2017, there are 2.9 to 5.8 million unique users using a cryptocurrency wallet, most of them using bitcoin.
            </p> `
},
};

function createTemp(data){  
  var title = data.title;
  var date = data.date;
  var heading = data.heading;
  var content = data.content;

    var htmltemp =`
<html>
    <head>
        <title>
            ${title}
        </title>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
         <div>
            <a href="/">Home</a>
        </div>
        <div>
            Date :<b>${date}</b>
        </div>
         <div >
            <h1>${heading}</h1>
        </div>
        <div>
        ${content}
        </div>
        </div>
    </body>
</html>`;
return htmltemp;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function(req,res){
 counter = counter + 1;
 res.send(counter.toString());
});

app.get('/:articleName',function(req,res) {
  var  articleName1 = req.params.articleName;
  res.send(createTemp(articles[articleName1]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
