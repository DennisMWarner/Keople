using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;

namespace Keepr.Repositories
{
  public class KeepsRepository
  {
    private readonly IDbConnection _db;

    public KeepsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<Keep> Get()
    {
      // WHERE isPrivate = 0
      string sql = "SELECT * FROM keeps;";
      return _db.Query<Keep>(sql);
    }

    internal Keep Create(Keep newKeep)
    {
      string sql = @"
            INSERT INTO keeps(name, description, userId, img, views, shares, keeps)
            VALUES(@Name, @Description, @UserId, @Img, @Views, @Shares, @Keeps); 
            SELECT LAST_INSERT_ID()
        ";
      newKeep.Id = _db.ExecuteScalar<int>(sql, newKeep);
      return newKeep;
    }

    internal Keep GetKeepById(int id)
    {
      string sql = "SELECT * FROM keeps WHERE id = @Id";
      return _db.QueryFirstOrDefault<Keep>(sql, new { id });
    }
  }
}