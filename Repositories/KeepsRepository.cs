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
      string sql = "SELECT * FROM keeps WHERE isPrivate = 0";
      return _db.Query<Keep>(sql);
    }

    internal Keep Create(Keep newKeep)
    {
      string sql = @"
            INSERT INTO keeps(name, description, userId, img, views, shares, keeps, isPrivate)
            VALUES(@Name, @Description, @UserId, @Img, @Views, @Shares, @Keeps, @IsPrivate); 
            SELECT LAST_INSERT_ID()
        ";
      newKeep.Id = _db.ExecuteScalar<int>(sql, newKeep);
      return newKeep;
    }

    internal IEnumerable<VaultKeepViewModel> GetKeepsByVaultId(int VaultId, string UserId)
    {
      string sql = @"
     SELECT k.*,
vk.id as VaultKeepId
FROM vaultkeeps vk
INNER JOIN keeps k ON k.id = vk.keepId 
WHERE (vaultId = @VaultId AND vk.userId = @UserId)
     ";
      return _db.Query<VaultKeepViewModel>(sql, new { VaultId, UserId });
    }

    internal IEnumerable<Keep> GetUserKeeps(string userId)
    {

      string sql = "SELECT * FROM keeps WHERE userId = @UserId";
      return _db.Query<Keep>(sql, new { userId });

    }

    internal bool Delete(int id, string userId)
    {
      {
        string sql = @"
     DELETE FROM keeps WHERE(id =@Id AND userId = @UserId) LIMIT 1";
        int affectedRows = _db.Execute(sql, new { id, userId });
        return affectedRows == 1;
      }
    }

    internal bool EditKeep(Keep keepToUpdate)
    {
      {
        string sql = "UPDATE keeps SET Views = @views, Keeps = @keeps WHERE id = @Id";
        int affectedRows = _db.Execute(sql, keepToUpdate);
        return affectedRows == 1;
      }
    }

    internal Keep GetKeepById(int id)
    {
      string sql = "SELECT * FROM keeps WHERE id = @Id";
      return _db.QueryFirstOrDefault<Keep>(sql, new { id });
    }
  }
}