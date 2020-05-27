using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;

namespace Keepr.Repositories
{
  public class VaultKeepsRepository
  {
    private readonly IDbConnection _db;

    public VaultKeepsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<VaultKeep> Get()
    {
      // WHERE isPrivate = 0
      string sql = "SELECT * FROM vaultkeeps;";
      return _db.Query<VaultKeep>(sql);
    }

    internal VaultKeep Create(VaultKeep newVaultKeep)
    {
      string sql = @"
            INSERT INTO vaultkeeps(vaultId, keepId, userId)
            VALUES(@vaultId, @KeepId, @UserId); 
            SELECT LAST_INSERT_ID()
        ";
      newVaultKeep.Id = _db.ExecuteScalar<int>(sql, newVaultKeep);
      return newVaultKeep;
    }

    internal VaultKeep GetVaultKeepById(int id)
    {
      string sql = "SELECT * FROM vaultkeeps WHERE id = @Id";
      return _db.QueryFirstOrDefault<VaultKeep>(sql, new { id });
    }
  }
}