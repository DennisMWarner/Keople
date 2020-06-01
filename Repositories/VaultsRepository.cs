using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;

namespace Keepr.Repositories
{
  public class VaultsRepository
  {
    private readonly IDbConnection _db;

    public VaultsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<Vault> Get(string userId)
    {
      // WHERE isPrivate = 0
      string sql = "SELECT * FROM vaults WHERE userId =@UserId;";
      return _db.Query<Vault>(sql, new { userId });
    }

    internal Vault Create(Vault newVault)
    {
      string sql = @"
            INSERT INTO vaults(name, description, userId)
            VALUES(@Name, @Description, @UserId); 
            SELECT LAST_INSERT_ID()
        ";
      newVault.Id = _db.ExecuteScalar<int>(sql, newVault);
      return newVault;
    }

    internal Vault GetVaultById(int id)
    {

      string sql = "SELECT * FROM vaults WHERE id = @Id";
      return _db.QueryFirstOrDefault<Vault>(sql, new { id });

    }

    internal bool Delete(int id)
    {
      string sql = @"
     DELETE from vaults WHERE id =@Id LIMIT 1";
      int affectedRows = _db.Execute(sql, new { id });
      return affectedRows == 1;
    }
  }
}