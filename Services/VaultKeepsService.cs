using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultKeepsService
  {
    private readonly VaultKeepsRepository _repo;
    public VaultKeepsService(VaultKeepsRepository repo)
    {
      _repo = repo;
    }
    public VaultKeep Create(VaultKeep newVaultKeep)
    {
      return _repo.Create(newVaultKeep);
    }

    internal object Delete(int id)
    {
      if (_repo.Delete(id))
      {
        return "Keep successfully removed from Vault.";
      }
      throw new Exception("Could not delete Keep.");
    }

    internal IEnumerable<VaultKeep> Get(string userId)
    {
      {
        return _repo.Get(userId);
      }
    }
  }
}