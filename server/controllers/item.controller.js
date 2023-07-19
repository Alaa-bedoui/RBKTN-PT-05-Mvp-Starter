
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

const selectItemsPerUser=function (req,res) {
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


const add=(req,res)=>{
  const query="insert into item set ?"
  console.log("body: ",req.body);
  db.query(query,req.body,(err,result)=>{
    err ? res.status(500).send(err) : res.status(200).send(result)
})
}

const remove=(req,res)=>{
  const query=`delete from item where iditem=${req.params.id}`
  db.query(query,(err,result)=>{
    err ? res.status(500).send(err) : res.status(200).send(result)
  })
}

const modify=(req,res)=>{
  const query=`update item set ? where iditem=${req.params.id} `
  db.query(query,req.body,(err,result)=>{
    err ? res.status(500).send(err) : res.status(200).send(result)
  })
}


module.exports = { selectAll ,selectItemsPerUser,selectOneItem,add,remove,modify};
