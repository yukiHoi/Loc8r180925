/* GET home page */
const index = function(req, res){ 
res.render.pug('index', { title: 'Express' }); 
};


module.exports = { 
index 
};
