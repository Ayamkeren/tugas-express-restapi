import db from "../connection.js";

export const getMotor = (req, res) => {
  const sql = "SELECT * FROM motor";
  db.query(sql, (error, result) => {
    if (error) {
      res.statusCode(400);
      res.send(error);
    }
    res.status(201);
    res.json(result);
  });
};
export const getMotorById = (req, res) => {
  const sql = `SELECT * FROM motor WHERE id=${req.query.id}`;
  db.query(sql, (error, result) => {
    res.json(result);
  });
};

export const createMotor = (req, res) => {
  const { merk_motor, jenis_motor, deskripsi_motor } = req.body;
  const sql =
    "INSERT INTO motor (merk_motor, jenis_motor, deskripsi_motor) VALUES (?,?,?)";
  db.query(sql, [merk_motor, jenis_motor, deskripsi_motor], (error, result) => {
    if (error) {
      res.status(400);
      res.send(error);
    }
    res.status(201);
    res.json(result);
  });
};

export const updateMotor = (req, res) => {
  const id = req.query.id;

  const { merk_motor, jenis_motor, deskripsi_motor } = req.body;
  if (merk_motor || jenis_motor || deskripsi_motor) {
    const query = `UPDATE bunga SET merk_motor = "${merk_motor}", jenis_motor = "${jenis_motor}", deskripsi_motor = "${deskripsi_motor},"  WHERE  id=${id}`;

    db.query(query, (error, result) => {
      if (error) res.status(400).send(error.message);
      res.json(result);
    });
  } else {
    res.send("isi body nya");
  }
};

export const deleteMotor = (req, res) => {
  const id = req.query.id;
  const sql = "DELETE FROM motor WHERE id = ?";
  db.query(sql, [id], (error, result) => {
    if (error) {
      res.status(400);
      res.send(error);
    }
    res.status(200);
    res.json("Data Berhasil Di Hapus");
  });
};
