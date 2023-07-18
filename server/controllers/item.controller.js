// DELETE THIS LINE

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require("../database-mysql");
// const Item = require('../database-mongo/Item.model.js');

const selectAll = function (req, res) {
  db.query("SELECT * FROM item", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};

const selectOneByUserId=function (req,res) {
    const query=`select * from item where user_iduser = ${req.params.id}`
    db.query(query,(err,result)=>{
        err ? res.status(500).send(err) : res.status(200).send(result)
    })
}

const selectOneItem=function (req,res) {
    const query=`select * from item where iditem = ${req.params.idItem} `
    db.query(query,(err,result)=>{
        err ? res.status(500).send(err) : res.status(200).send(result)
    })
}




module.exports = { selectAll ,selectOneByUserId,selectOneItem};
